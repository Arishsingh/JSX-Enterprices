'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Footer from '@/components/footer/Footer'

const productsData = {
  Filters: {
    sub: 'Vessel · Bag · Disc · Pool',
    color: '#2A7BA0',
    description: 'High-performance filtration solutions for water treatment and industrial applications.',
    items: [
      { name: 'Sand Media Filters',    desc: 'Removes suspended solids and turbidity from water using graded sand media.' },
      { name: 'Bag Filters',           desc: 'Cost-effective filtration for removing particles and sediments from process water.' },
      { name: 'Disc Filters',          desc: 'Compact, reusable disc-based filters ideal for irrigation and industrial use.' },
      { name: 'Pool Sand Filters',     desc: 'Dedicated swimming pool filters ensuring clean, crystal-clear water.' },
      { name: 'Carbon Filters',        desc: 'Activated carbon filters for removing chlorine, odour, and organic contaminants.' },
      { name: 'Multimedia Filters',    desc: 'Multi-layer filtration beds for superior removal of fine particles and impurities.' },
    ],
  },
  Instruments: {
    sub: 'Flow meters · pH · TDS etc.',
    color: '#7B5EA7',
    description: 'Precision instrumentation for monitoring and controlling water quality parameters.',
    items: [
      { name: 'Flow Meters',              desc: 'Accurate flow measurement instruments for water and process fluids.' },
      { name: 'pH Meters & Controllers',  desc: 'Online and portable pH measurement and dosing control systems.' },
      { name: 'TDS Meters',               desc: 'Total dissolved solids monitors for water quality assessment.' },
      { name: 'DO Meters',                desc: 'Dissolved oxygen sensors for aeration and biological treatment processes.' },
      { name: 'Pressure Gauges',          desc: 'Industrial-grade pressure gauges for pipelines and pressure vessels.' },
      { name: 'Level Sensors',            desc: 'Ultrasonic and float-based level sensors for tanks and reservoirs.' },
    ],
  },
  'Spares & Chemicals': {
    sub: 'RO membranes · Bio culture',
    color: '#B45309',
    description: 'Genuine spare parts and specialty chemicals to keep your water treatment systems running optimally.',
    items: [
      { name: 'RO Membranes',              desc: 'High-rejection reverse osmosis membranes for pure water production.' },
      { name: 'Bio Culture',               desc: 'Microbial cultures for accelerating biological treatment in STP/ETP systems.' },
      { name: 'Antiscalant Chemicals',     desc: 'Scale inhibitors that protect RO membranes and extend system lifespan.' },
      { name: 'Coagulants & Flocculants',  desc: 'Water treatment chemicals for effective suspended solids removal.' },
      { name: 'Chlorine Dosing',           desc: 'Chlorine-based disinfection chemicals for potable and industrial water.' },
      { name: 'UV Lamps',                  desc: 'Replacement UV lamps for ultraviolet disinfection systems.' },
    ],
  },
  Equipment: {
    sub: 'Pumps · DAF · UV · Ozone',
    color: '#4A7C59',
    description: 'Industrial-grade equipment for water treatment, transfer, and disinfection applications.',
    items: [
      { name: 'Centrifugal Pumps',   desc: 'Reliable pumps for water transfer, circulation, and boosting applications.' },
      { name: 'DAF Systems',         desc: 'Dissolved Air Flotation units for effective removal of fats, oils, and grease.' },
      { name: 'UV Sterilisers',      desc: 'Ultra-violet disinfection systems for bacteria and virus elimination.' },
      { name: 'Ozone Generators',    desc: 'Ozone-based disinfection for drinking water and wastewater treatment.' },
      { name: 'Dosing Pumps',        desc: 'Precision chemical dosing pumps for accurate treatment chemical addition.' },
      { name: 'Blowers & Aerators',  desc: 'Aeration equipment for biological treatment and dissolved oxygen enhancement.' },
    ],
  },
}

type ProductKey = keyof typeof productsData

export default function ProductsPage() {
  const [active, setActive] = useState<ProductKey>('Filters')

  return (
    <div className="min-h-screen bg-white">

      {/* Top bar */}
      <div className="border-b border-slate-100 px-4 sm:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[15px] font-semibold text-slate-800 tracking-tight">JSK</span>
          <span className="text-slate-200 text-lg font-thin">|</span>
          <span className="text-[13px] text-slate-400">Products & Equipment</span>
        </div>
        <Link href="/" className="flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-slate-700 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24">

        {/* Back button */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-slate-400 hover:text-slate-700 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Page header */}
        <div className="mb-14">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-600 mb-3">What We Supply</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-none font-subheading mb-4">
            Products &amp; <em style={{ fontStyle: 'italic', color: '#ea580c' }}>Equipment</em>
          </h1>
          <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
            Quality-assured products and spares for water treatment, plumbing, and fire fighting systems — sourced from trusted manufacturers.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {(Object.keys(productsData) as ProductKey[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-[12px] font-medium border transition-all duration-200 cursor-pointer ${
                active === cat
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active category detail */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: productsData[active].color }} />
              <h2 className="text-xl md:text-2xl font-normal tracking-tight font-subheading text-slate-900">{active}</h2>
            </div>
            <p className="text-xs text-slate-400 mb-2 ml-4">{productsData[active].sub}</p>
            <p className="text-sm text-slate-500 ml-4 max-w-lg">{productsData[active].description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productsData[active].items.map((item) => (
              <div key={item.name} className="group rounded-xl border border-slate-100 bg-white p-5 hover:border-slate-300 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: productsData[active].color }} />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{item.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All categories overview */}
        <div>
          <h2 className="text-lg font-normal tracking-tight font-subheading text-slate-900 mb-6">
            All <em style={{ fontStyle: 'italic', color: '#ea580c' }}>Categories</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(productsData) as ProductKey[]).map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="group text-left rounded-xl border border-slate-100 bg-white p-5 hover:border-slate-300 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full block mb-3" style={{ backgroundColor: productsData[cat].color }} />
                <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{cat}</h3>
                <p className="text-[10px] text-slate-400 mb-3">{productsData[cat].sub}</p>
                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 group-hover:text-orange-500 transition-colors">
                  View products <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
