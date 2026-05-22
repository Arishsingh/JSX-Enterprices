'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { WaterDropNavIcon } from '@/icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!scrolled ? 'px-6 pt-4' : 'bg-white border-b border-slate-200/60 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_4px_16px_0_rgba(0,0,0,0.06)]'}`}>
      <div className={`flex items-center justify-between px-6 transition-all duration-500 ${!scrolled ? 'h-[66px] max-w-[1320px] mx-auto rounded-2xl border border-white/18 backdrop-blur-xl bg-white/6' : 'h-16 max-w-7xl mx-auto'}`}>
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <WaterDropNavIcon />
          <div className="leading-none">
            <div className={`text-[19px] font-bold tracking-tight leading-none transition-colors ${!scrolled ? 'text-white' : 'text-slate-900'}`}>JSK</div>
            <div className={`text-[8.5px] font-semibold tracking-[0.2em] uppercase leading-none mt-[3px] transition-colors ${!scrolled ? 'text-white/55' : 'text-slate-500'}`}>Water Tech</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {(['About', 'Services', 'Products', 'Process', 'Projects', 'Contact'] as const).map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className={`text-[13.5px] font-medium transition-colors duration-200 ${!scrolled ? 'text-white/78 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>{item}</Link>
          ))}
        </nav>
        <Link href="#contact" className="flex-shrink-0">
          <button className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white transition-all duration-200 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
            Get a Quote <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </header>
  )
}
