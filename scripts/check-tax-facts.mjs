#!/usr/bin/env node
/**
 * check-tax-facts.mjs — does the site's prose still agree with its calculators?
 *
 * Six checks, defined by scripts/tax-facts.json:
 *
 *   drift        The facts file's `verify` pointers still match the real calculator
 *                constants. Without this the facts file goes stale like everything else.
 *   superseded   A previous tax year's figure presented as the current one.
 *   contradiction The same, but on a page that itself defines the constant — a page
 *                computing at one rate while its prose quotes another.
 *   badge        A "Last updated" badge naming a tax year that isn't current.
 *   signal       A post whose schema says it was modified after publication but which
 *                has no `lastModified` in posts.js, so its sitemap lastmod never moves
 *                and search engines never learn it changed.
 *   future       A change that has already happened, still written as upcoming.
 *
 * Usage:
 *   node scripts/check-tax-facts.mjs            # errors fail, warnings print
 *   node scripts/check-tax-facts.mjs --strict   # warnings fail too
 *   node scripts/check-tax-facts.mjs --quiet    # findings only, no section headers
 *
 * Exit 0 clean, 1 if anything at failing severity was found, 2 on a config problem.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import vm from 'node:vm'

const ROOT = new URL('..', import.meta.url).pathname
const STRICT = process.argv.includes('--strict')
const QUIET = process.argv.includes('--quiet')

const C = process.stdout.isTTY
  ? { red: '\x1b[31m', yellow: '\x1b[33m', green: '\x1b[32m', dim: '\x1b[2m', bold: '\x1b[1m', off: '\x1b[0m' }
  : { red: '', yellow: '', green: '', dim: '', bold: '', off: '' }

let facts
try {
  facts = JSON.parse(readFileSync(join(ROOT, 'scripts/tax-facts.json'), 'utf8'))
} catch (e) {
  console.error(`Cannot read scripts/tax-facts.json: ${e.message}`)
  process.exit(2)
}

const findings = []
const add = (severity, check, file, line, message, detail) =>
  findings.push({ severity, check, file, line, message, detail })

/* ---------------------------------------------------------------- helpers */

/** Pull `const NAME = <literal>` out of a source file by brace matching. */
function extractLiteral(src, name) {
  const m = new RegExp(`const\\s+${name}\\s*=\\s*`).exec(src)
  if (!m) return undefined
  let i = m.index + m[0].length
  const open = src[i]
  if (open !== '{' && open !== '[') return undefined
  const close = open === '{' ? '}' : ']'
  let depth = 0
  let inStr = null
  let inLineComment = false
  for (let j = i; j < src.length; j++) {
    const ch = src[j]
    const prev = src[j - 1]
    if (inLineComment) {
      if (ch === '\n') inLineComment = false
      continue
    }
    if (inStr) {
      if (ch === inStr && prev !== '\\') inStr = null
      continue
    }
    if (ch === '/' && src[j + 1] === '/') { inLineComment = true; continue }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue }
    if (ch === open) depth++
    else if (ch === close) {
      depth--
      if (depth === 0) {
        const literal = src.slice(i, j + 1)
        try {
          return vm.runInNewContext(`(${literal})`, { Infinity })
        } catch {
          return undefined
        }
      }
    }
  }
  return undefined
}

const dig = (obj, path) => path.reduce((o, k) => (o == null ? o : o[k]), obj)

/** Every .js under src/app, excluding build output. */
function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.next') continue
    const p = join(dir, entry)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, out)
    else if (entry.endsWith('.js') || entry.endsWith('.mjs')) out.push(p)
  }
  return out
}

const isHistorical = (rel) => (facts.historicalPages || []).some((h) => rel.startsWith(h))
const srcPath = (key) => {
  const p = facts.sources?.[key]
  if (!p) { console.error(`Unknown source "${key}" in tax-facts.json`); process.exit(2) }
  return p
}

/* ------------------------------------------------- check 1: facts drift */

