import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Are You Owed Money? The Student Loan Refund Thousands of UK Graduates Are Missing",
  description: "Over 1 million student loan overpayments happened last year. Here's how to check if you're one of them—and get your money back.",
  keywords: "student loan refund, student loan overpayment, SLC refund, student loan repayment, student loan claim, student loan overpaid",
  openGraph: {
    title: "Are You Owed Money? The Student Loan Refund Thousands of UK Graduates Are Missing",
    description: "Over 1 million student loan overpayments happened last year. Here's how to check if you're one of them—and get your money back.",
    type: "article",
    publishedTime: "2026-01-25T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Are You Owed Money? The Student Loan Refund Thousands Are Missing",
    description: "Over 1 million student loan overpayments happened last year. Here's how to check if you're owed money.",
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/blog/student-loan-refund",
  },
};

export default function StudentLoanRefund() {
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
              Student Loans
            </span>
            <time className="text-gray-500 text-sm" dateTime="2026-01-25">
              January 25, 2026
            </time>
            <span className="text-gray-500 text-sm">16 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Are You Owed Money? The Student Loan Refund Thousands of UK Graduates Are Missing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Over 1 million student loan overpayments happened last year. Here's how to check if you're one of them—and get your money back.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              There's something quietly frustrating happening to graduates across the UK. Every month, money gets deducted from their payslips for student loan repayments. Fair enough—they borrowed the money, they should pay it back. Except thousands of them shouldn't be paying anything at all. At least, not yet.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              According to the latest figures from the Student Loans Company (SLC), more than 1.1 million overpayments were made in the 2024/25 tax year alone. That's over a million instances where someone paid money they didn't actually owe. The average refund? Around £240. But some people are owed over £1,000.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Here's the thing that really gets people: most of them have no idea.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This isn't a case of the system actively scamming you. It's more that the way student loans work creates natural gaps where mistakes slip through—and if you're not checking your payslip carefully every month, you won't notice until you're hundreds (or thousands) of pounds down.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              So let's break this down. How does this happen? Who's affected? And most importantly—how do you get your money back?
            </p>
          </div>

          {/* Why Student Loan Overpayments Happen */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Student Loan Overpayments Happen</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Student loan repayments in the UK work through the PAYE system. Your employer automatically deducts them from your salary, just like tax and National Insurance. It's meant to be simple and automatic.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The problem is that your loan repayments are calculated based on your <em>annual</em> income, but they're collected based on your <em>monthly</em> earnings.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Say you're on Plan 2 (the most common plan for people who started uni between 2012 and 2023). You shouldn't start repaying until you earn over £27,295 a year. That works out to £2,274 a month.
            </p>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
              <h3 className="font-semibold text-amber-800 mb-3">Example Scenario:</h3>
              <p className="text-amber-700 text-sm leading-relaxed mb-2">
                Now imagine you earn £2,000 a month for eleven months—totally fine, no repayments due. But in December, you get a £1,500 bonus. Suddenly that month, your pay is £3,500.
              </p>
              <p className="text-amber-700 text-sm leading-relaxed mb-2">
                Your payroll system sees £3,500 and thinks "that's over the £2,274 threshold, time to deduct 9%." So it takes £110 from your pay that month (9% of the £1,226 over the threshold).
              </p>
              <p className="text-amber-700 text-sm leading-relaxed">
                But here's the issue: your total annual income is only £23,500 (11 × £2,000 + £3,500). That's well below the £27,295 threshold. You shouldn't have paid anything.
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              That £110? You can claim it back. And if this has been happening for a few years—bonuses, overtime, irregular hours—it adds up fast.
            </p>
          </div>

          {/* The Four Main Reasons */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Four Main Reasons You Might Be Owed a Refund</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">1. You Started Repaying Too Early</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This is the big one. In 2024/25 alone, over 36,000 people started repaying their student loans before they were supposed to.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The rule is simple: if you're a full-time student who started uni in 1998 or later, you shouldn't start repaying until the April <em>after</em> you finish or leave your course. Doesn't matter what you're earning.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              So if you graduated in summer 2024, you shouldn't have started paying until April 2025. But if you started a job in September 2024 and loan deductions began immediately, every single payment was an overpayment.
            </p>
            <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
              <p className="text-red-800 text-sm leading-relaxed">
                This usually happens because of admin errors—either you filled out the HMRC starter checklist wrong when you started your new job, or your employer made a mistake processing it. It's not malicious, just messy paperwork. But it's costing people serious money.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">2. Your Annual Income Was Below the Threshold</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              As explained above, if your total income for the year falls below the repayment threshold for your plan, any payments made during the year can be refunded.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This catches a lot of people who have irregular incomes—freelancers, contractors, part-time workers, anyone whose pay fluctuates month to month.
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">The thresholds for 2025-26 are:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Plan 1:</strong> £26,065 per year (£2,172/month)</li>
                <li>• <strong>Plan 2:</strong> £28,470 per year (£2,372/month)</li>
                <li>• <strong>Plan 4 (Scotland):</strong> £31,905 per year (£2,659/month)</li>
                <li>• <strong>Plan 5:</strong> £25,000 per year (£2,083/month)</li>
                <li>• <strong>Postgraduate Loan:</strong> £21,000 per year (£1,750/month)</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If your P60 at the end of the tax year shows you earned below these amounts, but deductions were taken because of one-off spikes in monthly pay, you're due a refund.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">3. You're on the Wrong Repayment Plan</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This is less common but still affects thousands of people. If your employer has you registered on the wrong loan plan, you could be repaying at the wrong rate or wrong threshold.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For example, if you started uni in 2015 and should be on Plan 2, but your employer mistakenly has you on Plan 1, you'll be repaying at a lower threshold than you should be. That means you're paying when you shouldn't.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
              <p className="text-blue-800 text-sm leading-relaxed">
                You can check which plan you're actually on by logging into your Student Loans Company account online and downloading your "active plan type letter." Then ask your employer which plan they've got you on. If they don't match, you've likely overpaid.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">4. You Paid After Your Loan Was Cleared</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This one catches people by surprise. You'd think the system would automatically stop deductions once your loan is paid off, right?
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              It doesn't—at least not immediately.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In 2024/25, nearly 58,000 graduates continued making payments even after their loan balance hit zero. The total overpaid? Over £23.5 million.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Here's why this happens: there's a delay in how information flows between HMRC (who collect the payments) and the Student Loans Company (who track your loan balance). It can take up to four weeks for the message to get through.
            </p>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200 mt-6">
              <p className="text-green-800 text-sm leading-relaxed">
                If you're in your final year of repayments, the Student Loans Company now recommends switching to Direct Debit instead of PAYE deductions. That way, they control the payments directly and can stop them the moment your balance clears.
              </p>
            </div>
          </div>

          {/* How Much Are People Actually Getting Back? */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Much Are People Actually Getting Back?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The refund amounts vary massively depending on why you overpaid and for how long.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Early repayments</h3>
                <p className="text-blue-700 text-sm">
                  If you started paying before you should have, and you've been paying for a year or two, we're talking £500-£1,000+ in some cases. One reader reported getting a £949 refund when they discovered they'd been paying early.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Below threshold refunds</h3>
                <p className="text-green-700 text-sm">
                  These tend to be smaller—typically £50-£250 per year—but they still add up, especially if you've been overpaying for multiple years.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">Wrong plan refunds</h3>
                <p className="text-amber-700 text-sm">
                  These depend entirely on how different your correct plan's threshold is from the wrong one. Could be anywhere from £100 to several hundred pounds per year.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Post-clearance overpayments</h3>
                <p className="text-red-700 text-sm">
                  Usually £100-£300, depending on how many months of deductions continued after your balance hit zero.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
              <p className="text-gray-800 font-semibold text-sm">
                The important thing to understand is that you can claim back overpayments going back <em>years</em>. There's no time limit. If you've been overpaying since 2018, you can claim for all of it.
              </p>
            </div>
          </div>

          {/* How to Check If You're Owed Money */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Check If You're Owed Money</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Right, let's get practical. Here's how to find out if the Student Loans Company owes you money.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
              <h3 className="font-semibold text-blue-800 mb-3">Step 1: Check your loan balance and repayment history</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-2">
                Go to the <a href="https://www.slc.co.uk" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Student Loans Company website</a> and log into your online repayment account. You'll need your Customer Reference Number (CRN)—it's on any letters from the SLC, or you can find it in your account.
              </p>
              <p className="text-blue-700 text-sm leading-relaxed">
                Once you're logged in, check:
              </p>
              <ul className="text-blue-700 text-sm space-y-1 mt-2">
                <li>• Your current loan balance</li>
                <li>• Which repayment plan you're on</li>
                <li>• Your repayment history (when payments started, how much you've paid)</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
              <h3 className="font-semibold text-green-800 mb-3">Step 2: Gather your payslips and P60s</h3>
              <p className="text-green-700 text-sm leading-relaxed mb-2">
                Dig out your payslips for the last few years. Look for the line that shows student loan deductions.
              </p>
              <p className="text-green-700 text-sm leading-relaxed mb-2">
                Also get your P60 forms (the annual summary your employer gives you each April). These show your total income for the tax year. Compare that to the threshold for your plan.
              </p>
              <p className="text-green-700 text-sm leading-relaxed">
                If your P60 shows income below the threshold but your payslips show deductions, you're owed money.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
              <h3 className="font-semibold text-amber-800 mb-3">Step 3: Check when you finished your course</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                If you graduated (or left your course for any reason) and started paying back in the same year before the following April, those are overpayments.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-3">Step 4: Compare your employer's plan with your actual plan</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                Download your "active plan type letter" from your SLC account. Ask your HR or payroll department which plan they have you registered on. If they don't match, that's a problem.
              </p>
            </div>
          </div>

          {/* How to Claim Your Refund */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Claim Your Refund</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you've worked out that you're owed money, here's what to do.
            </p>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
              <h3 className="font-semibold text-green-800 mb-3">For overpayments in previous tax years (before April 2025):</h3>
              <ol className="text-green-700 space-y-2 text-sm">
                <li>1. Log into your <a href="https://www.slc.co.uk" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Student Loans Company repayment account</a></li>
                <li>2. Click "Request a refund"</li>
                <li>3. Select the tax year and reason for your claim</li>
                <li>4. Submit the request</li>
              </ol>
              <p className="text-green-700 text-sm mt-3">
                That's it. The SLC will review your claim and, if approved, issue a refund directly to your bank account. Most people report getting their money within 2-4 weeks.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
              <h3 className="font-semibold text-amber-800 mb-3">For overpayments in the current tax year (2025-26):</h3>
              <p className="text-amber-700 text-sm leading-relaxed mb-2">
                You can't claim these yet. The SLC needs to receive your annual earnings information from HMRC first, which doesn't happen until after the tax year ends on 5 April 2026.
              </p>
              <p className="text-amber-700 text-sm leading-relaxed">
                The SLC says they'll contact people who are due refunds for the current year later in 2026. But if you suspect you're owed money, make a note to check your online account in summer 2026 and submit a claim if nothing's happened.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">If you don't have online access:</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-2">
                You can call the Student Loans Company directly:
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <strong>England and Wales:</strong> 0300 100 0611</li>
                <li>• <strong>Scotland:</strong> 0300 100 0619</li>
                <li>• <strong>Northern Ireland:</strong> 0300 100 0077</li>
              </ul>
              <p className="text-blue-700 text-sm mt-3">
                Lines are open Monday to Friday, 8am to 6pm. Have your Customer Reference Number (CRN) and National Insurance number ready.
              </p>
            </div>
          </div>

          {/* Important Things to Know About Refunds */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Things to Know About Refunds</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">You won't get interest:</strong> The refund is just the amount you overpaid. You don't get compensation for the fact your money's been sitting with them.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">It doesn't affect your loan term:</strong> Getting a refund doesn't extend when your loan gets written off. That's still based on when you first became eligible to repay, not how much you've actually paid.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">Multiple overpayment types:</strong> If you've overpaid for several reasons (early repayments <em>and</em> below threshold, for example), you can claim for all of them. They're separate issues.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">Keep your contact details updated:</strong> The SLC tries to automatically refund people where they can, but if they've got the wrong email or address for you, you'll miss out. Log into your account every so often and make sure your details are current.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">Don't wait for them to contact you:</strong> Yes, the SLC says they'll reach out to people who are owed money. But with over a million overpayments last year, they're clearly not catching everyone. Better to check yourself.
                </p>
              </div>
            </div>
          </div>

          {/* What About Student Loan Write-Offs? */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What About Student Loan Write-Offs?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              While we're talking about student loans, it's worth quickly covering when your loan gets written off—because this affects whether you should even care about overpayments.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your loan will be automatically cancelled after a set period, regardless of how much you've paid back. The period depends on your plan:
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Plan 1 (started before 2012):</strong> 25 years after you first became eligible to repay, or when you turn 65 (whichever comes first, depending on when you took out the loan)</li>
                <li>• <strong>Plan 2 (started 2012-2023):</strong> 30 years after you first became eligible to repay</li>
                <li>• <strong>Plan 4 (Scotland):</strong> 30 years after you first became eligible to repay, or at 65 (depending on when you took out the loan)</li>
                <li>• <strong>Plan 5 (started 2023 onwards):</strong> 40 years after you first became eligible to repay</li>
                <li>• <strong>Postgraduate Loans:</strong> 30 years after you first became eligible to repay</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For most people, this means your loan will be written off sometime in your 50s or 60s, whether you've paid it all back or not.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-6">
              <p className="text-blue-800 text-sm leading-relaxed">
                This is actually an important consideration for whether you should care about small overpayments. If you're on track to have your loan written off with a substantial balance remaining, reclaiming £100 here or there won't change your total repayment amount—it's all getting wiped anyway.
              </p>
              <p className="text-blue-800 text-sm leading-relaxed mt-3">
                But if you're likely to pay off your loan in full before the write-off date, every overpayment is genuinely costing you extra money you'll never see again.
              </p>
            </div>
          </div>

          {/* The Awareness Gap */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Awareness Gap</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Here's what frustrates a lot of people about this whole situation: it's not that the Student Loans Company is doing anything illegal. The rules are clear (once you know them). The refund process works (once you know about it).
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The problem is that most graduates have no idea any of this exists.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You finish uni, you start a job, you see "student loan" deducted from your payslip, and you assume it's all being handled correctly. Why wouldn't you? It's automatic. It's through your employer. Surely someone's keeping track?
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              But the system is designed around the assumption that <em>you'll check</em>. That you'll log into your SLC account regularly. That you'll compare your P60 to the threshold. That you'll notice if payments start before April after you graduate.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most people don't do any of that. They've got rent to pay, bills to juggle, life to get on with. Student loans are just this vague background thing that gets sorted out automatically.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Except when it doesn't.
            </p>
            <div className="bg-red-50 rounded-xl p-6 border border-red-200 mt-6">
              <p className="text-red-800 text-sm leading-relaxed">
                The result is millions of pounds sitting with the Student Loans Company that should be in graduates' bank accounts. And the longer it sits there, the less likely people are to ever claim it—because who's going to check their student loan account from five years ago on the off-chance they're owed £200?
              </p>
            </div>
          </div>

          {/* What Should You Do Now? */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Should You Do Now?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you've read this far, you're probably wondering whether you're one of the people owed money. Here's the honest answer: you might be.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The only way to know for sure is to check. It takes maybe 15 minutes:
            </p>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
              <ol className="text-green-700 space-y-2 text-sm">
                <li>1. Log into your Student Loans Company account</li>
                <li>2. Check when you finished your course vs when repayments started</li>
                <li>3. Look at your P60 from the last few years vs the threshold for your plan</li>
                <li>4. Compare your SLC plan to what your employer has you on</li>
              </ol>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If any of those throw up red flags, submit a refund request. Worst case scenario, they say no and you've spent 15 minutes. Best case, you've got a few hundred quid (or more) coming your way.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              And even if you're not owed anything right now, it's worth checking your payslip each month going forward. Student loans are one of those things where small errors compound quickly if you're not paying attention.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-6">
              <p className="text-blue-800 font-semibold text-sm">
                The system's not going to look out for you. You have to look out for yourself.
              </p>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="glass-medium rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Who might be owed a refund:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Anyone who started repaying before April after finishing their course</li>
                <li>• Anyone whose annual income was below the threshold despite monthly deductions</li>
                <li>• Anyone on the wrong repayment plan with their employer</li>
                <li>• Anyone who kept paying after their loan balance hit zero</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">How to check:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Log into your <a href="https://www.slc.co.uk" target="_blank" rel="noopener noreferrer" className="underline">Student Loans Company account</a></li>
                <li>• Compare your graduation/leaving date with when repayments started</li>
                <li>• Check your P60s against your plan's annual threshold</li>
                <li>• Verify your employer has you on the correct plan</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">How to claim:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Sign into your SLC account and click "Request a refund"</li>
                <li>• Or call the Student Loans Company: 0300 100 0611 (England/Wales)</li>
                <li>• Have your Customer Reference Number and National Insurance number ready</li>
                <li>• Most refunds are processed within 2-4 weeks</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Important reminders:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• There's no time limit on claiming past overpayments</li>
                <li>• You can't claim for the current tax year until after 5 April</li>
                <li>• Keep your contact details updated in your SLC account</li>
                <li>• Don't assume the SLC will automatically contact you—check yourself</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">When your loan gets written off:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Plan 1: 25 years or age 65</li>
                <li>• Plan 2: 30 years</li>
                <li>• Plan 4 (Scotland): 30 years or age 65</li>
                <li>• Plan 5: 40 years</li>
                <li>• Postgraduate: 30 years</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Take-Home Pay</h2>
            <p className="text-gray-600 mb-6">
              Understanding your student loan repayments is just one part of managing your finances. Knowing exactly how much you're actually taking home each month after tax, National Insurance, and other deductions helps you budget effectively and spot when something doesn't look right—whether that's student loan overpayments or anything else.
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
            "headline": "Are You Owed Money? The Student Loan Refund Thousands of UK Graduates Are Missing",
            "description": "Over 1 million student loan overpayments happened last year. Here's how to check if you're one of them—and get your money back.",
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
              "@id": "https://salarytakehome.co.uk/blog/student-loan-refund"
            }
          })
        }} />
      </article>
    </div>
  );
}
