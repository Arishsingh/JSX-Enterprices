'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ArrowRight, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
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
function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// ─── DATA ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: '120+', label: 'Projects Completed' },
  { value: '18+', label: 'Cities Served' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'End-to-End Execution' },
]

const industries = [
  { label: 'Hospitality', icon: '🏨' },
  { label: 'Industrial', icon: '🏭' },
  { label: 'Residential', icon: '🏘️' },
  { label: 'Healthcare', icon: '🏥' },
  { label: 'Commercial', icon: '🏢' },
  { label: 'Infrastructure', icon: '🌉' },
]

const servicesData = {
  Plumbing: {
    color: '#4A7C59',
    sub: 'Supply · Drainage · Sanitary',
    items: [
      { title: 'Water Supply Systems', desc: 'Complete plumbing solutions for residential, commercial, and industrial water distribution.', img: '/d.jpg' },
      { title: 'Drainage & Sanitary Networks', desc: 'Efficient drainage and sanitary piping systems designed for long-term performance.', img: '/m.jpg' },
      { title: 'Hydro Pneumatic Systems', desc: 'Advanced pressure boosting systems for smooth and automated water flow management.', img: '/k.jpg' },
      { title: 'Plumbing Maintenance', desc: 'Professional repair, inspection, and maintenance services for plumbing infrastructure.', img: '/d.jpg' },
    ],
  },
  'Fire Fighting': {
    color: '#B94040',
    sub: 'Hydrant · Sprinkler · Alarms',
    items: [
      { title: 'Fire Hydrant Systems', desc: 'Reliable fire hydrant networks designed for emergency response and safety compliance.', img: '/k.jpg' },
      { title: 'Automatic Sprinkler Systems', desc: 'Advanced sprinkler systems providing rapid fire suppression and protection.', img: '/m.jpg' },
      { title: 'Fire Alarm & Safety Equipment', desc: 'Integrated fire alarms and extinguishing equipment for complete building safety.', img: '/d.jpg' },
      { title: 'Fire Pumping Solutions', desc: 'High-performance fire pumps ensuring continuous emergency water supply.', img: '/k.jpg' },
    ],
  },
  'Water Treatment': {
    color: '#2A7BA0',
    sub: 'WTP · RO · Softener · DM',
    items: [
      { title: 'Water Treatment Plants', desc: 'Advanced WTP design and installation for safe and efficient water purification.', img: '/m.jpg' },
      { title: 'Reverse Osmosis Systems', desc: 'High-performance RO systems engineered for clean and purified water supply.', img: '/k.jpg' },
      { title: 'Water Softening Plants', desc: 'Efficient softening systems to remove hardness and improve water quality.', img: '/d.jpg' },
      { title: 'DM Plant Solutions', desc: 'Deionization systems for ultra-pure water in industrial and laboratory applications.', img: '/m.jpg' },
    ],
  },
  'Waste Water': {
    color: '#6B7280',
    sub: 'STP · ETP · MBR · MBBR · Grey Water',
    items: [
      { title: 'Sewage Treatment Plants', desc: 'Efficient STP systems managing wastewater with modern treatment technologies.', img: '/k.jpg' },
      { title: 'Effluent Treatment Plants', desc: 'Industrial ETP solutions designed to treat and recycle process wastewater safely.', img: '/d.jpg' },
      { title: 'MBR & MBBR Systems', desc: 'Advanced bio-reactor technology for superior biological treatment performance.', img: '/m.jpg' },
      { title: 'Grey Water Recycling', desc: 'Sustainable grey water treatment and reuse systems for buildings and campuses.', img: '/k.jpg' },
    ],
  },
  'AMC / O&M': {
    color: '#7B5EA7',
    sub: 'Inspections · Repairs',
    items: [
      { title: 'Annual Maintenance Contracts', desc: 'Long-term AMC services ensuring efficiency and system reliability year-round.', img: '/m.jpg' },
      { title: 'Plant Operation Support', desc: 'Complete operational management for water and wastewater treatment facilities.', img: '/d.jpg' },
      { title: 'System Inspection & Testing', desc: 'Routine inspections and testing services for safe and optimized performance.', img: '/k.jpg' },
      { title: 'Repair & Upgrade Solutions', desc: 'Quick repair services and system upgrades for uninterrupted operations.', img: '/m.jpg' },
    ],
  },
  'Water Features': {
    color: '#0E7490',
    sub: 'Pool · Lake Revival · RWH',
    items: [
      { title: 'Swimming Pool Systems', desc: 'Complete pool filtration, circulation, and chemical dosing systems.', img: '/k.jpg' },
      { title: 'Lake Revival Projects', desc: 'Eco-friendly lake restoration and water body management solutions.', img: '/d.jpg' },
      { title: 'Rainwater Harvesting', desc: 'RWH systems for sustainable water conservation and groundwater recharge.', img: '/m.jpg' },
      { title: 'Fountain & Feature Systems', desc: 'Decorative water feature installation and maintenance for landscaping.', img: '/k.jpg' },
    ],
  },
  'Pump Systems': {
    color: '#B45309',
    sub: 'Heat Pump · Hydropneumatic',
    items: [
      { title: 'Hydropneumatic Pressure Systems', desc: 'Automated pressure boosting for consistent water supply in multi-storey buildings.', img: '/d.jpg' },
      { title: 'Heat Pump Solutions', desc: 'Energy-efficient heat pump systems for heating and cooling applications.', img: '/m.jpg' },
      { title: 'Submersible Pump Systems', desc: 'Industrial and domestic submersible pump installation and maintenance.', img: '/k.jpg' },
      { title: 'Pump AMC Services', desc: 'Regular maintenance contracts ensuring peak pump performance and longevity.', img: '/d.jpg' },
    ],
  },
  'FRP Products': {
    color: '#065F46',
    sub: 'Covers · Gratings · Gullies',
    items: [
      { title: 'FRP Covers & Lids', desc: 'Durable fibre-reinforced plastic covers for manholes, tanks, and pits.', img: '/m.jpg' },
      { title: 'FRP Gratings', desc: 'Lightweight, corrosion-resistant gratings for industrial flooring and walkways.', img: '/k.jpg' },
      { title: 'FRP Gully Traps', desc: 'Anti-corrosive FRP gully systems for drainage and wastewater channels.', img: '/d.jpg' },
      { title: 'Custom FRP Fabrication', desc: 'Bespoke FRP moulding and fabrication for project-specific requirements.', img: '/m.jpg' },
    ],
  },
}

