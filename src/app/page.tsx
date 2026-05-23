'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ArrowRight, MapPin, Phone, Mail, CheckCircle2, Menu, X, Hotel, Factory, Home, HeartPulse, Briefcase, Landmark } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView] as const
}

const stats = [
  { value: '120+', label: 'Projects Completed' },
  { value: '18+',  label: 'Cities Served' },
  { value: '10+',  label: 'Years Experience' },
  { value: '100%', label: 'End-to-End Execution' },
]

const industries = [
  { label: 'Hospitality',    Icon: Hotel     },
  { label: 'Industrial',     Icon: Factory   },
  { label: 'Residential',    Icon: Home      },
  { label: 'Healthcare',     Icon: HeartPulse},
  { label: 'Commercial',     Icon: Briefcase },
  { label: 'Infrastructure', Icon: Landmark  },
]

const servicesData = {
  Plumbing: {
    color: '#4A7C59', sub: 'Supply · Drainage · Sanitary',
    items: [
      { title: 'Water Supply Systems',         desc: 'Complete plumbing solutions for residential, commercial, and industrial water distribution.', img: '/product-filters.png' },
      { title: 'Drainage & Sanitary Networks', desc: 'Efficient drainage and sanitary piping systems designed for long-term performance.',           img: '/product-instruments.png' },
      { title: 'Hydro Pneumatic Systems',      desc: 'Advanced pressure boosting systems for smooth and automated water flow management.',           img: '/product-spares-chemicals.png' },
      { title: 'Plumbing Maintenance',         desc: 'Professional repair, inspection, and maintenance services for plumbing infrastructure.',       img: '/product-equipment.png' },
    ],
  },
  'Fire Fighting': {
    color: '#B94040', sub: 'Hydrant · Sprinkler · Alarms',
    items: [
      { title: 'Fire Hydrant Systems',          desc: 'Reliable fire hydrant networks designed for emergency response and safety compliance.',  img: '/product-equipment.png' },
      { title: 'Automatic Sprinkler Systems',   desc: 'Advanced sprinkler systems providing rapid fire suppression and protection.',            img: '/product-filters.png' },
      { title: 'Fire Alarm & Safety Equipment', desc: 'Integrated fire alarms and extinguishing equipment for complete building safety.',       img: '/product-instruments.png' },
      { title: 'Fire Pumping Solutions',        desc: 'High-performance fire pumps ensuring continuous emergency water supply.',                img: '/product-spares-chemicals.png' },
    ],
  },
  'Water Treatment': {
    color: '#2A7BA0', sub: 'WTP · RO · Softener · DM',
    items: [
      { title: 'Water Treatment Plants',  desc: 'Advanced WTP design and installation for safe and efficient water purification.',       img: '/product-filters.png' },
      { title: 'Reverse Osmosis Systems', desc: 'High-performance RO systems engineered for clean and purified water supply.',          img: '/product-spares-chemicals.png' },
      { title: 'Water Softening Plants',  desc: 'Efficient softening systems to remove hardness and improve water quality.',            img: '/product-equipment.png' },
      { title: 'DM Plant Solutions',      desc: 'Deionization systems for ultra-pure water in industrial and laboratory applications.', img: '/product-instruments.png' },
    ],
  },
  'Waste Water': {
    color: '#6B7280', sub: 'STP · ETP · MBR · MBBR · Grey Water',
    items: [
      { title: 'Sewage Treatment Plants',   desc: 'Efficient STP systems managing wastewater with modern treatment technologies.',        img: '/product-equipment.png' },
      { title: 'Effluent Treatment Plants', desc: 'Industrial ETP solutions designed to treat and recycle process wastewater safely.',   img: '/product-filters.png' },
      { title: 'MBR & MBBR Systems',        desc: 'Advanced bio-reactor technology for superior biological treatment performance.',      img: '/product-spares-chemicals.png' },
      { title: 'Grey Water Recycling',      desc: 'Sustainable grey water treatment and reuse systems for buildings and campuses.',      img: '/product-instruments.png' },
    ],
  },
  'AMC / O&M': {
    color: '#7B5EA7', sub: 'Inspections · Repairs',
    items: [
      { title: 'Annual Maintenance Contracts', desc: 'Long-term AMC services ensuring efficiency and system reliability year-round.',  img: '/product-instruments.png' },
      { title: 'Plant Operation Support',      desc: 'Complete operational management for water and wastewater treatment facilities.', img: '/product-equipment.png' },
      { title: 'System Inspection & Testing',  desc: 'Routine inspections and testing services for safe and optimized performance.',  img: '/product-filters.png' },
      { title: 'Repair & Upgrade Solutions',   desc: 'Quick repair services and system upgrades for uninterrupted operations.',       img: '/product-spares-chemicals.png' },
    ],
  },
  'Water Features': {
    color: '#0E7490', sub: 'Pool · Lake Revival · RWH',
    items: [
      { title: 'Swimming Pool Systems',      desc: 'Complete pool filtration, circulation, and chemical dosing systems.',                img: '/product-filters.png' },
      { title: 'Lake Revival Projects',      desc: 'Eco-friendly lake restoration and water body management solutions.',                 img: '/product-equipment.png' },
      { title: 'Rainwater Harvesting',       desc: 'RWH systems for sustainable water conservation and groundwater recharge.',           img: '/product-spares-chemicals.png' },
      { title: 'Fountain & Feature Systems', desc: 'Decorative water feature installation and maintenance for landscaping.',             img: '/product-instruments.png' },
    ],
  },
  'Pump Systems': {
    color: '#B45309', sub: 'Heat Pump · Hydropneumatic',
    items: [
      { title: 'Hydropneumatic Pressure Systems', desc: 'Automated pressure boosting for consistent water supply in multi-storey buildings.', img: '/product-equipment.png' },
      { title: 'Heat Pump Solutions',             desc: 'Energy-efficient heat pump systems for heating and cooling applications.',          img: '/product-instruments.png' },
      { title: 'Submersible Pump Systems',        desc: 'Industrial and domestic submersible pump installation and maintenance.',            img: '/product-filters.png' },
      { title: 'Pump AMC Services',               desc: 'Regular maintenance contracts ensuring peak pump performance and longevity.',       img: '/product-spares-chemicals.png' },
    ],
  },
  'FRP Products': {
    color: '#065F46', sub: 'Covers · Gratings · Gullies',
    items: [
      { title: 'FRP Covers & Lids',       desc: 'Durable fibre-reinforced plastic covers for manholes, tanks, and pits.',                img: '/product-spares-chemicals.png' },
      { title: 'FRP Gratings',            desc: 'Lightweight, corrosion-resistant gratings for industrial flooring and walkways.',       img: '/product-equipment.png' },
      { title: 'FRP Gully Traps',         desc: 'Anti-corrosive FRP gully systems for drainage and wastewater channels.',                img: '/product-instruments.png' },
      { title: 'Custom FRP Fabrication',  desc: 'Bespoke FRP moulding and fabrication for project-specific requirements.',              img: '/product-filters.png' },
    ],
  },
}

