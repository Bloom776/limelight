import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full" style={{ backgroundColor: '#000001' }}>

      {/* SECTION 1: HERO */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-16 flex flex-col items-center gap-3">
          {/* Sun/Lime burst SVG icon */}
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="10" fill="#DB0000" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
              <rect
                key={i}
                x="26.5"
                y="4"
                width="3"
                height="12"
                rx="1.5"
                fill="#DB0000"
                transform={`rotate(${angle} 28 28)`}
              />
            ))}
            <circle cx="28" cy="28" r="5" fill="#FFFFF1" />
          </svg>
          <span className="font-editorial text-3xl tracking-tight font-bold" style={{ color: '#FFFFF1' }}>
            Lime<span style={{ color: '#DB0000' }}>Light</span>
          </span>
        </div>

        <p className="font-sans font-semibold tracking-widest text-sm uppercase mb-6" style={{ color: '#DB0000' }}>
          For Pre-Seed &amp; Seed UK Tech Founders
        </p>
        <h1 className="font-editorial text-5xl md:text-7xl font-bold tracking-tight text-balance mb-8 leading-[1.1]" style={{ color: '#FFFFF1' }}>
          We Turn Invisible Founders Into Omnipresent Executives.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-12 font-sans font-light leading-relaxed" style={{ color: 'rgba(255,255,241,0.7)' }}>
          Stop wasting time with generic video editors. We use clinical psychology and narrative extraction to engineer your venture logic into 30 days of high-converting visual and written assets.{' '}
          <span className="font-medium" style={{ color: '#DB0000' }}>Zero time required from you.</span>
        </p>

        <Link
          href="#calendly"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-lg transition-all"
          style={{
            backgroundColor: '#DB0000',
            color: '#FFFFF1',
            boxShadow: '0 0 20px rgba(219,0,0,0.35)',
          }}
          onMouseOver={e => (e.currentTarget.style.boxShadow = '0 0 35px rgba(219,0,0,0.55)')}
          onMouseOut={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(219,0,0,0.35)')}
        >
          Apply For a Discovery Call
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      {/* SECTION 2: VSL */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-32">
        <div
          className="w-full aspect-[16/9] rounded-2xl flex items-center justify-center overflow-hidden relative group cursor-pointer"
          style={{ backgroundColor: '#111111', border: '1px solid #1A1A1A', boxShadow: '0 0 50px rgba(219,0,0,0.08)' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #111111, #000001)' }}>
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: 'rgba(219,0,0,0.15)' }}
            >
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-b-[10px] border-b-transparent ml-1" style={{ borderLeftColor: '#DB0000' }}></div>
            </div>
            <p className="font-sans text-sm tracking-widest uppercase" style={{ color: 'rgba(255,255,241,0.4)' }}>Play VSL Presentation</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: US VS THEM */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-32">
        <h2 className="font-editorial text-4xl md:text-5xl text-center font-bold mb-16" style={{ color: '#FFFFF1' }}>
          The Brutal Gap in the Market
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Traditional */}
          <div className="rounded-2xl p-8 md:p-10 flex flex-col opacity-80"
            style={{ backgroundColor: 'rgba(17,17,17,0.5)', border: '1px solid #1A1A1A' }}>
            <h3 className="font-sans text-xl font-semibold mb-8 uppercase tracking-wide pb-4"
              style={{ color: 'rgba(255,255,241,0.5)', borderBottom: '1px solid #1A1A1A' }}>
              Traditional Agencies
            </h3>
            <ul className="space-y-6 flex-1 font-sans" style={{ color: 'rgba(255,255,241,0.65)' }}>
              <li className="flex gap-4">
                <X className="h-6 w-6 shrink-0 mt-0.5" style={{ color: 'rgba(219,0,0,0.6)' }} />
                <span>Ask for 5+ hours of your filming time.</span>
              </li>
              <li className="flex gap-4">
                <X className="h-6 w-6 shrink-0 mt-0.5" style={{ color: 'rgba(219,0,0,0.6)' }} />
                <span>Use generic, TikTok-style hyper-edits.</span>
              </li>
              <li className="flex gap-4">
                <X className="h-6 w-6 shrink-0 mt-0.5" style={{ color: 'rgba(219,0,0,0.6)' }} />
                <span>Don&apos;t understand SaaS unit economics.</span>
              </li>
              <li className="flex gap-4">
                <X className="h-6 w-6 shrink-0 mt-0.5" style={{ color: 'rgba(219,0,0,0.6)' }} />
                <span>Charge you for &ldquo;hours worked,&rdquo; not outcomes.</span>
              </li>
            </ul>
          </div>

          {/* Limelight */}
          <div className="rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden"
            style={{ backgroundColor: '#111111', border: '1px solid rgba(219,0,0,0.4)', boxShadow: '0 0 30px rgba(219,0,0,0.08)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none -mr-32 -mt-32"
              style={{ backgroundColor: 'rgba(219,0,0,0.08)', filter: 'blur(100px)' }}></div>
            <h3 className="font-sans text-2xl font-bold mb-8 tracking-wide pb-4 relative z-10"
              style={{ color: '#DB0000', borderBottom: '1px solid rgba(219,0,0,0.2)' }}>
              Limelight CS Ltd
            </h3>
            <ul className="space-y-6 flex-1 font-sans font-medium relative z-10" style={{ color: '#FFFFF1' }}>
              <li className="flex gap-4">
                <Check className="h-6 w-6 shrink-0 mt-0.5" style={{ color: '#DB0000' }} />
                <span>Zero filming time (we extract from your archives).</span>
              </li>
              <li className="flex gap-4">
                <Check className="h-6 w-6 shrink-0 mt-0.5" style={{ color: '#DB0000' }} />
                <span>Clinical pattern-interrupt hooks engineered for investors.</span>
              </li>
              <li className="flex gap-4">
                <Check className="h-6 w-6 shrink-0 mt-0.5" style={{ color: '#DB0000' }} />
                <span>Natively fluent in venture capital logic.</span>
              </li>
              <li className="flex gap-4 p-4 -ml-4 rounded-xl"
                style={{ backgroundColor: 'rgba(219,0,0,0.1)', border: '1px solid rgba(219,0,0,0.2)' }}>
                <Check className="h-6 w-6 shrink-0 mt-1" style={{ color: '#DB0000' }} />
                <span className="text-lg font-bold" style={{ color: '#DB0000' }}>We guarantee 100k impressions in 90 days.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: ECOSYSTEM */}
      <section className="w-full" style={{ borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A', backgroundColor: 'rgba(17,17,17,0.2)' }}>
        <div className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="font-editorial text-4xl md:text-5xl text-center font-bold mb-16" style={{ color: '#FFFFF1' }}>
            The Omnipresent Ecosystem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Visual Dominance",
                body: "30+ premium, psychologically hooked video shorts natively distributed across LinkedIn, YouTube Shorts, and Reels every month."
              },
              {
                num: "02",
                title: "Executive Thought Leadership",
                body: "A weekly ghostwritten Substack engineered directly from your core business insights to build an impenetrable moat."
              },
              {
                num: "03",
                title: "The Clinical Moat",
                body: "A monthly 60-minute narrative extraction call to ensure your brand always reflects your absolute latest venture logic."
              },
            ].map((card) => (
              <div key={card.num}
                className="p-8 md:p-10 rounded-2xl transition-colors"
                style={{ backgroundColor: '#000001', border: '1px solid #1A1A1A' }}
                onMouseOver={e => (e.currentTarget.style.borderColor = 'rgba(219,0,0,0.3)')}
                onMouseOut={e => (e.currentTarget.style.borderColor = '#1A1A1A')}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-8 font-editorial text-2xl"
                  style={{ backgroundColor: 'rgba(219,0,0,0.1)', color: '#DB0000' }}>
                  {card.num}
                </div>
                <h3 className="font-sans text-xl font-bold mb-4" style={{ color: '#FFFFF1' }}>{card.title}</h3>
                <p className="leading-relaxed font-sans font-light" style={{ color: 'rgba(255,255,241,0.65)' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: VELVET ROPE */}
      <section id="calendly" className="w-full max-w-4xl mx-auto px-6 py-32 flex flex-col items-center">
        <h2 className="font-editorial text-4xl md:text-5xl text-center font-bold mb-6" style={{ color: '#FFFFF1' }}>
          Apply For The Protocol
        </h2>
        <p className="text-lg text-center max-w-2xl mb-16 font-sans font-light leading-relaxed" style={{ color: 'rgba(255,255,241,0.65)' }}>
          Because we guarantee 100,000 organic impressions in 90 days, we strictly cap our bandwidth to{' '}
          <strong style={{ color: '#FFFFF1' }}>3 new founders per month</strong>. Select a time below to see if your brand is a fit.
        </p>

        <div className="w-full rounded-2xl flex items-center justify-center overflow-hidden"
          style={{ minHeight: '700px', backgroundColor: 'rgba(17,17,17,0.3)', border: '1px solid #1A1A1A' }}>
          <div className="w-full h-full flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="rounded-full p-4 mb-6 shadow-xl"
              style={{ backgroundColor: '#111111', border: '1px solid #1A1A1A' }}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#DB0000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-sans text-2xl font-bold mb-2" style={{ color: '#FFFFF1' }}>Book Your Discovery Session</h3>
            <p className="font-sans max-w-md mb-8" style={{ color: 'rgba(255,255,241,0.55)' }}>
              Replace this block with your Calendly embed code.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}