import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* SECTION 1: HERO */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Simple Logo Placeholder */}
        <div className="mb-16">
          <span className="font-editorial text-4xl tracking-tight text-brand-platinum font-bold">
            Limelight
            <span className="text-brand-gold ml-1">.</span>
          </span>
        </div>

        <p className="text-brand-gold font-sans font-semibold tracking-widest text-sm uppercase mb-6">
          For Pre-Seed & Seed UK Tech Founders
        </p>
        <h1 className="font-editorial text-5xl md:text-7xl font-bold tracking-tight text-balance mb-8 text-brand-platinum leading-[1.1]">
          We Turn Invisible Founders Into Omnipresent Executives.
        </h1>
        <p className="text-lg md:text-xl text-brand-platinum/70 max-w-3xl mb-12 font-sans font-light leading-relaxed">
          Stop wasting time with generic video editors. We use clinical psychology and narrative extraction to engineer your venture logic into 30 days of high-converting visual and written assets. <span className="text-brand-gold font-medium">Zero time required from you.</span>
        </p>

        <Link
          href="#calendly"
          className="inline-flex items-center justify-center px-8 py-4 text-brand-obsidian bg-brand-gold hover:bg-brand-gold-light transition-colors rounded-full font-sans font-semibold text-lg shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
        >
          Apply For a Discovery Call
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      {/* SECTION 2: VSL */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-32">
        <div className="w-full aspect-[16/9] bg-brand-charcoal rounded-2xl border border-brand-charcoal-light shadow-[0_0_50px_rgba(201,168,76,0.1)] flex items-center justify-center overflow-hidden relative group cursor-pointer">
          {/* Placeholder for Video */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal to-brand-obsidian flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-gold/20">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-brand-gold border-b-[10px] border-b-transparent ml-1"></div>
            </div>
            <p className="font-sans text-brand-platinum/50 text-sm tracking-widest uppercase">Play VSL Presentation</p>
          </div>
          {/* Final Embed goes here */}
          {/* <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowFullScreen className="w-full h-full absolute inset-0"></iframe> */}
        </div>
      </section>

      {/* SECTION 3: US VS THEM */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-32">
        <h2 className="font-editorial text-4xl md:text-5xl text-center font-bold mb-16 text-brand-platinum">
          The Brutal Gap in the Market
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Traditional */}
          <div className="bg-brand-charcoal/50 border border-brand-charcoal-light rounded-2xl p-8 md:p-10 flex flex-col opacity-80 backdrop-blur-sm">
            <h3 className="font-sans text-xl text-brand-platinum/60 font-semibold mb-8 uppercase tracking-wide border-b border-brand-charcoal-light pb-4">
              Traditional Agencies
            </h3>
            <ul className="space-y-6 flex-1 text-brand-platinum/70 font-sans">
              <li className="flex gap-4">
                <X className="text-red-500/70 h-6 w-6 shrink-0 mt-0.5" />
                <span>Ask for 5+ hours of your filming time.</span>
              </li>
              <li className="flex gap-4">
                <X className="text-red-500/70 h-6 w-6 shrink-0 mt-0.5" />
                <span>Use generic, TikTok-style hyper-edits.</span>
              </li>
              <li className="flex gap-4">
                <X className="text-red-500/70 h-6 w-6 shrink-0 mt-0.5" />
                <span>Don&apos;t understand SaaS unit economics.</span>
              </li>
              <li className="flex gap-4">
                <X className="text-red-500/70 h-6 w-6 shrink-0 mt-0.5" />
                <span>Charge you for &ldquo;hours worked,&rdquo; not outcomes.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Limelight */}
          <div className="bg-brand-charcoal border border-brand-gold/40 rounded-2xl p-8 md:p-10 flex flex-col shadow-[0_0_30px_rgba(201,168,76,0.08)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
            <h3 className="font-sans text-2xl text-brand-gold font-bold mb-8 tracking-wide border-b border-brand-gold/20 pb-4 relative z-10">
              Limelight CS Ltd
            </h3>
            <ul className="space-y-6 flex-1 text-brand-platinum font-sans font-medium relative z-10">
              <li className="flex gap-4">
                <Check className="text-brand-gold h-6 w-6 shrink-0 mt-0.5" />
                <span>Zero filming time (we extract from your archives).</span>
              </li>
              <li className="flex gap-4">
                <Check className="text-brand-gold h-6 w-6 shrink-0 mt-0.5" />
                <span>Clinical pattern-interrupt hooks engineered for investors.</span>
              </li>
              <li className="flex gap-4">
                <Check className="text-brand-gold h-6 w-6 shrink-0 mt-0.5" />
                <span>Natively fluent in venture capital logic.</span>
              </li>
              <li className="flex gap-4 bg-brand-gold/10 p-4 -ml-4 rounded-xl border border-brand-gold/20">
                <Check className="text-brand-gold h-6 w-6 shrink-0 mt-1" />
                <span className="text-lg font-bold text-brand-gold">We guarantee 100k impressions in 90 days.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: ECOSYSTEM */}
      <section className="w-full border-y border-brand-charcoal-light bg-brand-charcoal/20">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="font-editorial text-4xl md:text-5xl text-center font-bold mb-16 text-brand-platinum">
            The Omnipresent Ecosystem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ecosystem 1 */}
            <div className="bg-brand-obsidian border border-brand-charcoal-light p-8 md:p-10 rounded-2xl hover:border-brand-gold/30 transition-colors">
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-xl mb-8 font-editorial text-2xl">01</div>
              <h3 className="font-sans text-xl text-brand-platinum font-bold mb-4">Visual Dominance</h3>
              <p className="text-brand-platinum/70 leading-relaxed font-sans font-light">
                30+ premium, psychologically hooked video shorts natively distributed across LinkedIn, YouTube Shorts, and Reels every month.
              </p>
            </div>

            {/* Ecosystem 2 */}
            <div className="bg-brand-obsidian border border-brand-charcoal-light p-8 md:p-10 rounded-2xl hover:border-brand-gold/30 transition-colors">
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-xl mb-8 font-editorial text-2xl">02</div>
              <h3 className="font-sans text-xl text-brand-platinum font-bold mb-4">Executive Thought Leadership</h3>
              <p className="text-brand-platinum/70 leading-relaxed font-sans font-light">
                A weekly ghostwritten Substack engineered directly from your core business insights to build an impenetrable moat.
              </p>
            </div>

            {/* Ecosystem 3 */}
            <div className="bg-brand-obsidian border border-brand-charcoal-light p-8 md:p-10 rounded-2xl hover:border-brand-gold/30 transition-colors">
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-xl mb-8 font-editorial text-2xl">03</div>
              <h3 className="font-sans text-xl text-brand-platinum font-bold mb-4">The Clinical Moat</h3>
              <p className="text-brand-platinum/70 leading-relaxed font-sans font-light">
                A monthly 60-minute narrative extraction call to ensure your brand always reflects your absolute latest venture logic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VELVET ROPE (CALENDLY) */}
      <section id="calendly" className="w-full max-w-4xl mx-auto px-6 py-32 flex flex-col items-center">
        <h2 className="font-editorial text-4xl md:text-5xl text-center font-bold mb-6 text-brand-platinum">
          Apply For The Protocol
        </h2>
        <p className="text-lg text-brand-platinum/70 text-center max-w-2xl mb-16 font-sans font-light leading-relaxed">
          Because we guarantee 100,000 organic impressions in 90 days, we strictly cap our bandwidth to <strong className="text-brand-platinum">3 new founders per month</strong>. Select a time below to see if your brand is a fit.
        </p>

        {/* Calendly Embed Container */}
        <div className="w-full bg-brand-charcoal/30 border border-brand-charcoal-light rounded-2xl flex items-center justify-center overflow-hidden" style={{ minHeight: '700px' }}>
          <div className="w-full h-full flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="bg-brand-charcoal border border-brand-charcoal-light rounded-full p-4 mb-6 shadow-xl">
              <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-sans text-2xl font-bold text-brand-platinum mb-2">Book Your Discovery Session</h3>
            <p className="font-sans text-brand-platinum/60 max-w-md mb-8">
              Replace this block with the provided Calendly URL embed code to allow founders to directly select available spots.
            </p>
            {/* Note for the User: Paste your Calendly embed widget code here! */}
          </div>
        </div>
      </section>
    </div>
  );
}