type ServiceKey = keyof typeof servicesData

const productsData = {
  Filters:             { sub: 'Vessel · Bag · Disc · Pool',       items: ['Sand Media Filters','Bag Filters','Disc Filters','Pool Sand Filters','Carbon Filters','Multimedia Filters'] },
  Instruments:         { sub: 'Flow meters · pH · TDS etc.',      items: ['Flow Meters','pH Meters & Controllers','TDS Meters','DO Meters','Pressure Gauges','Level Sensors'] },
  'Spares & Chemicals':{ sub: 'RO membranes · Bio culture',       items: ['RO Membranes','Bio Culture','Antiscalant Chemicals','Coagulants & Flocculants','Chlorine Dosing','UV Lamps'] },
  Equipment:           { sub: 'Pumps · DAF · UV · Ozone',         items: ['Centrifugal Pumps','DAF Systems','UV Sterilisers','Ozone Generators','Dosing Pumps','Blowers & Aerators'] },
}

type ProductKey = keyof typeof productsData

const processSteps = [
  { num: '01', title: 'Scope & Contract', desc: 'Understanding requirements, site assessment, and formalising the project agreement.' },
  { num: '02', title: 'Site Inspection',  desc: 'Detailed drawings, P&ID, and engineering design finalisation.' },
  { num: '03', title: 'Signoff',          desc: 'GA, GFC, and P&ID approval before procurement and fabrication begins.' },
  { num: '04', title: 'Execution',        desc: 'Erection, civil work, equipment installation, and skilled labour deployment.' },
  { num: '05', title: 'Commission',       desc: 'System testing, performance validation, and final handover to client.' },
]