type ServiceKey = keyof typeof servicesData

const productsData = {
  Filters: {
    sub: 'Vessel · Bag · Disc · Pool',
    items: ['Sand Media Filters', 'Bag Filters', 'Disc Filters', 'Pool Sand Filters', 'Carbon Filters', 'Multimedia Filters'],
  },
  Instruments: {
    sub: 'Flow meters · pH · TDS etc.',
    items: ['Flow Meters', 'pH Meters & Controllers', 'TDS Meters', 'DO Meters', 'Pressure Gauges', 'Level Sensors'],
  },
  'Spares & Chemicals': {
    sub: 'RO membranes · Bio culture',
    items: ['RO Membranes', 'Bio Culture', 'Antiscalant Chemicals', 'Coagulants & Flocculants', 'Chlorine Dosing', 'UV Lamps'],
  },
  Equipment: {
    sub: 'Pumps · DAF · UV · Ozone',
    items: ['Centrifugal Pumps', 'DAF Systems', 'UV Sterilisers', 'Ozone Generators', 'Dosing Pumps', 'Blowers & Aerators'],
  },
}

type ProductKey = keyof typeof productsData

const processSteps = [
  { num: '01', title: 'Scope & Contract', desc: 'Understanding requirements, site assessment, and formalising the project agreement.', color: '#B45309' },
  { num: '02', title: 'Site Inspection', desc: 'Detailed drawings, P&ID, and engineering design finalisation.', color: '#B45309' },
  { num: '03', title: 'Signoff', desc: 'GA, GFC, and P&ID approval before procurement and fabrication begins.', color: '#B45309' },
  { num: '04', title: 'Execution', desc: 'Erection, civil work, equipment installation, and skilled labour deployment.', color: '#B45309' },
  { num: '05', title: 'Commission', desc: 'System testing, performance validation, and final handover to client.', color: '#B45309' },
]