const loaded = new Map()
const readSource = (key) => {
  const rel = srcPath(key)
  if (!loaded.has(rel)) loaded.set(rel, readFileSync(join(ROOT, rel), 'utf8'))
  return loaded.get(rel)
}

for (const fact of facts.facts) {
  for (const v of fact.verify || []) {
    const src = readSource(v.source)
    const lit = extractLiteral(src, v.const)
    const rel = srcPath(v.source)
    if (lit === undefined) {
      add('error', 'drift', rel, 0,
        `Cannot read ${v.const} — tax-facts.json "${fact.id}" can no longer be verified`,
        'The constant was renamed, restructured or removed. Update tax-facts.json.')
      continue
    }
    const actual = dig(lit, v.path)
    if (actual !== v.expect) {
      add('error', 'drift', rel, 0,
        `${v.const}[${v.path.join('][')}] is ${actual}, tax-facts.json expects ${v.expect}`,
        `Fact "${fact.id}" (${fact.label}). Either the calculator changed and this file ` +
        'needs updating, or the calculator is wrong.')
    }
  }
}

/* ------------------------- checks 2-4, 6: scan every page for stale text */

const files = walk(join(ROOT, 'src/app'))
const definesConst = (src) => /const\s+(TAX_BANDS|NI_BANDS|STUDENT_LOAN|TAX_DATA)\s*=/.test(src)

for (const abs of files) {
  const rel = relative(ROOT, abs)
  const src = readFileSync(abs, 'utf8')
  const lines = src.split('\n')
  const historical = isHistorical(rel)
  const owns = definesConst(src)

  const contextExclude = facts.contextExclude ? new RegExp(facts.contextExclude, 'i') : null
  let muted = false

  lines.forEach((text, idx) => {
    const lineNo = idx + 1

    // Block pragma: wrap a deliberately historical section in
    //   {/* tax-check-ignore-start: reason */} ... {/* tax-check-ignore-end */}
    if (text.includes('tax-check-ignore-start')) { muted = true; return }
    if (text.includes('tax-check-ignore-end')) { muted = false; return }
    if (muted) return
    if (text.includes('tax-check-ignore')) return

    // --- superseded / contradiction ---
    for (const fact of facts.facts) {
      for (const pattern of fact.stale || []) {
        const re = new RegExp(pattern, 'i')
        const hit = re.exec(text)
        if (!hit) continue
        if (historical) continue
        // "up from £26,065", "was £118.75", "2025/26: £28,470" — a labelled comparison,
        // not a claim about the present.
        if (contextExclude && contextExclude.test(text)) continue
        const severity = owns ? 'error' : 'warn'
        const check = owns ? 'contradiction' : 'superseded'
        add(severity, check, rel, lineNo,
          `${fact.label}: found "${hit[0].trim()}" — current is ${fact.current}`,
          owns
            ? 'This page defines its own tax constants, so its prose contradicts its own ' +
              'calculation. ' + (fact.note || '')
            : fact.note || '')
      }
    }

    // --- badge naming a non-current tax year ---
    if (/Last updated:/.test(text)) {
      const years = [...text.matchAll(/\b(20\d\d)\/(\d\d)\b/g)].map((m) => `${m[1]}/${m[2]}`)
      const bad = years.filter((y) => y !== facts.currentTaxYear && y !== facts.forwardTaxYear)
      if (bad.length && !historical) {
        add('error', 'badge', rel, lineNo,
          `"Last updated" badge names ${bad.join(', ')} — current is ${facts.currentTaxYear}`,
          'Either the page needs updating or the badge does. If the page is deliberately ' +
          'archival, add it to historicalPages in tax-facts.json and use the amber badge.')
      }
    }

    // --- past change still in future tense ---
    const ft = facts.futureTense
    if (ft) {
      const verbs = new RegExp(`\\b(?:${ft.verbs})\\b`, 'i')
      // "The Budget in October 2026 announced that X will rise in April 2027" is correct
      // prose: the future verb belongs to the future date, not the past one.
      const alsoFuture = (ft.futureDates || []).some((d) => text.includes(d))
      // "the government announced that X will rise" reports a future change; the future
      // verb is correct there, however old the date it is attached to.
      const reported = ft.reportingVerbs
        ? new RegExp(`\\b(?:${ft.reportingVerbs})\\b`, 'i').test(text)
        : false
      if (verbs.test(text) && !alsoFuture && !reported) {
        const stale = (ft.pastDates || []).find((d) => text.includes(d))
        if (stale && !historical) {
          add('warn', 'future', rel, lineNo,
            `"${stale}" has passed but this reads as upcoming`,
            'Rewrite in the past tense, or the page tells readers a live rule is still coming.')
        }
      }
    }
  })
}

