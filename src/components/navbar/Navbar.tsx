'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { InfinityNavIcon } from '@/icons'

const NAV_LINKS = ['About', 'Services', 'Products', 'Process', 'Projects', 'Contact'] as const

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const primaryBtn = 'cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white transition-all duration-200 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!scrolled ? 'px-3 sm:px-6 pt-4' : 'bg-white border-b border-slate-200/60 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_4px_16px_0_rgba(0,0,0,0.06)]'}`}>
        <div className={`flex items-center justify-between px-3 sm:px-6 transition-all duration-500 ${!scrolled ? 'h-[60px] sm:h-[66px] max-w-[1320px] mx-auto rounded-2xl border border-white/18 backdrop-blur-xl bg-white/6' : 'h-14 sm:h-16 max-w-7xl mx-auto'}`}>

          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="leading-none">
              <div className={`text-[18px] font-bold tracking-tight leading-none transition-colors ${!scrolled ? 'text-white' : 'text-slate-900'}`}>JSK</div>
              <div className={`text-[8px] font-semibold tracking-[0.2em] uppercase leading-none mt-[3px] transition-colors ${!scrolled ? 'text-white/55' : 'text-slate-500'}`}>Enterprises</div>
            </div>
            <InfinityNavIcon light={!scrolled} />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-[13.5px] font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 ${!scrolled ? 'text-white/78 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className={`hidden md:flex flex-shrink-0 ${primaryBtn}`}
            style={{ backgroundColor: '#4A7C59' }}
            onClick={() => scrollToSection('contact')}
          >
            Get a Quote <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            className={`md:hidden ${primaryBtn}`}
            style={{ backgroundColor: '#4A7C59' }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] md:hidden">

            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            />

            {/* Drawer card */}
            <motion.div
              ref={mobileMenuRef}
              className="absolute top-3 left-3 right-3 rounded-2xl overflow-hidden bg-white"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.26, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="leading-none">
                    <div className="text-[18px] font-bold text-slate-900 tracking-tight leading-none">JSK</div>
                    <div className="text-[8px] font-semibold tracking-[0.2em] uppercase text-slate-400 leading-none mt-[3px]">Enterprises</div>
                  </div>
                  <InfinityNavIcon light={false} />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links — staggered */}
              <nav className="px-3 py-3">
                {NAV_LINKS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.2, ease: 'easeOut' }}
                  >
                    <button
                      onClick={() => { setMobileOpen(false); setTimeout(() => scrollToSection(item.toLowerCase()), 300) }}
                      className="w-full flex items-center px-4 py-3 rounded-xl text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer bg-transparent border-none text-left"
                    >
                      {item}
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                className="px-5 pb-5 pt-2 border-t border-slate-100"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.22, ease: 'easeOut' }}
              >
                <button
                  className={`${primaryBtn} w-full justify-center py-3 rounded-xl text-[14px]`}
                  style={{ backgroundColor: '#4A7C59' }}
                  onClick={() => { setMobileOpen(false); setTimeout(() => scrollToSection('contact'), 300) }}
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  )
}