const latestProjects = [
  { num: '01', tag: 'Water Treatment', title: 'Advanced WTP for a 500-bed Hospital in Vadodara', meta: ['Gujarat', '2024'], img: '/d.jpg' },
  { num: '02', tag: 'Plumbing', title: 'Complete Plumbing Infrastructure for Luxury Residential Tower', desc: 'Water supply, drainage, and sanitary system execution with maintenance support.', img: '/m.jpg' },
  { num: '03', tag: 'Fire Fighting', title: 'Advanced Fire Hydrant & Sprinkler System for Industrial Campus', desc: 'Reliable fire safety systems designed for industrial and commercial facilities.' },
  { num: '04', tag: 'AMC / O&M', title: 'Annual Maintenance Contract for STP at IT Park, Ahmedabad', desc: 'Routine inspections, testing, upgrades, and plant maintenance services.' },
]

// ─── TAG COLOR MAP ─────────────────────────────────────────────────────────────
const tagColors: Record<string, string> = {
  'Water Treatment': '#2A7BA0',
  'Plumbing': '#4A7C59',
  'Fire Fighting': '#B94040',
  'AMC / O&M': '#7B5EA7',
  'Waste Water': '#6B7280',
  'Water Features': '#0E7490',
  'Pump Systems': '#B45309',
  'FRP Products': '#065F46',
}
function tc(tag: string) { return tagColors[tag] ?? '#9E7B4A' }

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function SectionHeader({ title, italic, cta }: { title: string; italic?: string; cta?: string }) {
  return (
    <div className="flex items-baseline justify-between mb-12">
      <h2 className="text-4xl tracking-tight leading-none font-normal" style={{ fontFamily: "'DM Serif Display', serif" }}>
        {title}{italic && <> <em style={{ fontStyle: 'italic', color: '#9E7B4A' }}>{italic}</em></>}
      </h2>
      {cta && (
        <button className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.09em] uppercase text-slate-400 hover:text-slate-900 transition-colors group border-none bg-transparent cursor-pointer">
          {cta} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </div>
  )
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function JSKWebsite() {
  const [activeService, setActiveService] = useState<ServiceKey>('Plumbing')
  const [activeProduct, setActiveProduct] = useState<ProductKey>('Filters')
  const [serviceAnimate, setServiceAnimate] = useState(true)
  const [enquiryForm, setEnquiryForm] = useState({ name: '', company: '', service: '', phone: '', message: '' })

  useEffect(() => {
    setServiceAnimate(false)
    const t = setTimeout(() => setServiceAnimate(true), 40)
    return () => clearTimeout(t)
  }, [activeService])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ══════════════════════════════════════════════════════
          HEADER / NAV
      ══════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/c.png" alt="JSK Logo" width={200} height={80} className="h-16 w-auto object-contain" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#home" className="hover:text-black transition">Home</Link>
            <Link href="#about" className="hover:text-black transition">About</Link>
            <Link href="#services" className="hover:text-black transition">Services</Link>
            <Link href="#products" className="hover:text-black transition">Products</Link>
            <Link href="#process" className="hover:text-black transition">How We Work</Link>
            <Link href="#contact" className="hover:text-black transition">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-black transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="#contact">
              <Button className="rounded-full bg-orange-700 hover:bg-orange-800 text-white px-6 text-sm h-10 font-medium">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>

        {/* ══════════════════════════════════════════════════════
            HOME PAGE — HERO BANNER
        ══════════════════════════════════════════════════════ */}
        <section id="home" className="max-w-7xl mx-auto px-6 pt-14 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="lg:col-span-5 space-y-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-orange-700 border border-orange-200 bg-orange-50 px-4 py-1.5 rounded-full">
                Pan India Services
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-slate-900">
                Water &amp; Waste<br />
                Treatment <span className="text-slate-400 font-normal">Solutions</span>
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                From concept to commissioning — complete solutions in Water &amp; Wastewater Treatment, Plumbing, and Fire Fighting across Industrial, Hospitality, Residential, and Healthcare sectors.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#contact">
                  <Button className="rounded-full bg-orange-700 hover:bg-orange-800 text-white px-7 h-11 font-medium text-sm">
                    Get Started
                  </Button>
                </Link>
                <Link href="#services" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-black transition group">
                  Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right image grid */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4 min-h-[460px]">
              <div className="col-span-7 rounded-3xl relative overflow-hidden min-h-[420px] bg-slate-100 border border-slate-200/60">
                <Image src="/m.jpg" alt="Water treatment plant" fill className="object-cover" priority sizes="40vw" />
              </div>
              <div className="col-span-5 flex flex-col gap-4">
                <div className="h-[230px] rounded-3xl relative overflow-hidden bg-slate-100 border border-slate-200/60">
                  <Image src="/k.jpg" alt="Industrial waste solutions" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="flex-1 rounded-3xl relative overflow-hidden bg-slate-100 border border-slate-200/60">
                  <Image src="/d.jpg" alt="Plumbing systems" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>

          {/* ── STATS BAR ── */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-8 py-6 text-center">
                <div className="text-3xl font-bold text-slate-900 tracking-tight">{s.value}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── INDUSTRIES SERVED ── */}
          <div className="mt-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">Industries Served</p>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span key={ind.label} className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full hover:border-slate-300 transition-colors cursor-default">
                  <span>{ind.icon}</span>{ind.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            ABOUT US PAGE
        ══════════════════════════════════════════════════════ */}
        <section id="about" className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title="About" italic="Us" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Company story */}
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-orange-700 block mb-3">Company Story</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Indian-Owned · Vadodara Based</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    JSK is a Vadodara-headquartered MEP contractor specialising in Water Treatment, Plumbing, and Fire Fighting systems. With over a decade of hands-on execution, we deliver turnkey projects from concept to commissioning — serving clients across India.
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-orange-700 block mb-3">Service Approach</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Concept to Commissioning</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We handle every phase — site inspection, engineering drawings, procurement, erection, testing, and handover. Our end-to-end model ensures accountability, quality, and speed on every project.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">PAN India Presence</span>
                    <p className="text-sm font-semibold text-slate-800">Vadodara + Ahmedabad</p>
                    <p className="text-xs text-slate-400">Operations across 18+ cities</p>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Equipment & Safety</span>
                    <p className="text-sm font-semibold text-slate-800">Welding · Core-cutting</p>
                    <p className="text-xs text-slate-400">Full in-house capability</p>
                  </div>
                </div>
              </div>

              {/* Image + values */}
              <div className="space-y-5">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden relative bg-slate-200">
                  <Image src="/m.jpg" alt="JSK team at work" fill className="object-cover" sizes="45vw" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Turnkey project delivery',
                    'ISO-compliant systems',
                    'In-house engineering team',
                    'Post-commission support',
                    'Pan India reach',
                    'Transparent pricing',
                  ].map((v) => (
                    <div key={v} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SERVICES PAGE
        ══════════════════════════════════════════════════════ */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-6">
          <SectionHeader title="Our" italic="Services" cta="View all" />

          {/* Tab bar */}
          <div className="border-b border-slate-100 mb-10 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-0 whitespace-nowrap min-w-max">
              {(Object.keys(servicesData) as ServiceKey[]).map((key) => {
                const isActive = activeService === key
                return (
                  <button
                    key={key}
                    onClick={() => setActiveService(key)}
                    className={`relative px-5 pb-3 pt-1 text-sm font-medium border-none bg-transparent transition-colors outline-none cursor-pointer ${isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-700'}`}
                  >
                    {key}
                    <span className="block text-[10px] font-normal text-slate-400 mt-0.5" style={{ color: isActive ? servicesData[key].color : undefined }}>
                      {servicesData[key].sub}
                    </span>
                    {isActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t" style={{ background: servicesData[key].color }} />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 transition-all duration-400 ease-out ${serviceAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {servicesData[activeService].items.map((item, i) => (
              <div key={i} className="group cursor-pointer space-y-3">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-slate-100 border border-slate-100 group-hover:shadow-md transition-shadow duration-300">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-slate-600 transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            LATEST PROJECTS
        ══════════════════════════════════════════════════════ */}
     <section className="bg-slate-50 py-24">
  <div className="max-w-7xl mx-auto px-6">
    <SectionHeader title="Latest" italic="Projects" cta="Explore all" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 items-start">
      {/* Featured */}
      <div className="group cursor-pointer">
        <div className="w-full aspect-[4/3] overflow-hidden mb-5 rounded-2xl">
          <Image src={latestProjects[0].img!} alt={latestProjects[0].title} width={800} height={600}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
        </div>
        {/* Kept color only on the tag */}
        <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: tc(latestProjects[0].tag) }}>
          {latestProjects[0].tag}
        </p>
        {/* Changed title to clean slate-900 */}
        <h3 className="text-[1.4rem] leading-snug mb-2.5 font-normal tracking-tight text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>
          {latestProjects[0].title}
        </h3>
        {/* Changed metadata to a muted slate */}
        <div className="flex items-center gap-2.5 text-[11.5px] text-slate-500">
          {latestProjects[0].meta!.map((m, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-slate-300">—</span>}
              <span>{m}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Side list */}
      <div>
        {latestProjects.slice(1).map((item) => {
          const tagColor = tc(item.tag)
          return (
            <div key={item.num}
              className="flex items-start gap-5 py-5 border-t border-slate-200 last:border-b cursor-pointer group hover:pl-1.5 transition-all duration-200"
            >
              <span className="text-[11px] font-medium text-slate-300 min-w-[20px] pt-0.5 tabular-nums">{item.num}</span>
              <div className="flex-1">
                {/* Kept color only on the tag */}
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1.5" style={{ color: tagColor }}>{item.tag}</p>
                {/* Clean dark text for titles */}
                <h4 className="text-[13.5px] font-medium leading-snug mb-1 text-slate-900">{item.title}</h4>
                {/* Muted text for descriptions */}
                <p className="text-[12px] leading-relaxed text-slate-500">{item.desc}</p>
              </div>
              {/* Neutral icon color that responds to hover */}
              <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
            </div>
          )
        })}
      </div>
    </div>
  </div>
</section>

        {/* ══════════════════════════════════════════════════════
            PRODUCTS & EQUIPMENT PAGE
        ══════════════════════════════════════════════════════ */}
        <section id="products" className="py-24 max-w-7xl mx-auto px-6">
          <SectionHeader title="Products &amp;" italic="Equipment" cta="Browse all" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {(Object.keys(productsData) as ProductKey[]).map((cat) => {
              const isActive = activeProduct === cat
              return (
                <div key={cat}
                  onClick={() => setActiveProduct(cat)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${isActive ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                >
                  <h3 className={`text-base font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>{cat}</h3>
                  <p className={`text-[11px] mb-4 ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>{productsData[cat].sub}</p>
                  <ul className="space-y-1.5">
                    {productsData[cat].items.map((item) => (
                      <li key={item} className={`text-xs flex items-center gap-2 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${isActive ? 'bg-orange-400' : 'bg-slate-300'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            HOW WE WORK — PROCESS PAGE
        ══════════════════════════════════════════════════════ */}
        <section id="process" className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-14">
              <h2 className="text-4xl font-normal tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
                How We <em style={{ fontStyle: 'italic', color: '#F59E0B' }}>Work</em>
              </h2>
              <span className="text-xs font-medium tracking-widest uppercase text-slate-400">Process Page</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {processSteps.map((step, i) => (
                <div key={step.num} className="relative flex flex-col">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-0 h-px bg-slate-700" />
                  )}
                  <div className="flex flex-col items-start md:items-center text-left md:text-center px-4 pb-10 md:pb-0">
                    <div className="w-12 h-12 rounded-full border border-amber-500/40 flex items-center justify-center mb-4 bg-amber-500/10 relative z-10">
                      <span className="text-xs font-bold text-amber-400">{step.num}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-[160px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CONTACT & ENQUIRY PAGE
        ══════════════════════════════════════════════════════ */}
        <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
          <SectionHeader title="Contact &amp;" italic="Enquiry" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — office details + map embed */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5">Office Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: <MapPin className="w-4 h-4" />, label: 'Vadodara Office', val: '123, Industrial Area, Vadodara, Gujarat — 390010' },
                    { icon: <MapPin className="w-4 h-4" />, label: 'Ahmedabad Office', val: '456, SG Highway, Ahmedabad, Gujarat — 380054' },
                    { icon: <Phone className="w-4 h-4" />, label: 'Phone', val: '+91 98765 43210 / +91 79 1234 5678' },
                    { icon: <Mail className="w-4 h-4" />, label: 'Email', val: 'info@jskwatertech.com' },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-3">
                      <span className="text-orange-600 mt-0.5 flex-shrink-0">{d.icon}</span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{d.label}</p>
                        <p className="text-sm text-slate-700">{d.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps placeholder */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[16/9] flex items-center justify-center relative">
                <div className="text-center space-y-2">
                  <MapPin className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs text-slate-400">Vadodara Office Pin</p>
                  <p className="text-[10px] text-slate-300">Embed Google Maps here</p>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">Follow Us</p>
                <div className="flex items-center gap-4">
                  {[
                    { icon: <IconInstagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
                    { icon: <IconFacebook className="w-5 h-5" />, label: 'Facebook', href: '#' },
                    { icon: <IconLinkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
                  ].map((s) => (
                    <Link key={s.label} href={s.href} aria-label={s.label}
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-orange-700 hover:border-orange-300 transition-colors">
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Enquiry form */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Send an Enquiry</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Name</label>
                    <input
                      type="text" placeholder="Your name"
                      value={enquiryForm.name}
                      onChange={e => setEnquiryForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full h-10 px-4 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Company</label>
                    <input
                      type="text" placeholder="Company name"
                      value={enquiryForm.company}
                      onChange={e => setEnquiryForm(f => ({ ...f, company: e.target.value }))}
                      className="w-full h-10 px-4 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Service Required</label>
                  <select
                    value={enquiryForm.service}
                    onChange={e => setEnquiryForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full h-10 px-4 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-orange-400 transition-colors text-slate-700 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {Object.keys(servicesData).map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Phone</label>
                  <input
                    type="tel" placeholder="+91 XXXXX XXXXX"
                    value={enquiryForm.phone}
                    onChange={e => setEnquiryForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full h-10 px-4 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Message</label>
                  <textarea
                    rows={4} placeholder="Describe your requirement..."
                    value={enquiryForm.message}
                    onChange={e => setEnquiryForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-orange-400 transition-colors resize-none"
                  />
                </div>
                <Button className="w-full h-11 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-medium text-sm">
                  Send Enquiry <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ══════════════════════════════════════════════════════
          NEWSLETTER CTA
      ══════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Stay Updated on<br />Our Latest Projects
          </h2>
          <p className="text-sm text-slate-400">Subscribe to receive project updates, case studies, and service announcements.</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Email address"
              className="rounded-full bg-white/10 text-white border border-white/20 h-11 px-5 placeholder:text-slate-400 text-sm focus-visible:ring-orange-400 flex-1" />
            <Button className="rounded-full bg-orange-700 hover:bg-orange-800 text-white px-7 h-11 text-sm font-semibold shrink-0 w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 gap-8 pb-12">
          <div className="col-span-2 md:col-span-4 space-y-4">
            <Image src="/c.png" alt="JSK Logo" width={160} height={60} className="h-12 w-auto object-contain" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Complete MEP contractor for Water Treatment, Plumbing, and Fire Fighting systems. Vadodara · Ahmedabad · Pan India.
            </p>
            <div className="flex gap-3">
              {[IconInstagram, IconFacebook, IconLinkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-700 hover:border-orange-300 transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Company</h5>
            <ul className="space-y-2">
              {['About Us', 'Our Team', 'Careers', 'Contact Us', 'Privacy Policy'].map(item => (
                <li key={item}><Link href="#" className="text-xs text-slate-400 hover:text-slate-900 transition">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Services</h5>
            <ul className="space-y-2">
              {['Plumbing', 'Fire Fighting', 'Water Treatment', 'Waste Water', 'AMC / O&M'].map(item => (
                <li key={item}><Link href="#services" className="text-xs text-slate-400 hover:text-slate-900 transition">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Products</h5>
            <ul className="space-y-2">
              {['Filters', 'Instruments', 'Spares & Chemicals', 'Equipment'].map(item => (
                <li key={item}><Link href="#products" className="text-xs text-slate-400 hover:text-slate-900 transition">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Contact</h5>
            <ul className="space-y-2">
              <li className="text-xs text-slate-400">Vadodara + Ahmedabad</li>
              <li><Link href="tel:+919876543210" className="text-xs text-slate-400 hover:text-slate-900 transition">+91 98765 43210</Link></li>
              <li><Link href="mailto:info@jskwatertech.com" className="text-xs text-slate-400 hover:text-slate-900 transition">info@jskwatertech.com</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
          <p>© {new Date().getFullYear()} JSK Water Technology. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-700 transition">Terms</Link>
            <Link href="#" className="hover:text-slate-700 transition">Privacy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}