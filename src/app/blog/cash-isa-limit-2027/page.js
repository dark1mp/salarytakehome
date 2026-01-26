import React from "react";
import Link from "next/link";

export const metadata = {
  title: "The £12,000 Cash ISA Limit: What You Need to Know Before April 2027",
  description: "Your tax-free savings allowance is about to change. From April 2027, under-65s can only deposit £12,000 per year into cash ISAs. Here's what it means for your money and how to prepare.",
  keywords: "cash ISA limit 2027, ISA allowance, £12000 ISA limit, cash ISA changes, savings tax, ISA rules 2027, tax-free savings",
  openGraph: {
    title: "The £12,000 Cash ISA Limit: What You Need to Know Before April 2027",
    description: "Your tax-free savings allowance is about to change. Here's what it means for your money.",
    type: "article",
    publishedTime: "2026-01-25T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The £12,000 Cash ISA Limit: What You Need to Know",
    description: "Your tax-free savings allowance is about to change. Here's what it means for your money.",
  },
};

export default function CashISALimit2027() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
              Savings & ISAs
            </span>
            <time className="text-gray-500 text-sm" dateTime="2026-01-25">
              January 25, 2026
            </time>
            <span className="text-gray-500 text-sm">18 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            The £12,000 Cash ISA Limit: What You Need to Know Before April 2027
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your tax-free savings allowance is about to change. Here's what it means for your money.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              If you're under 65 and like keeping your savings in cash ISAs, you've got until April 2027 to make the most of your current allowance. After that, there's a cap coming—and it's going to force millions of savers to make some big decisions about where to put their money.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The government announced in the Autumn 2025 Budget that from 6 April 2027, anyone under 65 will only be able to deposit £12,000 per year into cash ISAs. That's a £8,000 cut from the current £20,000 limit. The overall ISA allowance stays at £20,000, but if you want to use the full amount, you'll need to put at least £8,000 into stocks and shares, innovative finance ISAs, or a Lifetime ISA instead.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              It's not quite as simple as it sounds, either. The government's already planning rules to stop people gaming the system—limits on transferring between ISA types, possible charges on cash held in investment accounts, and tests to determine whether an investment is "cash-like."
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Let's break down what's actually happening, who it affects, and what you should be thinking about right now.
            </p>
          </div>

          {/* What's Actually Changing */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Actually Changing (and When)</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Here's the timeline:
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
              <h3 className="font-semibold text-blue-800 mb-3">Right now (2025-26 tax year):</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                You can put up to £20,000 into cash ISAs if you want. Or split it across different ISA types—your choice. If you're 18 or older, you have complete flexibility.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
              <h3 className="font-semibold text-amber-800 mb-3">From 6 April 2027 onwards:</h3>
              <p className="text-amber-700 text-sm leading-relaxed mb-3">The rules split depending on your age:</p>
              <ul className="text-amber-700 space-y-2 text-sm">
                <li>• <strong>Under 65:</strong> Maximum £12,000 per year into cash ISAs</li>
                <li>• <strong>65 and over:</strong> Full £20,000 allowance still available for cash ISAs</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The overall £20,000 ISA allowance doesn't change. What changes is how much of it you can shelter in cash.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              And here's the kicker: the government is also increasing the tax you pay on savings interest outside ISAs. From April 2027, the rates jump to:
            </p>
            <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
              <h3 className="font-semibold text-red-800 mb-3">New Savings Tax Rates (from April 2027):</h3>
              <ul className="text-red-700 space-y-2 text-sm">
                <li>• <strong>22%</strong> for basic-rate taxpayers (up from 20%)</li>
                <li>• <strong>42%</strong> for higher-rate taxpayers (up from 40%)</li>
                <li>• <strong>47%</strong> for additional-rate taxpayers (up from 45%)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
              <p className="text-gray-800 text-sm leading-relaxed">
                So at exactly the same time they're reducing how much you can protect in cash ISAs, they're increasing the tax bill on savings held outside ISAs. Convenient timing, isn't it?
              </p>
            </div>
          </div>

          {/* Why Is This Happening? */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Is This Happening?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The official line is that this is about encouraging investment. The government wants people putting more money into stocks and shares—boosting the UK economy, supporting British businesses, all that.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The less official line? It's a revenue raiser dressed up as an investment incentive.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Think about it. For years, interest rates were so low that most people's savings didn't generate enough interest to even hit their personal savings allowance. The personal savings allowance (PSA) is the amount of interest you can earn tax-free outside ISAs:
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Personal Savings Allowance:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Basic-rate taxpayers:</strong> £1,000</li>
                <li>• <strong>Higher-rate taxpayers:</strong> £500</li>
                <li>• <strong>Additional-rate taxpayers:</strong> £0</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              But interest rates have climbed. As of January 2026, some of the best cash ISAs are paying over 4.3%. Suddenly, if you've got £25,000 sitting in savings earning 4%, you're generating £1,000 in interest—right at your PSA limit if you're a basic-rate taxpayer.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              More people are now paying tax on their savings interest than at any point since the PSA was introduced in 2016. The government knows this. By capping cash ISAs and simultaneously increasing savings tax rates, they're creating a double whammy that will pull millions more into the tax net.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-6">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Jason Hollands, managing director at Bestinvest by Evelyn Partners,</strong> called it what it is: "yet another stealth tax."
              </p>
            </div>
          </div>

          {/* Who Actually Gets Hit By This? */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Actually Gets Hit By This?</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">The obvious losers: Conservative savers under 65</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you're someone who prefers the safety and certainty of cash—maybe you're approaching retirement, saving for a house deposit, or just risk-averse by nature—you're being pushed toward investment products you might not want.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Say you've been maxing out your cash ISA each year at £20,000. From 2027, you'll face a choice:
            </p>
            <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
              <ul className="text-red-700 space-y-2 text-sm">
                <li>• Only shelter £12,000 and pay tax on the interest from your remaining savings</li>
                <li>• Put £8,000 into stocks and shares, accepting the risk that comes with it</li>
                <li>• Leave £8,000 in taxable savings accounts and pay the new higher tax rates</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              None of these options are what you signed up for.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Emergency fund savers</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Financial advisers typically recommend keeping 3-6 months of expenses in easily accessible cash. For many households, that's £15,000-£30,000. If you're building this fund inside a cash ISA, you'll hit the new limit before you've even got adequate emergency coverage.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">People who've already built up large cash ISA balances</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Here's something important: the £12,000 limit only applies to new contributions. Money you've already got in cash ISAs stays exactly where it is, continues earning tax-free interest, and doesn't count against the new limit.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              So if you currently have £50,000 in cash ISAs from previous years, that's all protected. But you can only add £12,000 more per year going forward.
            </p>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mt-6">
              <p className="text-amber-800 text-sm leading-relaxed">
                This creates a bizarre situation where people who've been saving consistently for years maintain an advantage over younger savers who are just starting out.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">The winners: Over-65s and people already comfortable with investing</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you're 65 or over, none of this affects you. You keep the full £20,000 cash ISA allowance.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              And if you're already happy putting money into stocks and shares ISAs anyway? This barely touches you. You were probably splitting your allowance already, so the forced allocation might not even change your behaviour.
            </p>
          </div>

          {/* The Loopholes They're Already Closing */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Loopholes They're Already Closing</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When the cash ISA limit was first announced, financial advisers immediately spotted some potential workarounds:
            </p>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">"What if I open a stocks and shares ISA but just leave the money sitting in cash within it?"</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Nice try. The government anticipated this. They're introducing charges on interest paid on cash held in stocks and shares or innovative finance ISAs. The details aren't finalised yet, but it's clear they want to discourage this kind of cash parking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">"Can't I just transfer money from a stocks and shares ISA back to a cash ISA if I need to?"</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Not after April 2027. The rules will explicitly ban transfers from stocks and shares ISAs or innovative finance ISAs back to cash ISAs. It's a one-way street.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">"What about money market funds? They're basically cash, right?"</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The government's bringing in tests "to determine whether an investment is eligible to be held in a stocks and shares ISA or is 'cash like.'" Exactly what those tests look like hasn't been revealed, but it's clear they're trying to prevent people from treating quasi-cash investments as genuine stock and share holdings.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-6">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Jason Hollands</strong> raised concerns that this could "throw doubt about access to money market funds within stocks and shares ISAs and could even bring short-dated bonds into question."
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed mt-4">
              The message is clear: if you want tax-free treatment under the new rules, they want you actually investing, not just finding creative ways to park cash with a different label on it.
            </p>
          </div>

          {/* What About the Current Tax Year? */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What About the Current Tax Year? (2025-26 and 2026-27)</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You've still got time. The £20,000 cash ISA limit remains in place for:
            </p>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• The current 2025-26 tax year (ending 5 April 2026)</li>
                <li>• The entire 2026-27 tax year (6 April 2026 to 5 April 2027)</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              That's two full years where you can still shelter £20,000 in cash if you want to.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you've got a substantial amount sitting in taxable savings accounts earning interest, now would be a sensible time to move it into cash ISAs while you still can. Once it's in there, it's protected forever—there's no retrospective clawback.
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Current rates (as of January 2026):</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Best easy access cash ISAs:</strong> up to 4.35%</li>
                <li>• <strong>Best 1-year fixed cash ISAs:</strong> up to 4.12%</li>
                <li>• <strong>Best 2-year fixed cash ISAs:</strong> up to 4.16%</li>
                <li>• <strong>Best 3-year fixed cash ISAs:</strong> up to 4.17%</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Those rates have been falling throughout 2025 as the Bank of England cut interest rates multiple times (from 4.75% to 3.75%). They'll probably continue drifting lower through 2026, but they're still significantly better than the sub-2% rates we saw for most of the 2010s.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you can lock in a decent fixed rate now, you're protecting not just your principal but also a guaranteed return that beats the new higher tax rates coming in 2027.
            </p>
          </div>

          {/* What Should You Actually Do? */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Should You Actually Do?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The answer depends entirely on your circumstances, but here are some scenarios:
            </p>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
              <h3 className="font-semibold text-blue-800 mb-3">If you're under 65 with substantial cash savings (£50,000+):</h3>
              <p className="text-blue-700 text-sm font-semibold mb-2">Action plan:</p>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• <strong>Maximise cash ISAs now:</strong> Use your full £20,000 cash ISA allowance in 2025-26 and again in 2026-27. That's £40,000 you'll have sheltered before the new limits kick in.</li>
                <li>• <strong>Calculate your tax exposure:</strong> Work out how much interest you'd earn on savings held outside ISAs. If it's more than your personal savings allowance (£1,000 for basic-rate taxpayers, £500 for higher-rate), you'll be paying the new increased tax rates from 2027.</li>
                <li>• <strong>Consider fixed-rate ISAs:</strong> Locking money away for 1-3 years might not sound appealing, but you're guaranteed a rate and protected from the new rules coming in 2027.</li>
                <li>• <strong>Reassess after 2027:</strong> Once the new rules are in place, you'll need to decide whether to genuinely move some money into stocks and shares, or accept paying tax on interest from your non-ISA savings.</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
              <h3 className="font-semibold text-amber-800 mb-3">If you're in your 50s or early 60s:</h3>
              <p className="text-amber-700 text-sm font-semibold mb-2">Action plan:</p>
              <ul className="text-amber-700 space-y-2 text-sm">
                <li>• <strong>Front-load your cash ISAs now:</strong> You've only got a couple of years of the £20,000 limit left. Make the most of it.</li>
                <li>• <strong>Think about your 65th birthday:</strong> If you'll hit 65 before April 2029, you might only face one or two years of the restricted allowance before the full £20,000 cash ISA limit returns.</li>
                <li>• <strong>Don't panic-invest:</strong> Just because they're pushing you toward stocks and shares doesn't mean you have to do it. If you're genuinely uncomfortable with investment risk—particularly if you're close to needing the money—it's fine to pay some tax rather than risk capital loss.</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
              <h3 className="font-semibold text-green-800 mb-3">If you're already comfortable with investing:</h3>
              <p className="text-green-700 text-sm font-semibold mb-2">Action plan:</p>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• <strong>Not much changes for you:</strong> You were probably already using a mix of cash and stocks and shares ISAs anyway.</li>
                <li>• <strong>Review your asset allocation:</strong> The new rules might actually give you a useful framework. £12,000 in cash for security/emergency funds, £8,000 in stocks and shares for growth. That's not a terrible balance for many people.</li>
                <li>• <strong>Watch the transfer rules:</strong> If you currently move money between ISA types depending on market conditions, that flexibility is about to disappear.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">If you're 65 or over:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lucky you. Carry on as normal. You keep the full £20,000 cash ISA allowance. No changes needed.
              </p>
            </div>
          </div>

          {/* The Bigger Picture */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Bigger Picture: What This Says About UK Savings Policy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              There's something quite revealing about these changes.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For decades, governments have encouraged people to save. ISAs were introduced specifically to make saving attractive. The personal savings allowance was brought in to ensure that people with modest savings wouldn't face tax bills.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              But now, at a time when millions of Britons are finally able to earn decent interest on their savings after years of near-zero rates, the government is simultaneously:
            </p>
            <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
              <ul className="text-red-700 space-y-2 text-sm">
                <li>• Cutting how much you can protect in cash ISAs (from £20,000 to £12,000)</li>
                <li>• Increasing tax on savings interest outside ISAs (22%, 42%, 47%)</li>
                <li>• Making it harder to shield money in investment accounts without genuinely investing</li>
                <li>• Freezing the personal savings allowance (it hasn't increased since 2016)</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The result? More people paying more tax on their savings.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Some will argue this is fair—that ISAs were meant to encourage investment, not just tax-free cash hoarding. And there's some logic to that. But timing matters. These changes are hitting just as savers are finally getting decent returns after 15+ years of rock-bottom interest rates. It feels punitive.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-6">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Kate Underwood, a financial advisor,</strong> made a similar point when discussing childcare costs, but the principle applies here too: "This isn't a perk, it's the minimum support people need."
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed mt-4">
              ISAs aren't a luxury. For many people, they're the only way to save without seeing a chunk of their returns disappear to tax. Cutting the allowance while simultaneously increasing savings tax rates is a one-two punch that will hurt careful savers far more than it'll encourage risk-taking investment.
            </p>
          </div>

          {/* The Lifetime ISA Question */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Lifetime ISA Question</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              One other thing worth mentioning: the government's also announced they'll be consulting on replacing the Lifetime ISA with a "simpler" product for first-time buyers.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Lifetime ISAs currently let you save up to £4,000 per year with a 25% government bonus, but you face harsh penalties if you withdraw for anything other than your first home or retirement after 60.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The replacement product is promised to have "more flexibility" and remove "the need for a withdrawal charge." Details are coming in early 2026.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This matters because the Lifetime ISA sits within your overall £20,000 ISA allowance. If you use £4,000 of your allowance on a Lifetime ISA, you've got £16,000 left for other ISA types. Under the new rules from 2027, that could mean:
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• £4,000 in a Lifetime ISA</li>
                <li>• £12,000 in cash ISAs</li>
                <li>• £4,000 in stocks and shares ISAs</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">Or any other combination you want, as long as cash doesn't exceed £12,000 and the total doesn't exceed £20,000.</p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The new first-time buyer product could change these calculations significantly. Worth watching.
            </p>
          </div>

          {/* What Happens If You Don't Do Anything? */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens If You Don't Do Anything?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Let's be clear: you're not required to use your full ISA allowance. Millions of people don't.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you don't take action, here's what happens:
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your existing cash ISA balances remain protected. Money you've already saved in previous years stays right where it is, earning tax-free interest forever.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              From April 2027, you can only add £12,000 per year to cash ISAs (if you're under 65). Any additional savings will either need to go into:
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Stocks and shares ISAs (investment risk)</li>
                <li>• Innovative finance ISAs (peer-to-peer lending, higher risk)</li>
                <li>• Regular taxable savings accounts (interest taxed at 22%, 42%, or 47% above your personal savings allowance)</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For most people, the path of least resistance will be option three: just accepting the tax bill. That's probably what the Treasury is banking on (literally).
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you've got £30,000 earning 4% in a regular savings account, that's £1,200 in interest. As a basic-rate taxpayer with a £1,000 personal savings allowance, you'd pay 22% tax on the remaining £200—a £44 tax bill.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Not life-changing, but multiply that across millions of savers, and you can see why the government's doing this.
            </p>
          </div>

          {/* Final Thoughts */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The £12,000 cash ISA limit is one of those changes that sounds reasonable on paper—"we're just encouraging investment!"—but feels quite different when you're actually trying to manage your money safely.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Not everyone wants to be an investor. Some people are genuinely risk-averse. Others are saving for specific short-term goals where capital protection matters more than growth. And plenty of people are in their 50s or early 60s, where they've got enough to invest and need to keep substantial sums in accessible cash.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For all those people, these changes are a pain. You're being told to either accept more risk than you're comfortable with, or pay significantly more tax on your careful savings.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              There are two years left before this kicks in. If you're affected, the best thing you can do is maximise your cash ISA contributions in 2025-26 and 2026-27. Get as much sheltered as possible while you still can. Once it's in there, it's protected for life.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              After April 2027? Well, we'll all be working out how to make the new rules work for us. Some will genuinely move into investing. Others will pay the tax. And a few will find creative (legal) ways around the new limits that the Treasury hasn't thought of yet.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              That's how these things always go.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="glass-medium rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">The change:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• From 6 April 2027, under-65s can only deposit £12,000/year into cash ISAs (down from £20,000)</li>
                <li>• Over-65s keep the full £20,000 cash ISA allowance</li>
                <li>• Overall ISA allowance stays at £20,000—but you'll need to use stocks and shares ISAs to access the full amount</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Why it matters:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Tax on savings interest outside ISAs is increasing to 22%/42%/47% from April 2027</li>
                <li>• You can no longer transfer from stocks and shares back to cash ISAs after 2027</li>
                <li>• Government is closing loopholes like holding cash in investment ISAs</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">What to do now:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Maximise cash ISA contributions in 2025-26 and 2026-27 (two full years left at £20,000)</li>
                <li>• Existing cash ISA balances are fully protected forever</li>
                <li>• Consider locking in current rates with fixed-term cash ISAs before they fall further</li>
                <li>• Don't panic-invest just because the government's pushing you toward stocks and shares</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Who's most affected:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Conservative savers who prefer cash to investment risk</li>
                <li>• People building large emergency funds</li>
                <li>• Those in their 50s and early 60s (before the age-65 exemption kicks in)</li>
                <li>• Anyone with substantial savings generating interest above the personal savings allowance</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Take-Home Pay</h2>
            <p className="text-gray-600 mb-6">
              Want to see exactly how much tax you'll pay on your take-home salary and what that means for your savings strategy? Understanding your actual monthly income after tax helps you plan how much you can realistically put into ISAs each year.
            </p>
            <Link 
              href="/take-home-pay-calculator"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Try Take Home Pay Calculator →
            </Link>
          </div>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The £12,000 Cash ISA Limit: What You Need to Know Before April 2027",
            "description": "Your tax-free savings allowance is about to change. From April 2027, under-65s can only deposit £12,000 per year into cash ISAs. Here's what it means for your money.",
            "datePublished": "2026-01-25T00:00:00.000Z",
            "dateModified": "2026-01-25T00:00:00.000Z",
            "author": {
              "@type": "Organization",
              "name": "SalaryTakeHome"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SalaryTakeHome",
              "url": "https://salarytakehome.co.uk"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://salarytakehome.co.uk/blog/cash-isa-limit-2027"
            }
          })
        }} />
      </article>
    </div>
  );
}
