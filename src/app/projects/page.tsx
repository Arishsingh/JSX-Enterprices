'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Footer from '@/components/footer/Footer'

const tagColors: Record<string, string> = {
  'Water Treatment': '#2A7BA0',
  'Plumbing':        '#4A7C59',
  'Fire Fighting':   '#B94040',
  'AMC / O&M':       '#7B5EA7',
  'Waste Water':     '#6B7280',
  'Water Features':  '#0E7490',
  'Pump Systems':    '#B45309',
}
function tc(tag: string) { return tagColors[tag] ?? '#EA580C' }

const allProjects = [
  {
    num: '01', tag: 'Water Treatment',
    title: 'Advanced WTP for a 500-bed Hospital in Vadodara',
    desc: 'Complete water treatment plant design, supply, and commissioning for a multispeciality hospital.',
    meta: ['Gujarat', '2024'],
    img: '/project-hospital-wtp.png',
  },
  {
    num: '02', tag: 'Plumbing',
    title: 'Complete Plumbing Infrastructure for Luxury Residential Tower',
    desc: 'Water supply, drainage, and sanitary system execution with maintenance support.',
    meta: ['Vadodara', '2023'],
    img: '/project-plumbing-tower.png',
  },
  {
    num: '03', tag: 'Fire Fighting',
    title: 'Advanced Fire Hydrant & Sprinkler System for Industrial Campus',
    desc: 'Reliable fire safety systems designed for industrial and commercial facilities.',
    meta: ['Ahmedabad', '2023'],
    img: '/project-fire-fighting.png',
  },
  {
    num: '04', tag: 'AMC / O&M',
    title: 'Annual Maintenance Contract for STP at IT Park, Ahmedabad',
    desc: 'Routine inspections, testing, upgrades, and plant maintenance services.',
    meta: ['Ahmedabad', '2024'],
    img: '/project-amc-stp.png',
  },
]

const allTags = ['All', ...Array.from(new Set(allProjects.map(p => p.tag)))]

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All' ? allProjects : allProjects.filter(p => p.tag === activeTag)

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
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">Our Work</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-none font-subheading">
            Latest <em style={{ fontStyle: 'italic', color: '#ea580c' }}>Projects</em>
          </h1>
          <p className="mt-4 text-sm text-slate-500 max-w-xl leading-relaxed">
            A showcase of our completed projects across water treatment, plumbing, fire fighting, and facility management.
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          {allTags.map(tag => {
            const isActive = activeTag === tag
            return (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-orange-400 hover:text-orange-600'
                }`}
                style={isActive && tag !== 'All' ? { background: tc(tag), borderColor: tc(tag) } : {}}
              >
                {tag}
              </button>
            )
          })}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {filtered.map((project, i) => (
            <div key={project.num}
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100 shadow-lg group-hover:shadow-2xl transition-shadow duration-500 mb-4">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width:640px) 100vw, 50vw"
                />
              </div>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: tc(project.tag) }}>
                {project.tag}
              </p>
              <h3 className="text-base md:text-lg font-normal leading-snug mb-2 tracking-tight text-slate-900 font-subheading group-hover:text-orange-700 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">{project.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  {project.meta.map((m, j) => (
                    <React.Fragment key={j}>
                      {j > 0 && <span className="text-slate-200">—</span>}
                      <span>{m}</span>
                    </React.Fragment>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400 group-hover:text-orange-500 transition-colors">
                  View details <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 text-sm">No projects found for this category.</div>
        )}

      </main>

      <Footer />

    </div>
  )
}
