'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Mail, Phone, Globe, Wrench, CheckCircle2 } from 'lucide-react'

import {
  WaterDropNavIcon, PlaceholderImg,
  IconLinkedIn, IconFacebook, IconInstagram, IconYoutube,
} from './icons'
import {
  heroStats, servicesOverviewData, industryData, aboutPoints,
  projectsData, productsOverview, processSteps, serviceKeys,
} from './data'

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function JSKWebsite() {
  const [scrolled, setScrolled] = useState(false)
  const [enquiryForm, setEnquiryForm] = useState({ name: '', company: '', service: '', phone: '', message: '' })
  const [email, setEmail] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
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

      <main>

        {/* ── HERO ───────────────────────────────────────────────────────────── */}
        <section id="home" className="relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>
          <Image src="/hero.png" alt="JSK Water Tech — From Waste to Worth" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/28 to-black/0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/22" />
          <div className="relative z-10 flex flex-col justify-center pt-24 pb-48" style={{ minHeight: '100svh' }}>
            <div className="max-w-[1320px] mx-auto px-8 lg:px-16 w-full">
              <div className="max-w-[560px]">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-px bg-white/45" />
                  <span className="text-[10.5px] font-semibold tracking-[0.24em] uppercase text-white/58">Pan India Water &amp; Waste Solutions</span>
                </div>
                <h1 className="font-bold text-white leading-[0.92] tracking-[-0.02em] mb-6" style={{ fontSize: 'clamp(60px, 6.5vw, 92px)' }}>
                  From Waste<br />to <span style={{ color: '#8fbf92' }}>Worth.</span>
                </h1>
                <p className="text-[15px] leading-[1.65] mb-10 max-w-[415px]" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  End-to-end water and waste management solutions transforming today&#39;s challenges into a cleaner tomorrow.
                </p>
                <div className="flex items-center gap-5">
                  <Link href="#services">
                    <button className="cursor-pointer group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-white text-[13.5px] font-medium transition-all duration-200 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
                      Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </Link>
                  <Link href="#projects">
                    <button className="cursor-pointer text-white/65 hover:text-white/90 text-[13.5px] font-medium transition-colors duration-200">View Projects</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-8 lg:px-16 pb-6">
            <div className="max-w-[1320px] mx-auto">
              <div
                className="rounded-2xl overflow-hidden border border-white/70"
                style={{
                  background: 'rgba(255,255,255,0.94)',
                  backdropFilter: 'blur(24px)',
                  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.04), 0 8px 20px 0 rgba(0,0,0,0.10), 0 20px 48px 0 rgba(0,0,0,0.14), inset 0 1px 0 0 rgba(255,255,255,0.90), inset 0 -1px 0 0 rgba(0,0,0,0.04)',
                }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {heroStats.map(({ Icon, value, label, color, bg, ring }, i) => (
                    <div key={i} className={`flex items-center gap-4 px-7 py-5 ${i < 3 ? 'border-r border-black/[0.06]' : ''} ${i >= 2 ? 'border-t border-black/[0.06] md:border-t-0' : ''}`}>
                      <div
                        className="w-10 h-10 rounded-xl border-2 border-white flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: bg, boxShadow: `0 0 0 1px ${ring}, 0 2px 1px 0 rgba(0,0,0,0.05)` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <div>
                        <div className="text-[27px] font-bold leading-none tracking-tight" style={{ color }}>{value}</div>
                        <div className="text-[12px] text-slate-500 mt-[3px] leading-none">{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ──────────────────────────────────────────────── */}
        <section id="services" className="bg-[#f5f6f7] py-16 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2.5" style={{ color: '#4A7C59' }}>What We Offer</p>
                <h2 className="text-[2.1rem] font-bold text-slate-900 tracking-tight leading-none">Our Services</h2>
              </div>
              <Link href="#contact">
                <button className="group cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-[13px] font-medium text-slate-700 transition-all shadow-sm">
                  View All Services <span className="relative inline-flex w-3.5 h-3.5 overflow-hidden"><ArrowRight className="w-3.5 h-3.5 absolute transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0" /><ArrowRight className="w-3.5 h-3.5 absolute -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" /></span>
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {servicesOverviewData.map((s) => (
                <div key={s.name} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-sm transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-5 [&>svg]:w-6 [&>svg]:h-6" style={{ backgroundColor: s.bg, color: s.color, boxShadow: `0 0 0 1px ${s.ring}, 0 2px 1px 0 rgba(0,0,0,0.04)` }}>
                    {s.icon}
                  </div>
                  <h3 className="text-[14.5px] font-bold text-slate-900 mb-1.5 leading-tight">{s.name}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed whitespace-pre-line">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
        <section id="about" className="bg-white py-20 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#4A7C59' }}>About JSK</p>
                <h2 className="text-[2.4rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                  Vadodara-Based MEP<br />Specialists, Pan India
                </h2>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                  JSK is a Vadodara-headquartered MEP contractor specialising in Water Treatment, Plumbing, and Fire Fighting systems. With over a decade of execution experience, we deliver turnkey projects from concept to commissioning across India.
                </p>
                <ul className="space-y-3 mb-10">
                  {aboutPoints.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-[13.5px] text-slate-700">
                      <CheckCircle2 className="w-[18px] h-[18px] flex-shrink-0" style={{ color: '#4A7C59' }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                {/* Info Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF6F0' }}>
                        <MapPin className="w-3.5 h-3.5" style={{ color: '#4A7C59' }} />
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">Headquarters</span>
                    </div>
                    <p className="text-[12.5px] font-semibold text-slate-800">Vadodara + Ahmedabad</p>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF6F0' }}>
                        <Globe className="w-3.5 h-3.5" style={{ color: '#4A7C59' }} strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">Operations</span>
                    </div>
                    <p className="text-[12.5px] font-semibold text-slate-800">Across India</p>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF6F0' }}>
                        <Wrench className="w-3.5 h-3.5" style={{ color: '#4A7C59' }} />
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">Capabilities</span>
                    </div>
                    <p className="text-[11.5px] text-slate-500 leading-snug">Welding · Core-cutting<br />Full in-house capability</p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-6">
                {/* Video / Image Card */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-200">
                  <Image src="/about-water-plant.png" alt="Sustainable Water & Waste Solutions" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-white font-bold text-[1.35rem] leading-snug mb-4">
                      Delivering Sustainable<br />Water &amp; Waste Solutions
                    </h3>
                    <button className="cursor-pointer flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <span className="text-white text-[13px] font-medium">Watch Our Story</span>
                    </button>
                  </div>
                </div>

                {/* Industries Served */}
                <div>
                  <p className="text-[12px] font-semibold text-slate-500 mb-4">Industries Served</p>
                  <div className="grid grid-cols-6 gap-3">
                    {industryData.map((ind) => (
                      <div key={ind.label} className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 text-slate-600">
                          {ind.icon}
                        </div>
                        <span className="text-[11px] text-slate-600 font-medium text-center leading-tight">{ind.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LATEST PROJECTS ─────────────────────────────────────────────────── */}
        <section id="projects" className="bg-white py-16 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2.5" style={{ color: '#4A7C59' }}>Portfolio</p>
                <h2 className="text-[2.1rem] font-bold text-slate-900 tracking-tight leading-none">Latest Projects</h2>
              </div>
              <button className="group cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-[13px] font-medium text-slate-700 transition-all shadow-sm">
                Explore All Projects <span className="relative inline-flex w-3.5 h-3.5 overflow-hidden"><ArrowRight className="w-3.5 h-3.5 absolute transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0" /><ArrowRight className="w-3.5 h-3.5 absolute -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" /></span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectsData.map((p) => (
                <div key={p.num} className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-slate-200">
                  <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/85 transition-all duration-300" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <span className="text-[13px] font-bold text-white/70">{p.num}</span>
                    <div>
                      <p className="text-[10.5px] font-semibold text-white/60 uppercase tracking-wide mb-2">{p.tag}</p>
                      <h3 className="text-[14.5px] font-bold text-white leading-snug mb-3">{p.title}</h3>
                      <div className="flex items-center gap-2 text-[11.5px] text-white/55">
                        <span>{p.loc}</span>
                        <span className="w-1 h-1 rounded-full bg-white/40" />
                        <span>{p.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS & EQUIPMENT ────────────────────────────────────────────── */}
        <section id="products" className="bg-[#f5f6f7] py-16 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2.5" style={{ color: '#4A7C59' }}>Supply &amp; Equipment</p>
                <h2 className="text-[2.1rem] font-bold text-slate-900 tracking-tight leading-none">Products &amp; Equipment</h2>
              </div>
              <button className="group cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-[13px] font-medium text-slate-700 transition-all shadow-sm">
                Browse All Products <span className="relative inline-flex w-3.5 h-3.5 overflow-hidden"><ArrowRight className="w-3.5 h-3.5 absolute transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0" /><ArrowRight className="w-3.5 h-3.5 absolute -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" /></span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {productsOverview.map((prod) => (
                <div key={prod.name} className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex" style={{ height: '220px' }}>
                  <div className="flex flex-col justify-between p-6 flex-shrink-0" style={{ width: '52%' }}>
                    <div>
                      <h3 className="text-[16px] font-bold text-slate-900 mb-2 leading-snug">{prod.name}</h3>
                      <p className="text-[12.5px] text-slate-500 leading-relaxed">{prod.sub}</p>
                    </div>
                    <button
                      className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:opacity-80 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]"
                      style={{ backgroundColor: '#4A7C59' }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="relative flex-1">
                    <Image src={prod.img} alt={prod.name} fill className="object-contain object-center" sizes="200px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ─────────────────────────────────────────────────────── */}
        <section id="process" className="bg-white py-16 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2.5" style={{ color: '#4A7C59' }}>Our Methodology</p>
            <h2 className="text-[2.1rem] font-bold text-slate-900 tracking-tight leading-none mb-10">How We Work</h2>
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

        {/* ── CONTACT ─────────────────────────────────────────────────────────── */}
        <section id="contact" className="bg-[#f5f6f7] py-20 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#4A7C59' }}>Get In Touch</p>
                  <h2 className="text-[2.1rem] font-bold text-slate-900 tracking-tight mb-6">Contact &amp; Enquiry</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: <MapPin className="w-4 h-4" />, label: 'Vadodara Office',   val: '123, Industrial Area, Vadodara, Gujarat — 390010' },
                    { icon: <MapPin className="w-4 h-4" />, label: 'Ahmedabad Office',  val: '456, SG Highway, Ahmedabad, Gujarat — 380054'     },
                    { icon: <Phone  className="w-4 h-4" />, label: 'Phone',             val: '+91 98765 43210'                                   },
                    { icon: <Mail   className="w-4 h-4" />, label: 'Email',             val: 'info@jskwatertech.com'                              },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: '#4A7C59' }}>{d.icon}</span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{d.label}</p>
                        <p className="text-sm text-slate-700">{d.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  {[{ Icon: IconLinkedIn }, { Icon: IconFacebook }, { Icon: IconInstagram }, { Icon: IconYoutube }].map(({ Icon }, i) => (
                    <Link key={i} href="#" className="w-10 h-10 rounded-xl border-2 border-white flex items-center justify-center transition-colors shadow-[0_0_0_1px_rgba(74,124,89,0.14),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#EEF6F0', color: '#4A7C59' }}>
                      <Icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Send an Enquiry</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Name</label>
                      <input type="text" placeholder="Your name" value={enquiryForm.name} onChange={e => setEnquiryForm(f => ({ ...f, name: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Company</label>
                      <input type="text" placeholder="Company name" value={enquiryForm.company} onChange={e => setEnquiryForm(f => ({ ...f, company: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Service Required</label>
                    <select value={enquiryForm.service} onChange={e => setEnquiryForm(f => ({ ...f, service: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors text-slate-700 appearance-none cursor-pointer">
                      <option value="">Select a service</option>
                      {serviceKeys.map(k => <option key={k} value={k}>{k}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Phone</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" value={enquiryForm.phone} onChange={e => setEnquiryForm(f => ({ ...f, phone: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Message</label>
                    <textarea rows={4} placeholder="Describe your requirement..." value={enquiryForm.message} onChange={e => setEnquiryForm(f => ({ ...f, message: e.target.value }))} className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors resize-none" />
                  </div>
                  <button className="cursor-pointer w-full h-11 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
                    Send Enquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── NEWSLETTER ──────────────────────────────────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <Image src="/newsletter-bg.png" alt="" fill className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h2 className="text-[1.9rem] font-bold text-white leading-[1.15] tracking-tight">
                Stay Updated on<br />Our Latest Projects
              </h2>
            </div>
            <div>
              <p className="text-[13.5px] text-white/55 leading-relaxed">
                Subscribe to receive project updates, case studies, and service announcements.
              </p>
            </div>
            <div>
              <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-1.5 border border-white/10">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 text-[13px] text-white bg-transparent outline-none placeholder:text-white/35"
                />
                <button className="cursor-pointer px-5 py-2.5 rounded-full text-white text-[13px] font-semibold flex items-center gap-2 transition-all hover:opacity-90 active:scale-[0.96] flex-shrink-0 border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
                  Subscribe <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: '#1a2028' }}>
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1px_1fr] gap-0">
            {/* Logo column */}
            <div className="pr-10 pb-10 lg:pb-0">
              <div className="flex items-center gap-2.5 mb-5">
                <WaterDropNavIcon />
                <div className="leading-none">
                  <div className="text-[19px] font-bold text-white tracking-tight">JSK</div>
                  <div className="text-[8.5px] font-semibold tracking-[0.2em] uppercase text-white/45 mt-[3px]">Water Tech</div>
                </div>
              </div>
              <p className="text-[12.5px] text-white/45 leading-relaxed mb-4 max-w-[220px]">
                Complete MEP contractor for Water Treatment, Plumbing, and Fire Fighting systems.
              </p>
              <p className="text-[12px] text-white/35 mb-6">Vadodara · Ahmedabad · Pan India</p>
              <div className="flex items-center gap-2.5">
                {[IconLinkedIn, IconFacebook, IconInstagram, IconYoutube].map((Icon, i) => (
                  <Link key={i} href="#" className="w-9 h-9 rounded-xl border-2 flex items-center justify-center transition-colors shadow-[0_0_0_1px_rgba(74,124,89,0.2),0_2px_1px_0_rgba(0,0,0,0.2)]" style={{ backgroundColor: 'rgba(74,124,89,0.15)', borderColor: 'rgba(74,124,89,0.25)', color: '#6aaa7a' }}>
                    <Icon className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block bg-white/8 mx-10" />

            {/* Links columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pl-0 lg:pl-10">
              <div>
                <h5 className="text-[12px] font-semibold text-white mb-5">Company</h5>
                <ul className="space-y-3">
                  {['About Us', 'Our Team', 'Careers', 'Contact Us', 'Privacy Policy'].map(item => (
                    <li key={item}><Link href="#" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[12px] font-semibold text-white mb-5">Services</h5>
                <ul className="space-y-3">
                  {['Plumbing', 'Fire Fighting', 'Water Treatment', 'Waste Water', 'AMC / O&M'].map(item => (
                    <li key={item}><Link href="#services" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[12px] font-semibold text-white mb-5">Products</h5>
                <ul className="space-y-3">
                  {['Filters', 'Instruments', 'Spares & Chemicals', 'Equipment'].map(item => (
                    <li key={item}><Link href="#products" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[12px] font-semibold text-white mb-5">Contact</h5>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 mt-[2px] flex-shrink-0" style={{ color: '#4A7C59' }} />
                    <div>
                      <p className="text-[12px] font-medium text-white/60 mb-0.5">Vadodara Office</p>
                      <p className="text-[11.5px] text-white/35 leading-snug">123, Industrial Area,<br />Vadodara, Gujarat - 390010</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 mt-[2px] flex-shrink-0" style={{ color: '#4A7C59' }} />
                    <div>
                      <p className="text-[12px] font-medium text-white/60 mb-0.5">Ahmedabad Office</p>
                      <p className="text-[11.5px] text-white/35 leading-snug">456, SG Highway,<br />Ahmedabad, Gujarat - 380054</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4A7C59' }} />
                    <Link href="mailto:info@jskwatertech.com" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">info@jskwatertech.com</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/8 flex items-center justify-between">
            <p className="text-[11.5px] text-white/30">© 2026 JSK Water Tech. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-[11.5px] text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-[11.5px] text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
