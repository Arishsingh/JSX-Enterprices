import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroStats from './HeroStats'

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>
      <Image src="/hero.png" alt="JSK Water Tech — From Waste to Worth" fill className="object-cover object-center" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/28 to-black/0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/22" />
      <div className="relative z-10 flex flex-col justify-center pt-20 pb-44 sm:pt-24 sm:pb-48" style={{ minHeight: '100svh' }}>
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 w-full">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="w-8 h-px bg-white/45" />
              <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-white/58">Pan India Water &amp; Waste Solutions</span>
            </div>
            <h1 className="font-bold text-white leading-[0.92] tracking-[-0.02em] mb-5 sm:mb-6" style={{ fontSize: 'clamp(48px, 6.5vw, 92px)' }}>
              From Waste<br />to <span style={{ color: '#8fbf92' }}>Worth.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] leading-[1.65] mb-8 sm:mb-10 max-w-[415px]" style={{ color: 'rgba(255,255,255,0.62)' }}>
              End-to-end water and waste management solutions transforming today&#39;s challenges into a cleaner tomorrow.
            </p>
            <div className="flex items-center gap-4 sm:gap-5">
              <Link href="#services">
                <button className="cursor-pointer group flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-white text-[13px] sm:text-[13.5px] font-medium transition-all duration-200 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
                  Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </Link>
              <Link href="#projects">
                <button className="cursor-pointer text-white/65 hover:text-white/90 text-[13px] sm:text-[13.5px] font-medium transition-colors duration-200">View Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HeroStats />
    </section>
  )
}