const latestProjects = [
  { num: '01', tag: 'Water Treatment', title: 'Advanced WTP for a 500-bed Hospital in Vadodara',                       meta: ['Gujarat', '2024'], img: '/project-hospital-wtp.png' },
  { num: '02', tag: 'Plumbing',        title: 'Complete Plumbing Infrastructure for Luxury Residential Tower',         desc: 'Water supply, drainage, and sanitary system execution with maintenance support.',    img: '/project-plumbing-tower.png' },
  { num: '03', tag: 'Fire Fighting',   title: 'Advanced Fire Hydrant & Sprinkler System for Industrial Campus',        desc: 'Reliable fire safety systems designed for industrial and commercial facilities.' },
  { num: '04', tag: 'AMC / O&M',       title: 'Annual Maintenance Contract for STP at IT Park, Ahmedabad',            desc: 'Routine inspections, testing, upgrades, and plant maintenance services.' },
]

const tagColors: Record<string, string> = {
  'Water Treatment': '#2A7BA0', 'Plumbing': '#4A7C59', 'Fire Fighting': '#B94040',
  'AMC / O&M': '#7B5EA7', 'Waste Water': '#6B7280', 'Water Features': '#0E7490',
  'Pump Systems': '#B45309', 'FRP Products': '#065F46',
}
function tc(tag: string) { return tagColors[tag] ?? '#EA580C' }

const NAV_LINKS = [
  { label: 'Home',        href: '#home'     },
  { label: 'About',       href: '#about'    },
  { label: 'Services',    href: '#services' },
  { label: 'Products',    href: '#products' },
  { label: 'How We Work', href: '#process'  },
  { label: 'Contact',     href: '#contact'  },
]

