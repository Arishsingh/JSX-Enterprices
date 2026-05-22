import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { servicesOverviewData } from '@/data'

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-[#f5f6f7] py-12 sm:py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-2.5" style={{ color: '#4A7C59' }}>What We Offer</p>
            <h2 className="text-[1.35rem] sm:text-[2.1rem] font-bold text-slate-900 tracking-tight leading-none">Our Services</h2>
          </div>
          <Link href="#contact" className="flex-shrink-0">
            <button className="group cursor-pointer flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-slate-200 bg-white text-[11px] sm:text-[13px] font-medium text-slate-700 transition-all shadow-sm whitespace-nowrap">
              <span className="sm:hidden">View All</span><span className="hidden sm:inline">View All Services</span> <span className="relative inline-flex w-3.5 h-3.5 overflow-hidden"><ArrowRight className="w-3.5 h-3.5 absolute transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0" /><ArrowRight className="w-3.5 h-3.5 absolute -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" /></span>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {servicesOverviewData.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-6 hover:shadow-sm transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6" style={{ backgroundColor: s.bg, color: s.color, boxShadow: `0 0 0 1px ${s.ring}, 0 2px 1px 0 rgba(0,0,0,0.04)` }}>
                {s.icon}
              </div>
              <h3 className="text-[13.5px] sm:text-[14.5px] font-bold text-slate-900 mb-1.5 leading-tight">{s.name}</h3>
              <p className="text-[11.5px] sm:text-[12px] text-slate-500 leading-relaxed whitespace-pre-line">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
