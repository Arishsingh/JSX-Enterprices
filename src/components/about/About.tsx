import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { aboutPoints } from '@/data'
import AboutInfoCards from './AboutInfoCards'
import IndustriesServed from './IndustriesServed'

export default function About() {
  return (
    <section id="about" className="bg-white py-12 sm:py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-2.5 sm:mb-4" style={{ color: '#4A7C59' }}>About JSK</p>
            <h2 className="text-[1.4rem] sm:text-[2.4rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Vadodara-Based MEP<br />Specialists, Pan India
            </h2>
            <p className="text-[13px] sm:text-[14px] text-slate-500 leading-relaxed mb-6 sm:mb-8 max-w-[480px]">
              JSK is a Vadodara-headquartered MEP contractor specialising in Water Treatment, Plumbing, and Fire Fighting systems. With over a decade of execution experience, we deliver turnkey projects from concept to commissioning across India.
            </p>
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-10">
              {aboutPoints.map((pt) => (
                <li key={pt} className="flex items-center gap-2.5 sm:gap-3 text-[12px] sm:text-[13.5px] text-slate-700">
                  <CheckCircle2 className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" style={{ color: '#4A7C59' }} />
                  {pt}
                </li>
              ))}
            </ul>
            <AboutInfoCards />
          </div>

          {/* Right */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-200">
              <Image src="/about-water-plant.png" alt="Sustainable Water & Waste Solutions" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-7">
                <h3 className="text-white font-bold text-[1rem] sm:text-[1.35rem] leading-snug mb-3 sm:mb-4">
                  Delivering Sustainable<br />Water &amp; Waste Solutions
                </h3>
                <button className="cursor-pointer flex items-center gap-2.5 sm:gap-3 group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <span className="text-white text-[12px] sm:text-[13px] font-medium">Watch Our Story</span>
                </button>
              </div>
            </div>
            <IndustriesServed />
          </div>
        </div>
      </div>
    </section>
  )
}
