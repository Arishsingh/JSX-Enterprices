import Image from 'next/image'
import { processSteps } from '@/data'

export default function Process() {
  return (
    <section id="process" className="relative py-12 sm:py-16 scroll-mt-16 overflow-hidden">
      <Image src="/hero-bg.png" alt="" fill className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-white/88 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2.5" style={{ color: '#4A7C59' }}>Our Methodology</p>
        <h2 className="text-[1.6rem] sm:text-[2.1rem] font-bold text-slate-900 tracking-tight leading-none mb-8 sm:mb-10">How We Work</h2>
        <div className="relative">
          <div className="hidden lg:block absolute top-[27px] left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-slate-200 z-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[13px] font-semibold text-slate-400">{step.num}</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EEF6F0', color: '#4A7C59' }}>
                    <step.Icon className="w-4 h-4" strokeWidth={1.7} />
                  </div>
                </div>
                <h4 className="text-[14px] font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