function SectionHeader({ title, italic, cta }: { title: string; italic?: string; cta?: string }) {
  return (
    <div className="flex items-baseline justify-between mb-8 md:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none font-normal font-subheading">
        {title}{italic && <> <em style={{ fontStyle: 'italic', color: '#ea580c' }}>{italic}</em></>}
      </h2>
      {cta && (
        <button className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.09em] uppercase text-slate-400 hover:text-orange-600 transition-colors group border-none bg-transparent cursor-pointer shrink-0 ml-4">
          {cta} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </div>
  )
}

export default function JSKWebsite() {
  const [activeService, setActiveService]   = useState<ServiceKey>('Plumbing')
  const [activeProduct, setActiveProduct]   = useState<ProductKey>('Filters')
  const [serviceAnimate, setServiceAnimate] = useState(true)
  const [menuOpen, setMenuOpen]             = useState(false)
  const [enquiryForm, setEnquiryForm]       = useState({ name: '', company: '', service: '', phone: '', message: '' })

  const [heroRef,       heroInView]       = useInView(0.05)
  const [aboutRef,      aboutInView]      = useInView()
  const [servicesRef,   servicesInView]   = useInView()
  const [projectsRef,   projectsInView]   = useInView()
  const [productsRef,   productsInView]   = useInView()
  const [processRef,    processInView]    = useInView()
  const [contactRef,    contactInView]    = useInView()
  const [newsletterRef, newsletterInView] = useInView()

  useEffect(() => {
    setServiceAnimate(false)
    const t = setTimeout(() => setServiceAnimate(true), 40)
    return () => clearTimeout(t)
  }, [activeService])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const revealed = (inView: boolean, dir: 'up' | 'left' | 'right' = 'up', delay = 0) =>
    `transition-all duration-700 ${inView
      ? 'opacity-100 translate-x-0 translate-y-0'
      : dir === 'left'  ? 'opacity-0 -translate-x-8'
      : dir === 'right' ? 'opacity-0 translate-x-8'
      :                   'opacity-0 translate-y-8'}`
    + (delay ? ` [transition-delay:${delay}ms]` : '')

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900">
              <span className="text-orange-600">JSK</span> Water Tech
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-orange-600 transition-colors duration-200 whitespace-nowrap">{l.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-slate-500 hover:text-orange-600 transition-colors" aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <Link href="#contact" className="hidden sm:block">
              <Button className="rounded-full bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-6 text-xs md:text-sm h-9 md:h-10 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Get a Quote
              </Button>
            </Link>
            {/* Hamburger */}
            <button
              className="md:hidden p-2 text-slate-700 hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(o => !o)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-3 rounded-xl transition-all duration-200">
                {l.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMenuOpen(false)} className="mt-2">
              <Button className="w-full rounded-full bg-orange-600 hover:bg-orange-700 text-white h-11 font-medium shadow-md">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section id="home" ref={heroRef} className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-14 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Copy */}
            <div className={`lg:col-span-5 space-y-5 md:space-y-7 transition-all duration-700 ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-orange-700 bg-orange-50 shadow-sm px-4 py-1.5 rounded-full">
                Pan India Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-slate-900">
                Water &amp; Waste<br />
                Treatment <span className="text-slate-400 font-normal">Solutions</span>
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                From concept to commissioning — complete solutions in Water &amp; Wastewater Treatment, Plumbing, and Fire Fighting across Industrial, Hospitality, Residential, and Healthcare sectors.
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <Link href="#contact">
                  <Button className="rounded-full bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-7 h-10 md:h-11 font-medium text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
                <Link href="#services" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors group">
                  Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Images — tablet & mobile: single image */}
            <div className={`lg:hidden transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '150ms' }}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 sm:col-span-1 aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden relative bg-slate-100 shadow-xl">
                  <Image src="/hero.png" alt="Water treatment plant" fill className="object-cover" priority sizes="(max-width:640px) 100vw, 50vw" />
                </div>
                <div className="hidden sm:flex flex-col gap-3">
                  <div className="flex-1 rounded-3xl overflow-hidden relative bg-slate-100 shadow-lg">
                    <Image src="/hero-bg.png" alt="Industrial solutions" fill className="object-cover" sizes="50vw" />
                  </div>
                  <div className="flex-1 rounded-3xl overflow-hidden relative bg-slate-100 shadow-lg">
                    <Image src="/about-water-plant.png" alt="Plumbing systems" fill className="object-cover" sizes="50vw" />
                  </div>
                </div>
              </div>
            </div>

            {/* Images — desktop: 3-panel grid */}
            <div className={`hidden lg:grid lg:col-span-7 grid-cols-12 gap-4 min-h-[460px] transition-all duration-700 ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: '150ms' }}>
              <div className="col-span-7 rounded-3xl relative overflow-hidden min-h-[420px] bg-slate-100 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <Image src="/hero.png" alt="Water treatment plant" fill className="object-cover hover:scale-105 transition-transform duration-700" priority sizes="40vw" />
              </div>
              <div className="col-span-5 flex flex-col gap-4">
                <div className="h-[230px] rounded-3xl relative overflow-hidden bg-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-500">
                  <Image src="/hero-bg.png" alt="Industrial waste solutions" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
                </div>
                <div className="flex-1 rounded-3xl relative overflow-hidden bg-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-500">
                  <Image src="/about-water-plant.png" alt="Plumbing systems" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className={`mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden shadow-md transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}>
            {stats.map((s, i) => (
              <div key={s.label} className="bg-white px-4 md:px-8 py-4 md:py-6 text-center hover:bg-orange-50 transition-colors duration-300"
                style={{ transitionDelay: heroInView ? `${420 + i * 70}ms` : '0ms' }}>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{s.value}</div>
                <div className="text-[10px] md:text-xs text-slate-400 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className={`mt-8 md:mt-12 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4 md:mb-5">Industries Served</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {industries.map((ind, i) => (
                <span key={ind.label}
                  className={`flex items-center gap-2 text-xs md:text-sm font-medium text-slate-600 bg-slate-50 shadow-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: heroInView ? `${600 + i * 60}ms` : '0ms' }}>
                  <ind.Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-600 flex-shrink-0" strokeWidth={1.6} />
                  {ind.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" ref={aboutRef} className="bg-slate-50 py-14 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className={revealed(aboutInView)}>
              <SectionHeader title="About" italic="Us" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

              <div className={`space-y-6 md:space-y-8 ${revealed(aboutInView, 'left', 150)}`}>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-orange-600 block mb-3">Company Story</span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight font-subheading">Indian-Owned · Vadodara Based</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    JSK is a Vadodara-headquartered MEP contractor specialising in Water Treatment, Plumbing, and Fire Fighting systems. With over a decade of hands-on execution, we deliver turnkey projects from concept to commissioning — serving clients across India.
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-orange-600 block mb-3">Service Approach</span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight font-subheading">Concept to Commissioning</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We handle every phase — site inspection, engineering drawings, procurement, erection, testing, and handover. Our end-to-end model ensures accountability, quality, and speed on every project.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { badge: 'PAN India Presence', title: 'Vadodara + Ahmedabad', sub: 'Operations across 18+ cities' },
                    { badge: 'Equipment & Safety',  title: 'Welding · Core-cutting',  sub: 'Full in-house capability' },
                  ].map((card, i) => (
                    <div key={i} className="bg-white shadow-md rounded-xl md:rounded-2xl p-4 md:p-5 space-y-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                      style={{ transitionDelay: aboutInView ? `${350 + i * 80}ms` : '0ms' }}>
                      <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-slate-400">{card.badge}</span>
                      <p className="text-xs md:text-sm font-semibold text-slate-800">{card.title}</p>
                      <p className="text-[10px] md:text-xs text-slate-400">{card.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`space-y-4 md:space-y-5 ${revealed(aboutInView, 'right', 300)}`}>
                <div className="aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden relative bg-slate-200 shadow-xl">
                  <Image src="/about-water-plant.png" alt="JSK team at work" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:1024px) 100vw, 45vw" />
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {['Turnkey project delivery','ISO-compliant systems','In-house engineering team','Post-commission support','Pan India reach','Transparent pricing'].map((v, i) => (
                    <div key={v} className={`flex items-center gap-2 text-xs md:text-sm text-slate-600 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: aboutInView ? `${420 + i * 55}ms` : '0ms' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-600 flex-shrink-0" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" ref={servicesRef} className="py-14 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
          <div className={revealed(servicesInView)}>
            <SectionHeader title="Our" italic="Services" cta="View all" />
          </div>

          {/* Tabs — horizontally scrollable */}
          <div className={`border-b border-slate-100 mb-8 md:mb-10 overflow-x-auto ${revealed(servicesInView, 'up', 100)}`} style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-0 whitespace-nowrap min-w-max">
              {(Object.keys(servicesData) as ServiceKey[]).map((key) => {
                const isActive = activeService === key
                return (
                  <button key={key} onClick={() => setActiveService(key)}
                    className={`relative px-3 md:px-5 pb-3 pt-1 text-xs md:text-sm font-medium border-none bg-transparent transition-colors duration-200 outline-none cursor-pointer ${isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-700'}`}>
                    {key}
                    <span className="hidden sm:block text-[10px] font-normal mt-0.5" style={{ color: isActive ? servicesData[key].color : '#94a3b8' }}>
                      {servicesData[key].sub}
                    </span>
                    {isActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t" style={{ background: servicesData[key].color }} />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 transition-all duration-500 ease-out ${serviceAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {servicesData[activeService].items.map((item, i) => (
              <div key={i}
                className={`group cursor-pointer space-y-3 transition-all duration-500 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: servicesInView ? `${200 + i * 90}ms` : '0ms' }}>
                <div className="aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden relative bg-white shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <Image src={item.img} alt={item.title} fill className="object-fill" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── LATEST PROJECTS ── */}
        <section ref={projectsRef} className="bg-slate-50 py-14 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className={revealed(projectsInView)}>
              <SectionHeader title="Latest" italic="Projects" cta="Explore all" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-14 items-start">

              <div className={`group cursor-pointer ${revealed(projectsInView, 'left', 100)}`}>
                <div className="w-full aspect-[4/3] overflow-hidden mb-4 md:mb-5 rounded-xl md:rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                  <Image src={latestProjects[0].img!} alt={latestProjects[0].title} width={800} height={600}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: tc(latestProjects[0].tag) }}>
                  {latestProjects[0].tag}
                </p>
                <h3 className="text-xl md:text-[1.4rem] leading-snug mb-2 md:mb-2.5 font-normal tracking-tight text-slate-900 font-subheading group-hover:text-orange-700 transition-colors duration-300">
                  {latestProjects[0].title}
                </h3>
                <div className="flex items-center gap-2.5 text-[11.5px] text-slate-500">
                  {latestProjects[0].meta!.map((m, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="text-slate-300">—</span>}
                      <span>{m}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className={`space-y-3 ${revealed(projectsInView, 'right', 200)}`}>
                {latestProjects.slice(1).map((item, i) => (
                  <div key={item.num}
                    className={`flex items-start gap-4 md:gap-5 p-4 md:p-5 rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer group transition-all duration-300 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: projectsInView ? `${300 + i * 90}ms` : '0ms' }}>
                    <span className="text-[11px] font-medium text-slate-300 min-w-[20px] pt-0.5 tabular-nums">{item.num}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold tracking-widest uppercase mb-1 md:mb-1.5" style={{ color: tc(item.tag) }}>{item.tag}</p>
                      <h4 className="text-xs md:text-[13.5px] font-medium leading-snug mb-1 text-slate-900 group-hover:text-orange-700 transition-colors">{item.title}</h4>
                      <p className="text-[11px] md:text-[12px] leading-relaxed text-slate-500 line-clamp-2">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 mt-0.5 flex-shrink-0 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section id="products" ref={productsRef} className="py-14 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
          <div className={revealed(productsInView)}>
            <SectionHeader title="Products &amp;" italic="Equipment" cta="Browse all" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {(Object.keys(productsData) as ProductKey[]).map((cat, i) => {
              const isActive = activeProduct === cat
              return (
                <div key={cat} onClick={() => setActiveProduct(cat)}
                  className={`cursor-pointer rounded-xl md:rounded-2xl p-5 md:p-6 transition-all duration-300 ${productsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isActive ? 'bg-slate-900 text-white shadow-xl scale-[1.02]' : 'bg-white shadow-md hover:shadow-lg hover:-translate-y-1'}`}
                  style={{ transitionDelay: productsInView ? `${100 + i * 90}ms` : '0ms' }}>
                  <h3 className={`text-sm md:text-base font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>{cat}</h3>
                  <p className={`text-[10px] md:text-[11px] mb-3 md:mb-4 ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>{productsData[cat].sub}</p>
                  <ul className="space-y-1.5">
                    {productsData[cat].items.map((item) => (
                      <li key={item} className={`text-[11px] md:text-xs flex items-center gap-2 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
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

        {/* ── PROCESS ── */}
        <section id="process" ref={processRef} className="bg-slate-900 py-14 md:py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-10 md:mb-14 transition-all duration-700 ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight font-subheading">
                How We <em style={{ fontStyle: 'italic', color: '#fb923c' }}>Work</em>
              </h2>
              <span className="text-xs font-medium tracking-widest uppercase text-slate-400">Process Page</span>
            </div>

            {/* Steps — 1 col mobile, 2 col sm, 3 col md, 5 col lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
              {processSteps.map((step, i) => (
                <div key={step.num}
                  className={`relative flex flex-col transition-all duration-700 ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: processInView ? `${100 + i * 110}ms` : '0ms' }}>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] right-0 h-px bg-slate-700" />
                  )}
                  <div className="flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-0 text-left lg:text-center lg:px-4 pb-2 lg:pb-0">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-orange-500/40 flex items-center justify-center bg-orange-500/10 relative z-10 shadow-lg hover:scale-110 transition-all duration-300 shrink-0 lg:mb-4">
                      <span className="text-xs font-bold text-orange-400">{step.num}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed lg:max-w-[160px]">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" ref={contactRef} className="py-14 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
          <div className={revealed(contactInView)}>
            <SectionHeader title="Contact &amp;" italic="Enquiry" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            <div className={`space-y-6 md:space-y-8 ${revealed(contactInView, 'left', 100)}`}>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-4 md:mb-5 font-subheading">Office Details</h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { icon: <MapPin className="w-4 h-4" />, label: 'Vadodara Office', val: '123, Industrial Area, Vadodara, Gujarat — 390010' },
                    { icon: <MapPin className="w-4 h-4" />, label: 'Ahmedabad Office', val: '456, SG Highway, Ahmedabad, Gujarat — 380054' },
                    { icon: <Phone className="w-4 h-4" />, label: 'Phone',            val: '+91 98765 43210 / +91 79 1234 5678' },
                    { icon: <Mail className="w-4 h-4" />,  label: 'Email',            val: 'info@jskwatertech.com' },
                  ].map((d, i) => (
                    <div key={d.label}
                      className={`flex items-start gap-3 transition-all duration-500 ${contactInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: contactInView ? `${200 + i * 70}ms` : '0ms' }}>
                      <span className="text-orange-600 mt-0.5 flex-shrink-0">{d.icon}</span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{d.label}</p>
                        <p className="text-xs md:text-sm text-slate-700">{d.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md bg-slate-50 aspect-[16/9] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs text-slate-400">Vadodara Office Pin</p>
                  <p className="text-[10px] text-slate-300">Embed Google Maps here</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">Follow Us</p>
                <div className="flex items-center gap-3 md:gap-4">
                  {[
                    { icon: <IconInstagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
                    { icon: <IconFacebook  className="w-5 h-5" />, label: 'Facebook',  href: '#' },
                    { icon: <IconLinkedin  className="w-5 h-5" />, label: 'LinkedIn',  href: '#' },
                  ].map((s) => (
                    <Link key={s.label} href={s.href} aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-orange-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className={`bg-slate-50 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg ${revealed(contactInView, 'right', 200)}`}>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-5 md:mb-6 font-subheading">Send an Enquiry</h3>
              <div className="space-y-4">
                {/* Name + Company: single col on mobile, 2 cols on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {([
                    { label: 'Name',    placeholder: 'Your name',    key: 'name'    as const, type: 'text' },
                    { label: 'Company', placeholder: 'Company name', key: 'company' as const, type: 'text' },
                  ] as const).map((field) => (
                    <div key={field.key}>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder}
                        value={enquiryForm[field.key]}
                        onChange={e => setEnquiryForm(f => ({ ...f, [field.key]: e.target.value }))}
                        className="w-full h-10 px-4 text-sm bg-white shadow-sm rounded-xl outline-none focus:shadow-md focus:ring-2 focus:ring-orange-400/30 transition-all duration-200" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Service Required</label>
                  <select value={enquiryForm.service}
                    onChange={e => setEnquiryForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full h-10 px-4 text-sm bg-white shadow-sm rounded-xl outline-none focus:shadow-md focus:ring-2 focus:ring-orange-400/30 transition-all duration-200 text-slate-700 appearance-none cursor-pointer">
                    <option value="">Select a service</option>
                    {Object.keys(servicesData).map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Phone</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX"
                    value={enquiryForm.phone}
                    onChange={e => setEnquiryForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full h-10 px-4 text-sm bg-white shadow-sm rounded-xl outline-none focus:shadow-md focus:ring-2 focus:ring-orange-400/30 transition-all duration-200" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Message</label>
                  <textarea rows={4} placeholder="Describe your requirement..."
                    value={enquiryForm.message}
                    onChange={e => setEnquiryForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 text-sm bg-white shadow-sm rounded-xl outline-none focus:shadow-md focus:ring-2 focus:ring-orange-400/30 transition-all duration-200 resize-none" />
                </div>
                <Button className="w-full h-11 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  Send Enquiry <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── NEWSLETTER ── */}
      <section ref={newsletterRef} className="bg-slate-900 text-white py-14 md:py-20 px-4 md:px-6 text-center">
        <div className={`max-w-xl mx-auto space-y-5 md:space-y-6 transition-all duration-700 ${newsletterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-subheading">
            Stay Updated on<br />Our Latest Projects
          </h2>
          <p className="text-sm text-slate-400">Subscribe to receive project updates, case studies, and service announcements.</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Email address"
              className="rounded-full bg-white/10 text-white h-11 px-5 placeholder:text-slate-400 text-sm focus-visible:ring-orange-400 flex-1" />
            <Button className="rounded-full bg-orange-600 hover:bg-orange-700 text-white px-7 h-11 text-sm font-semibold shrink-0 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white pt-12 md:pt-16 pb-6 shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-12">
          {/* Brand row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-8 md:mb-0">
            <div className="sm:col-span-2 lg:col-span-4 space-y-4">
              <span className="text-lg font-bold tracking-tight text-slate-900">
                <span className="text-orange-600">JSK</span> Water Tech
              </span>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Complete MEP contractor for Water Treatment, Plumbing, and Fire Fighting systems. Vadodara · Ahmedabad · Pan India.
              </p>
              <div className="flex gap-3">
                {[IconInstagram, IconFacebook, IconLinkedin].map((Icon, i) => (
                  <Link key={i} href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-orange-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <Icon className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:col-span-8 gap-6 md:gap-8 lg:pt-0">
              {[
                { title: 'Company',  links: ['About Us','Our Team','Careers','Contact Us','Privacy Policy'].map(l => ({ label: l, href: '#' })) },
                { title: 'Services', links: ['Plumbing','Fire Fighting','Water Treatment','Waste Water','AMC / O&M'].map(l => ({ label: l, href: '#services' })) },
                { title: 'Products', links: ['Filters','Instruments','Spares & Chemicals','Equipment'].map(l => ({ label: l, href: '#products' })) },
                { title: 'Contact',  links: [{ label: 'Vadodara + Ahmedabad', href: '#' }, { label: '+91 98765 43210', href: 'tel:+919876543210' }, { label: 'info@jskwatertech.com', href: 'mailto:info@jskwatertech.com' }] },
              ].map((col) => (
                <div key={col.title} className="space-y-3">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{col.title}</h5>
                  <ul className="space-y-2">
                    {col.links.map(item => (
                      <li key={item.label}><Link href={item.href} className="text-xs text-slate-400 hover:text-orange-600 transition-colors duration-200 leading-relaxed">{item.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-5 md:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-400">
          <p>© {new Date().getFullYear()} JSK Water Technology. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-600 transition-colors duration-200">Terms</Link>
            <Link href="#" className="hover:text-orange-600 transition-colors duration-200">Privacy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
