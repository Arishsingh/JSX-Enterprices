import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { projectsData } from '@/data'

export default function Projects() {
  return (
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
  )
}
