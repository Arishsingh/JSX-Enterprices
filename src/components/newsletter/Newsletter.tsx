'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="relative py-14 sm:py-16 overflow-hidden">
      <Image src="/newsletter-bg.png" alt="" fill className="object-cover object-top" sizes="100vw" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          <div>
            <h2 className="text-[1.6rem] sm:text-[1.9rem] font-bold text-white leading-[1.15] tracking-tight">
              Stay Updated on<br />Our Latest Projects
            </h2>
          </div>
          <div>
            <p className="text-[13px] sm:text-[13.5px] text-white/55 leading-relaxed">
              Subscribe to receive project updates, case studies, and service announcements.
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-full p-2 sm:p-1.5 border border-white/10 gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 sm:py-2 text-[13px] text-white bg-transparent outline-none placeholder:text-white/35 rounded-xl sm:rounded-none"
              />
              <button className="cursor-pointer px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-full text-white text-[13px] font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
