"use client";

import { useState } from "react";
import { Check, Menu, X } from "lucide-react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full" style={{ backgroundColor: '#0A0A0A', color: '#F5F5F5' }}>

      {/* NAV */}
      <nav className="w-full fixed top-0 left-0 z-50 border-b" style={{ backgroundColor: '#0A0A0A', borderColor: '#1A1A1A' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <span className="font-bold text-xl tracking-tight" style={{ color: '#F5F5F5', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Limelight CS
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#system" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(245,245,245,0.6)', fontFamily: 'Inter, sans-serif' }}>How It Works</a>
            <a href="#tiers" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(245,245,245,0.6)', fontFamily: 'Inter, sans-serif' }}>The Tiers</a>
            <a href="#guarantee" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(245,245,245,0.6)', fontFamily: 'Inter, sans-serif' }}>The Guarantee</a>
            <a href="#apply" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(245,245,245,0.6)', fontFamily: 'Inter, sans-serif' }}>Apply</a>
            <a
              href="#apply"
              className="text-sm font-semibold px-4 py-2 transition-colors"
              style={{ backgroundColor: '#DB0000', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile: Apply Now always visible + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#apply"
              className="text-sm font-semibold px-4 py-2"
              style={{ backgroundColor: '#DB0000', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}
            >
              Apply Now
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#F5F5F5' }}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: '#0A0A0A', borderColor: '#1A1A1A' }}>
            <a href="#system" onClick={() => setMenuOpen(false)} className="text-sm" style={{ color: 'rgba(245,245,245,0.7)', fontFamily: 'Inter, sans-serif' }}>How It Works</a>
            <a href="#tiers" onClick={() => setMenuOpen(false)} className="text-sm" style={{ color: 'rgba(245,245,245,0.7)', fontFamily: 'Inter, sans-serif' }}>The Tiers</a>
            <a href="#guarantee" onClick={() => setMenuOpen(false)} className="text-sm" style={{ color: 'rgba(245,245,245,0.7)', fontFamily: 'Inter, sans-serif' }}>The Guarantee</a>
            <a href="#apply" onClick={() => setMenuOpen(false)} className="text-sm" style={{ color: 'rgba(245,245,245,0.7)', fontFamily: 'Inter, sans-serif' }}>Apply</a>
          </div>
        )}
      </nav>

      {/* SECTION 1: HERO */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-48 pb-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
          One Hour a Month.<br />Thirty Days of Presence.<br />Zero Lift.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.65)' }}>
          For Seed-stage UK B2B SaaS and Deep Tech founders who are invisible to the investors and enterprise buyers that matter most. We extract your venture logic, engineer it into daily content, and distribute it across LinkedIn and X — without a single hour of your filming time.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#apply"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#DB0000', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}
          >
            Apply For a Discovery Call
          </a>

          <a
            href="#vsl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.5)' }}
          >
            Watch the VSL
          </a>
        </div>

        <p className="mt-10 text-xs tracking-widest uppercase"
          style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.35)', letterSpacing: '0.15em' }}>
          Exclusively serving 3 new founders per month · LinkedIn + X · 100,000 impression guarantee
        </p>
      </section>

      {/* SECTION 2: THE PAIN */}
      <section className="w-full" style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-3xl mx-auto px-6 py-32">
          <div className="flex flex-col" style={{ gap: '2.5rem' }}>
            <p className="text-2xl md:text-3xl leading-relaxed"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
              You raised the round. You built the product. You have a thesis that would make the right partner lean forward in their chair.
            </p>
            <p className="text-2xl md:text-3xl leading-relaxed"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
              But outside your immediate network — nobody knows you exist.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'rgba(245,245,245,0.75)' }}>
              The partners at the funds you&apos;re targeting have never seen your name. The enterprise buyers you&apos;re closing next quarter have never heard your thinking. The talent you need to hire doesn&apos;t know why your company is worth joining.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'rgba(245,245,245,0.75)' }}>
              You are not invisible because your ideas are weak. You are invisible because your ideas are locked inside your head — and nobody has built the system to get them out.
            </p>
            <p className="text-2xl md:text-3xl font-bold leading-relaxed"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
              That is the only problem Limelight CS exists to solve.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SYSTEM */}
      <section id="system" className="w-full" style={{ borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
            The System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border" style={{ borderColor: '#1A1A1A' }}>
            {[
              {
                num: "01",
                title: "The Extraction",
                body: "One private 60-minute call per month. No filming, no scripts to prep. A specialist uses behavioural interview techniques to draw out your founding thesis, your market convictions, and the logic behind how you think about your venture. This is not a content briefing. It is the engine that powers everything else."
              },
              {
                num: "02",
                title: "The Engineering",
                body: "That one session becomes 30 short videos, written posts, carousels, and long-form essays — all produced, captioned, and formatted for LinkedIn and X. Everything sounds like you on your best day. After the call, you are done."
              },
              {
                num: "03",
                title: "The Distribution",
                body: "We hold Editor access to your accounts. Content goes out daily, natively, at the right times. You never open the apps. Your presence builds while you run the company."
              },
            ].map((card, i) => (
              <div key={card.num}
                className="p-10 md:p-12"
                style={{
                  borderRight: i < 2 ? '1px solid #1A1A1A' : 'none',
                  fontFamily: 'Inter, sans-serif'
                }}>
                <div className="text-5xl font-bold mb-8" style={{ color: '#1E1E1E', fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {card.num}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F5F5F5', fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(245,245,245,0.6)' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF PLACEHOLDER — ACTIVATE POST COHORT */}
      <section style={{ display: 'none' }} aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {['Stat 1', 'Stat 2', 'Stat 3'].map((s) => (
              <div key={s} className="p-8 border" style={{ borderColor: '#1A1A1A' }}>
                <p style={{ color: '#F5F5F5', fontFamily: 'Playfair Display, Georgia, serif' }}>{s}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Testimonial 1', 'Testimonial 2'].map((t) => (
              <div key={t} className="p-8 border" style={{ borderColor: '#1A1A1A' }}>
                <p style={{ color: '#F5F5F5', fontFamily: 'Inter, sans-serif' }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE TIERS */}
      <section id="tiers" className="w-full" style={{ borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
            Choose Your Level of Presence
          </h2>

          {/* Desktop: Tier 1, 2, 3 side by side. Mobile: Tier 2, 1, 3 via order */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* TIER 1 — order-2 on mobile */}
            <div className="flex flex-col border order-2 md:order-1" style={{ borderColor: '#1A1A1A', fontFamily: 'Inter, sans-serif' }}>
              <div className="p-8 border-b" style={{ borderColor: '#1A1A1A' }}>
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
                  The Archive Sprint
                </h3>
                <p className="text-sm italic mb-6" style={{ color: 'rgba(245,245,245,0.5)' }}>
                  For founders sitting on unused archive footage
                </p>
                <div className="text-4xl font-bold mb-1" style={{ color: '#DB0000' }}>$1,200<span className="text-lg font-normal">/month</span></div>
                <p className="text-xs" style={{ color: 'rgba(245,245,245,0.4)' }}>Total stack value: $3,600/month</p>
              </div>
              <div className="p-8 flex flex-col gap-5 flex-1">
                {[
                  { name: "The Dead Content Audit", desc: "A forensic review of every piece of media you own to identify every extractable moment of publishable content buried in footage you have already created.", value: "$500 — one time" },
                  { name: "15 Broadcast-Quality Video Shorts Per Month", desc: "Fifteen retention-engineered short-form video clips per month, produced entirely from your existing archive. Colour-graded, captioned, formatted for LinkedIn and X.", value: "$2,250/month" },
                  { name: "Voice-Matched Caption Copywriting", desc: "Every video ships with a full post written in your voice — hook, body, and call to engagement. Never templated. Never generic.", value: "$750/month" },
                  { name: "Native Cross-Platform Distribution", desc: "We hold Editor access to your LinkedIn and X accounts. Every asset is scheduled and published natively. You never open the apps.", value: "$600/month" },
                  { name: "LinkedIn Profile Reconstruction", desc: "Your headline, About section, Featured section, and banner completely rewritten to convert. Delivered at onboarding.", value: "$600 — one time" },
                ].map((item) => (
                  <div key={item.name} className="flex gap-3">
                    <Check className="h-4 w-4 shrink-0 mt-1" style={{ color: '#F5F5F5' }} />
                    <div>
                      <span className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>{item.name}</span>
                      <span className="text-sm" style={{ color: 'rgba(245,245,245,0.55)' }}> — {item.desc}</span>
                      <span className="text-xs block mt-1" style={{ color: 'rgba(245,245,245,0.35)' }}>Value: {item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 border-t" style={{ borderColor: '#1A1A1A' }}>
                <p className="text-xs mb-1" style={{ color: 'rgba(245,245,245,0.4)' }}>Total stack value: $3,600/month + $1,100 one-time</p>
                <p className="text-xl font-bold mb-1" style={{ color: '#DB0000' }}>Your Investment: $1,200/month</p>
                <p className="text-sm mb-6" style={{ color: 'rgba(245,245,245,0.4)' }}>You save: $2,400/month</p>
                <a href="#apply" className="block w-full text-center py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#F5F5F5', color: '#0A0A0A', borderRadius: 0 }}>
                  Apply for This Tier
                </a>
              </div>
            </div>

            {/* TIER 2 — order-1 on mobile (most popular) */}
            <div className="flex flex-col border order-1 md:order-2 relative" style={{ borderColor: '#DB0000', fontFamily: 'Inter, sans-serif' }}>
              <div className="w-full text-center py-2 text-xs font-bold tracking-widest uppercase"
                style={{ backgroundColor: '#DB0000', color: '#F5F5F5' }}>
                Most Popular
              </div>
              <div className="p-8 border-b" style={{ borderColor: '#1A1A1A' }}>
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
                  The Limelight Protocol
                </h3>
                <p className="text-sm italic mb-6" style={{ color: 'rgba(245,245,245,0.5)' }}>
                  One hour. Thirty days of presence.
                </p>
                <div className="text-4xl font-bold mb-1" style={{ color: '#DB0000' }}>$2,800<span className="text-lg font-normal">/month</span></div>
                <p className="text-xs" style={{ color: 'rgba(245,245,245,0.4)' }}>Total stack value: $9,450/month</p>
              </div>
              <div className="p-8 flex flex-col gap-5 flex-1">
                {[
                  { name: "The Narrative Extraction Session", desc: "One private 60-minute monthly session using behavioural interview methodology to extract your founding thesis, contrarian convictions, and venture logic. Not a content briefing — the engine behind everything.", value: "$750/month" },
                  { name: "30 Broadcast-Quality Video Shorts Per Month", desc: "Thirty retention-engineered short-form video clips produced entirely from your single extraction call. One published every day. Colour-graded, captioned, formatted for LinkedIn and X.", value: "$4,500/month" },
                  { name: "Voice-Matched Caption Copywriting", desc: "Every video ships with a complete investor-grade post written in your voice. Thirty posts per month. Never templated.", value: "$1,500/month" },
                  { name: "Four Standalone Text Posts Per Month", desc: "Four pure-text LinkedIn posts per month — opinion pieces, contrarian takes, and market observations written in your voice. Text posts consistently achieve the highest organic reach with a warm audience.", value: "$600/month" },
                  { name: "One Native LinkedIn Carousel Per Month", desc: "One professionally designed carousel built around the strongest insight from your extraction call. Engineered for dwell time and saves.", value: "$500/month" },
                  { name: "Fully Managed Cross-Platform Distribution", desc: "Editor access to your LinkedIn and X accounts. Every piece of content scheduled and published natively, daily, at optimal times. You never touch the apps.", value: "$1,200/month" },
                  { name: "Competitor Content Intelligence Audit", desc: "Before your first extraction session, we audit the content output of your three to five closest competitors and identify the positioning gaps nobody is occupying.", value: "$500 — one time" },
                  { name: "LinkedIn Profile Reconstruction", desc: "Headline, About, Featured section, and banner completely rewritten to convert. Delivered at onboarding.", value: "$600 — one time" },
                  { name: "Monthly Performance Intelligence Report", desc: "A clean monthly report covering top-performing posts, impression trajectory, audience growth, and a plain-English read on what your content is doing for your positioning.", value: "$400/month" },
                ].map((item) => (
                  <div key={item.name} className="flex gap-3">
                    <Check className="h-4 w-4 shrink-0 mt-1" style={{ color: '#DB0000' }} />
                    <div>
                      <span className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>{item.name}</span>
                      <span className="text-sm" style={{ color: 'rgba(245,245,245,0.55)' }}> — {item.desc}</span>
                      <span className="text-xs block mt-1" style={{ color: 'rgba(245,245,245,0.35)' }}>Value: {item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 border-t" style={{ borderColor: '#1A1A1A' }}>
                <p className="text-xs mb-1" style={{ color: 'rgba(245,245,245,0.4)' }}>Total stack value: $9,450/month + $1,100 one-time</p>
                <p className="text-xl font-bold mb-1" style={{ color: '#DB0000' }}>Your Investment: $2,800/month</p>
                <p className="text-sm mb-6" style={{ color: 'rgba(245,245,245,0.4)' }}>You save: $6,650/month</p>
                <a href="#apply" className="block w-full text-center py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#DB0000', color: '#F5F5F5', borderRadius: 0 }}>
                  Apply for This Tier
                </a>
              </div>
            </div>

            {/* TIER 3 — order-3 on mobile */}
            <div className="flex flex-col border order-3" style={{ borderColor: '#1A1A1A', fontFamily: 'Inter, sans-serif' }}>
              <div className="p-8 border-b" style={{ borderColor: '#1A1A1A' }}>
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
                  The Ghost-CMO
                </h3>
                <p className="text-sm italic mb-6" style={{ color: 'rgba(245,245,245,0.5)' }}>
                  Total intellectual property capture
                </p>
                <div className="text-4xl font-bold mb-1" style={{ color: '#DB0000' }}>$4,800<span className="text-lg font-normal">/month</span></div>
                <p className="text-xs" style={{ color: 'rgba(245,245,245,0.4)' }}>Total stack value: $13,217/month</p>
              </div>
              <div className="p-8 flex flex-col gap-5 flex-1">
                {[
                  { name: "Everything in Tier 2", desc: "All nine Tier 2 deliverables included in full.", value: "$9,450/month" },
                  { name: "Weekly Long-Form Thought Leadership Essay", desc: "One fully ghostwritten analytical essay per week published as a LinkedIn Newsletter or Substack, translated directly from your extraction call. Four per month. Written to make a VC partner forward it to their colleagues.", value: "$1,600/month" },
                  { name: "VC-Targeted Outreach Sequence", desc: "Each month, three personalised connection messages and follow-up DM scripts tailored to specific VC firms or enterprise buyer profiles you are actively targeting.", value: "$800/month" },
                  { name: "Podcast Guest Pitch Sequence", desc: "A three-email cold outreach sequence written to pitch you as a guest on the most relevant UK tech and venture podcasts in your category.", value: "$600/month" },
                  { name: "Bi-Monthly Strategy Call", desc: "A second 30-minute call each month to review performance, adjust positioning, and align content with fundraising milestones or product launches.", value: "$500/month" },
                  { name: "Quarterly Investor-Ready Content Dossier", desc: "Every 90 days, your highest-performing posts, strongest essays, and impression data compiled into a branded PDF. Use it as a pre-meeting leave-behind for investor conversations or attach it to your fundraising deck.", value: "$267/month" },
                  { name: "Speaker Bio and Authority One-Pager", desc: "A broadcast-quality single-page PDF covering your thesis, credentials, and suggested talk topics — written and designed to send to conference organisers and podcast hosts.", value: "$600 — one time" },
                ].map((item) => (
                  <div key={item.name} className="flex gap-3">
                    <Check className="h-4 w-4 shrink-0 mt-1" style={{ color: '#F5F5F5' }} />
                    <div>
                      <span className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>{item.name}</span>
                      <span className="text-sm" style={{ color: 'rgba(245,245,245,0.55)' }}> — {item.desc}</span>
                      <span className="text-xs block mt-1" style={{ color: 'rgba(245,245,245,0.35)' }}>Value: {item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 border-t" style={{ borderColor: '#1A1A1A' }}>
                <p className="text-xs mb-1" style={{ color: 'rgba(245,245,245,0.4)' }}>Total stack value: $13,217/month + $600 one-time</p>
                <p className="text-xl font-bold mb-1" style={{ color: '#DB0000' }}>Your Investment: $4,800/month</p>
                <p className="text-sm mb-6" style={{ color: 'rgba(245,245,245,0.4)' }}>You save: $8,417/month</p>
                <a href="#apply" className="block w-full text-center py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#F5F5F5', color: '#0A0A0A', borderRadius: 0 }}>
                  Apply for This Tier
                </a>
              </div>
            </div>

          </div>

          <p className="text-center text-xs mt-10" style={{ color: 'rgba(245,245,245,0.35)', fontFamily: 'Inter, sans-serif' }}>
            Minimum 90-day commitment on all tiers. Payment due upon receipt. No setup fees.
          </p>
        </div>
      </section>

      {/* SECTION 5: GUARANTEE */}
      <section id="guarantee" className="w-full" style={{ borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#DB0000' }}>
            The Zero-Lift Promise
          </h2>
          <p className="text-lg leading-relaxed mb-12"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.7)' }}>
            Every Limelight CS retainer is backed by the Zero-Lift Promise.
          </p>
          <p className="text-lg leading-relaxed mb-16"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.7)' }}>
            If your combined organic impressions across LinkedIn and X do not reach 100,000 within your first 90 days — we keep working completely free until your dashboard crosses that number.
          </p>
          <p className="text-lg leading-relaxed mb-16"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.7)' }}>
            No renegotiation. No invoice. No excuses.
          </p>

          {/* Standalone large line */}
          <p className="text-3xl md:text-4xl font-bold my-20"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
            You never pay for a month that doesn&apos;t perform.
          </p>

          <p className="text-lg leading-relaxed mb-10"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.7)' }}>
            The only conditions: attend your monthly extraction call, approve assets within 48 hours, maintain Editor access. That is all we ask.
          </p>
          <p className="text-lg leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.7)' }}>
            We offer this guarantee because the math is conservative, not optimistic. Ninety days. Ninety posts. Each post needs an average of 1,111 impressions. On LinkedIn, a single strong hook routinely reaches 5,000 to 50,000 people. We are not being bold. We are being accurate.
          </p>
        </div>
      </section>

      {/* SCARCITY NOTICE */}
      <section className="w-full" style={{ borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <p className="text-sm leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.45)' }}>
            Limelight CS accepts a maximum of 3 new founders per month across all tiers. This is not a marketing claim. The extraction call requires full cognitive presence and cannot be delegated or scaled. Tier 3 accepts 1 founder per month only. When a slot is filled, it is filled until the following intake window.
          </p>
        </div>
      </section>

      {/* SECTION 6: APPLICATION */}
      <section id="apply" className="w-full" style={{ borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-4xl mx-auto px-6 py-32 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
            Apply For a Discovery Session
          </h2>
          <p className="text-lg text-center max-w-2xl mb-16 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.6)' }}>
            We review every application before scheduling. If your company and goals are a strong fit for the system, you will receive a calendar link within 24 hours to book your session.
          </p>

          {/* Calendly embed placeholder */}
          <div className="w-full border flex items-center justify-center"
            style={{ minHeight: '700px', borderColor: '#1A1A1A' }}>
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
              <div className="border p-4 mb-6" style={{ borderColor: '#1A1A1A' }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="rgba(245,245,245,0.4)">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#F5F5F5' }}>
                Book Your Discovery Session
              </h3>
              <p className="text-sm max-w-md" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.4)' }}>
                Replace this block with your Calendly embed code.
              </p>
            </div>
          </div>

          <p className="text-base text-center max-w-2xl mt-12 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.5)' }}>
            Discovery sessions are 30 minutes. We will review your current digital footprint before the call. Come ready to talk about your raise timeline, your target audience, and what being known in your category would change for your business.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t py-10" style={{ borderColor: '#1A1A1A' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.3)' }}>
            © {new Date().getFullYear()} Limelight CS Ltd · London, UK
          </p>
          <a href="mailto:hello@limelightcs.com" className="text-xs hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,245,0.3)' }}>
            hello@limelightcs.com
          </a>
        </div>
      </footer>

    </div>
  );
}