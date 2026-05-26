'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const servicesData = {
  Plumbing: {
    color: '#4A7C59', sub: 'Supply · Drainage · Sanitary',
    items: [
      { title: 'Water Supply Systems',         desc: 'Complete plumbing solutions for residential, commercial, and industrial water distribution.', img: '/01-Water%20Supply%20Systems.webp' },
      { title: 'Drainage & Sanitary Networks', desc: 'Efficient drainage and sanitary piping systems designed for long-term performance.',           img: '/02-Drainage%20%26%20Sanitary%20Networks.webp' },
      { title: 'Hydro Pneumatic Systems',      desc: 'Advanced pressure boosting systems for smooth and automated water flow management.',           img: '/03-Hydro%20Pneumatic%20Systems.webp' },
      { title: 'Plumbing Maintenance',         desc: 'Professional repair, inspection, and maintenance services for plumbing infrastructure.',       img: '/04-Plumbing%20Maintenance.webp' },
    ],
  },
  'Fire Fighting': {
    color: '#B94040', sub: 'Hydrant · Sprinkler · Alarms',
    items: [
      { title: 'Fire Hydrant Systems',          desc: 'Reliable fire hydrant networks designed for emergency response and safety compliance.',  img: '/05-Fire%20Hydrant%20Systems.webp' },
      { title: 'Automatic Sprinkler Systems',   desc: 'Advanced sprinkler systems providing rapid fire suppression and protection.',            img: '/06-Automatic%20Sprinkler%20Systems.webp' },
      { title: 'Fire Alarm & Safety Equipment', desc: 'Integrated fire alarms and extinguishing equipment for complete building safety.',       img: '/07-Fire%20Alarm%20%26%20Safety%20Equipment.webp' },
      { title: 'Fire Pumping Solutions',        desc: 'High-performance fire pumps ensuring continuous emergency water supply.',                img: '/08-Fire%20Pumping%20Solutions.webp' },
    ],
  },
  'Water Treatment': {
    color: '#2A7BA0', sub: 'WTP · RO · Softener · DM',
    items: [
      { title: 'Water Treatment Plants',  desc: 'Advanced WTP design and installation for safe and efficient water purification.',       img: '/09-Water%20Treatment%20Plants.webp' },
      { title: 'Reverse Osmosis Systems', desc: 'High-performance RO systems engineered for clean and purified water supply.',          img: '/10-Reverse%20Osmosis%20Systems.webp' },
      { title: 'Water Softening Plants',  desc: 'Efficient softening systems to remove hardness and improve water quality.',            img: '/11-Water%20Softening%20Plants.webp' },
      { title: 'DM Plant Solutions',      desc: 'Deionization systems for ultra-pure water in industrial and laboratory applications.', img: '/12-DM%20Plant%20Solutions.webp' },
    ],
  },
  'Waste Water': {
    color: '#6B7280', sub: 'STP · ETP · MBR · MBBR · Grey Water',
    items: [
      { title: 'Sewage Treatment Plants',   desc: 'Efficient STP systems managing wastewater with modern treatment technologies.',      img: '/13-Sewage%20Treatment%20Plants.webp' },
      { title: 'Effluent Treatment Plants', desc: 'Industrial ETP solutions designed to treat and recycle process wastewater safely.',  img: '/14-Effluent%20Treatment%20Plants.webp' },
      { title: 'MBR & MBBR Systems',        desc: 'Advanced bio-reactor technology for superior biological treatment performance.',     img: '/15-MBR%20%26%20MBBR%20Systems.webp' },
      { title: 'Grey Water Recycling',      desc: 'Sustainable grey water treatment and reuse systems for buildings and campuses.',     img: '/16-Grey%20Water%20Recycling.webp' },
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
      { title: 'Swimming Pool Systems',      desc: 'Complete pool filtration, circulation, and chemical dosing systems.',              img: '/product-filters.png' },
      { title: 'Lake Revival Projects',      desc: 'Eco-friendly lake restoration and water body management solutions.',               img: '/product-equipment.png' },
      { title: 'Rainwater Harvesting',       desc: 'RWH systems for sustainable water conservation and groundwater recharge.',         img: '/product-spares-chemicals.png' },
      { title: 'Fountain & Feature Systems', desc: 'Decorative water feature installation and maintenance for landscaping.',           img: '/product-instruments.png' },
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
}

type ServiceKey = keyof typeof servicesData

export default function ServicesPage() {
  const [active, setActive] = useState<ServiceKey>('Plumbing')

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/a.png" alt="JSX Enterprises" width={160} height={56} className="h-12 md:h-14 w-auto object-contain" priority />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">

        {/* Page heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">What We Do</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-none font-subheading">
            Our <em style={{ fontStyle: 'italic', color: '#ea580c' }}>Services</em>
          </h1>
          <p className="mt-4 text-sm text-slate-500 max-w-xl leading-relaxed">
            End-to-end MEP solutions across water treatment, plumbing, fire fighting, and more — from concept to commissioning.
          </p>
        </div>

        {/* Category tabs */}
        <div className="border-b border-slate-100 mb-10 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div className="flex gap-0 whitespace-nowrap min-w-max">
            {(Object.keys(servicesData) as ServiceKey[]).map((key) => {
              const isActive = active === key
              return (
                <button key={key} onClick={() => setActive(key)}
                  className={`relative px-4 md:px-6 pb-3 pt-1 text-xs md:text-sm font-medium border-none bg-transparent transition-colors duration-200 outline-none cursor-pointer ${isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-700'}`}>
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

        {/* Cards grid */}
        <div key={active} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {servicesData[active].items.map((item) => (
            <div key={item.title} className="group cursor-pointer space-y-3">
              <div className="aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden relative bg-white shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* All categories overview */}
        <div className="mt-20 md:mt-28">
          <h2 className="text-xl md:text-2xl font-normal tracking-tight mb-8 font-subheading">
            All <em style={{ fontStyle: 'italic', color: '#ea580c' }}>Categories</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {(Object.keys(servicesData) as ServiceKey[]).map((key) => (
              <button key={key} onClick={() => { setActive(key); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="text-left p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white group cursor-pointer">
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: servicesData[key].color }} />
                <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{key}</h3>
                <p className="text-[10px] text-slate-400 mb-3">{servicesData[key].sub}</p>
                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 group-hover:text-orange-500 transition-colors">
                  View services <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-100 py-8 text-center">
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} JSK Enterprises. All rights reserved.</p>
      </footer>

    </div>
  )
}