/* ------------------- check 5: refreshed posts that cannot signal freshness */

try {
  const postsSrc = readFileSync(join(ROOT, 'src/app/blog/posts.js'), 'utf8')
  const postsLit = extractLiteral(postsSrc, 'blogPosts')
  if (!postsLit) {
    add('error', 'signal', 'src/app/blog/posts.js', 0,
      'Cannot parse blogPosts — the signal check could not run', '')
  } else {
    for (const post of postsLit) {
      if (!post?.slug) continue
      let pageSrc
      try {
        pageSrc = readFileSync(join(ROOT, 'src/app/blog', post.slug, 'page.js'), 'utf8')
      } catch { continue }
      const m = /"dateModified":\s*"(\d{4}-\d{2}-\d{2})/.exec(pageSrc)
      if (!m) continue
      const modified = m[1]
      if (modified > post.date && !post.lastModified) {
        add('error', 'signal', `src/app/blog/${post.slug}/page.js`, 0,
          `schema dateModified ${modified} is after publish date ${post.date}, but posts.js has no lastModified`,
          'sitemap.js falls back to `date`, so this correction will never be re-crawled. ' +
          `Add  lastModified: "${modified}"  to this post's entry in posts.js.`)
      } else if (post.lastModified && modified > post.lastModified) {
        add('warn', 'signal', `src/app/blog/${post.slug}/page.js`, 0,
          `schema dateModified ${modified} is newer than posts.js lastModified ${post.lastModified}`,
          'Bump lastModified so the sitemap reflects the most recent change.')
      }
    }
  }
} catch (e) {
  add('error', 'signal', 'src/app/blog/posts.js', 0, `signal check failed: ${e.message}`, '')
}

/* ------------------------------------------------------------- reporting */

const CHECKS = {
  drift: 'Facts file vs calculator constants',
  contradiction: 'Page contradicts its own calculator',
  superseded: 'Superseded figure presented as current',
  badge: '"Last updated" badge names the wrong tax year',
  signal: 'Correction that cannot reach search engines',
  future: 'Past change still written as upcoming',
}

const errors = findings.filter((f) => f.severity === 'error')
const warns = findings.filter((f) => f.severity === 'warn')

if (!findings.length) {
  console.log(`${C.green}✓${C.off} tax facts consistent — ${facts.facts.length} facts checked across ${files.length} files`)
  process.exit(0)
}

for (const key of Object.keys(CHECKS)) {
  const group = findings.filter((f) => f.check === key)
  if (!group.length) continue
  if (!QUIET) console.log(`\n${C.bold}${CHECKS[key]}${C.off} ${C.dim}(${key}, ${group.length})${C.off}`)
  for (const f of group) {
    const tag = f.severity === 'error' ? `${C.red}error${C.off}` : `${C.yellow}warn ${C.off}`
    const loc = f.line ? `${f.file}:${f.line}` : f.file
    console.log(`  ${tag} ${loc}`)
    console.log(`        ${f.message}`)
    if (f.detail) console.log(`        ${C.dim}${f.detail.trim()}${C.off}`)
  }
}

const failing = STRICT ? findings.length : errors.length
console.log(
  `\n${failing ? C.red + '✗' + C.off : C.green + '✓' + C.off} ` +
  `${errors.length} error(s), ${warns.length} warning(s)` +
  (STRICT ? '' : `${C.dim} — warnings do not fail; use --strict to change that${C.off}`)
)
process.exit(failing ? 1 : 0)
