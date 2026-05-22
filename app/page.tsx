'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Mail, CheckCircle2, ClipboardList, Building2, Award, Settings2, Wrench } from 'lucide-react'

// ─── ICON HELPERS ─────────────────────────────────────────────────────────────

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="currentColor" stroke="none" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

function WaterDropNavIcon() {
  return (
    <svg width="26" height="32" viewBox="0 0 26 32" fill="none">
      <path d="M13 1C13 1 1.5 12.5 1.5 20C1.5 26.35 6.65 31.5 13 31.5C19.35 31.5 24.5 26.35 24.5 20C24.5 12.5 13 1 13 1Z" fill="#4A7C59" fillOpacity="0.92" />
      <path d="M7 20C7 16.5 9.5 13.2 12.5 11.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
      <path d="M10 25C11.5 26.2 14.5 26.2 16 25" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

function PlaceholderImg({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex items-center justify-center ${className ?? ''}`}>
      <svg className="w-9 h-9 text-slate-300" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><path strokeLinecap="round" d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  )
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const heroStats = [
  { Icon: ClipboardList, value: '120+', label: 'Projects Completed', color: '#4A7C59', bg: '#EEF6F0', ring: 'rgba(74,124,89,0.14)' },
  { Icon: Building2,     value: '18+',  label: 'Cities Served',       color: '#2A7BA0', bg: '#EBF5FA', ring: 'rgba(42,123,160,0.14)' },
  { Icon: Award,         value: '10+',  label: 'Years Experience',     color: '#B87333', bg: '#FDF5EC', ring: 'rgba(184,115,51,0.14)' },
  { Icon: Settings2,     value: '100%', label: 'End-to-End Execution', color: '#6B4FA0', bg: '#F2EEFC', ring: 'rgba(107,79,160,0.14)' },
]

const servicesOverviewData = [
  {
    name: 'Plumbing', desc: 'Supply, Drainage\n& Sanitary Solutions', color: '#4A7C59', bg: '#EEF6F0', ring: 'rgba(74,124,89,0.12)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h3" /><rect x="7" y="9" width="3" height="6" rx="1" /><path d="M10 12h4" /><rect x="14" y="9" width="3" height="6" rx="1" /><path d="M17 12h3" /><path d="M8 9V6h8v3" /></svg>,
  },
  {
    name: 'Fire Fighting', desc: 'Hydrant, Sprinkler\n& Alarm Systems', color: '#B94040', bg: '#FDF0F0', ring: 'rgba(185,64,64,0.12)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8" /><path d="M12 21V8" /><path d="M7 8h10" /><path d="M9 8V5h6v3" /><path d="M15 5h2v2" /><ellipse cx="12" cy="12" rx="3" ry="1.5" /></svg>,
  },
  {
    name: 'Water Treatment', desc: 'WTP, RO, Softener\n& DM Plants', color: '#2A7BA0', bg: '#EBF5FA', ring: 'rgba(42,123,160,0.12)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3C12 3 6 9 6 14a6 6 0 0 0 12 0c0-5-6-11-6-11z" /></svg>,
  },
  {
    name: 'Waste Water', desc: 'STP, ETP, MBR, MBBR\n& Grey Water', color: '#3D7A5F', bg: '#EEF7F2', ring: 'rgba(61,122,95,0.12)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3C12 3 6 9 6 14a6 6 0 0 0 12 0c0-5-6-11-6-11z" /><path d="M9.5 14.5C10 12 12 10 14.5 9.5" strokeWidth="1.3" /></svg>,
  },
  {
    name: 'AMC / O&M', desc: 'Inspections, Repairs\n& Maintenance', color: '#5A6270', bg: '#F2F4F6', ring: 'rgba(90,98,112,0.12)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
  },
  {
    name: 'Water Features', desc: 'Pool, Lake Revival\n& RWH Solutions', color: '#0E7490', bg: '#E8F5F9', ring: 'rgba(14,116,144,0.12)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4C12 4 7 9 7 13.5a5 5 0 0 0 10 0C17 9 12 4 12 4z" /><path d="M8 20c1.3-1 2.7-1.5 4-1.5s2.7.5 4 1.5" strokeWidth="1.5" /></svg>,
  },
]

const industryData = [
  { label: 'Hospitality', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /></svg> },
  { label: 'Industrial', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V3H8v4" /><path d="M12 11v4M8 11v4M16 11v4" /></svg> },
  { label: 'Residential', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
  { label: 'Healthcare', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
  { label: 'Commercial', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="18" height="20" rx="2" /><path d="M8 6h8M8 10h8M8 14h8M10 18h4" /></svg> },
  { label: 'Infrastructure', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10M20 20V10M4 10C4 10 8 6 12 6s8 4 8 4M12 6v14M8 10v10M16 10v10" /></svg> },
]

const aboutPoints = [
  'Turnkey project delivery — concept to commissioning',
  'ISO-compliant system design and installation',
  'In-house engineering, procurement, and execution',
  'Post-commission AMC and operational support',
  'Operations across 18+ cities, Pan India reach',
]

const projectsData = [
  { num: '01', tag: 'Water Treatment', title: 'Advanced WTP for a 500-bed Hospital in Vadodara', loc: 'Gujarat', year: '2024', img: '/project-hospital-wtp.png' },
  { num: '02', tag: 'Plumbing', title: 'Complete Plumbing Infrastructure for Luxury Residential Tower', loc: 'Gujarat', year: '2024', img: '/project-plumbing-tower.png' },
  { num: '03', tag: 'Fire Fighting', title: 'Advanced Fire Hydrant & Sprinkler System for Campus', loc: 'Gujarat', year: '2024', img: '/project-fire-fighting.png' },
  { num: '04', tag: 'O&M / AMC', title: 'AMC for STP at IT Park, Ahmedabad', loc: 'Gujarat', year: '2024', img: '/project-amc-stp.png' },
]

const productsOverview = [
  { name: 'Filters', sub: 'Vessel, Bag, Disc, Pool Filters', img: '/product-filters.png' },
  { name: 'Instruments', sub: 'Flow meters, pH, TDS etc.', img: '/product-instruments.png' },
  { name: 'Spares & Chemicals', sub: 'RO membranes, Bio culture', img: '/product-spares-chemicals.png' },
  { name: 'Equipment', sub: 'Pumps, DAF, UV, Ozone', img: '/product-equipment.png' },
]

const processSteps = [
  { num: '01', title: 'Scope & Contract', desc: 'Understanding requirements, site assessment, and formalising the project agreement.' },
  { num: '02', title: 'Site Inspection', desc: 'Detailed drawings, P&ID, and engineering design finalisation.' },
  { num: '03', title: 'Signoff', desc: 'GA, GFC, and P&ID approval before procurement and fabrication begins.' },
  { num: '04', title: 'Execution', desc: 'Erection, installation, civil work, and skilled labour deployment.' },
  { num: '05', title: 'Commission', desc: 'System testing, performance validation, and final handover to client.' },
]

const serviceKeys = ['Plumbing', 'Fire Fighting', 'Water Treatment', 'Waste Water', 'AMC / O&M', 'Water Features', 'Pump Systems', 'FRP Products']

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
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white transition-all duration-200 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
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
                    <button className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-white text-[13.5px] font-medium transition-all duration-200 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
                      Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </Link>
                  <Link href="#projects">
                    <button className="text-white/65 hover:text-white/90 text-[13.5px] font-medium transition-colors duration-200">View Projects</button>
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
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-[13px] font-medium text-slate-700 hover:border-slate-400 transition-all shadow-sm">
                  View All Services <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {servicesOverviewData.map((s) => (
                <div key={s.name} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:border-slate-200 transition-all duration-300 cursor-pointer">
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
                        <svg className="w-3.5 h-3.5" style={{ color: '#4A7C59' }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
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
                    <button className="flex items-center gap-3 group">
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
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-[13px] font-medium text-slate-700 hover:border-slate-400 transition-all shadow-sm">
                Explore All Projects <ArrowRight className="w-3.5 h-3.5" />
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
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-[13px] font-medium text-slate-700 hover:border-slate-400 transition-all shadow-sm">
                Browse All Products <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {productsOverview.map((prod) => (
                <div key={prod.name} className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex" style={{ height: '220px' }}>
                  {/* Text */}
                  <div className="flex flex-col justify-between p-6 flex-shrink-0" style={{ width: '52%' }}>
                    <div>
                      <h3 className="text-[16px] font-bold text-slate-900 mb-2 leading-snug">{prod.name}</h3>
                      <p className="text-[12.5px] text-slate-500 leading-relaxed">{prod.sub}</p>
                    </div>
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:opacity-80 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]"
                      style={{ backgroundColor: '#4A7C59' }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  {/* Image — contain so full product is always visible */}
                  <div className="relative flex-1">
                    <Image
                      src={prod.img}
                      alt={prod.name}
                      fill
                      className="object-contain object-center"
                      sizes="200px"
                    />
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
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-[27px] left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-slate-200 z-0" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                {processSteps.map((step, i) => (
                  <div key={step.num} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[13px] font-semibold text-slate-400">{step.num}</span>
                      {i < processSteps.length - 1 && (
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4A7C59' }} />
                      )}
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
                    { icon: <MapPin className="w-4 h-4" />, label: 'Vadodara Office', val: '123, Industrial Area, Vadodara, Gujarat — 390010' },
                    { icon: <MapPin className="w-4 h-4" />, label: 'Ahmedabad Office', val: '456, SG Highway, Ahmedabad, Gujarat — 380054' },
                    { icon: <Mail className="w-4 h-4" />, label: 'Email', val: 'info@jskwatertech.com' },
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
                    <Link key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-slate-400 hover:text-slate-800 transition-colors">
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
                  <button className="w-full h-11 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
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
        {/* Tree background image */}
        <Image
          src="/newsletter-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
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
                <button className="px-5 py-2.5 rounded-full text-white text-[13px] font-semibold flex items-center gap-2 transition-all hover:opacity-90 active:scale-[0.96] flex-shrink-0 border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
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
                  <Link key={i} href="#" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/35 transition-colors">
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
