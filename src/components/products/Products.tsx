import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { productsOverview } from '@/data'

export default function Products() {
  return (
    <section id="products" className="bg-[#f5f6f7] py-12 sm:py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-2.5" style={{ color: '#4A7C59' }}>Supply &amp; Equipment</p>
            <h2 className="text-[1.5rem] sm:text-[2.1rem] font-bold text-slate-900 tracking-tight leading-none">Products &amp; Equipment</h2>
          </div>
          <button className="group cursor-pointer flex-shrink-0 flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full border border-slate-200 bg-white text-[12px] sm:text-[13px] font-medium text-slate-700 transition-all shadow-sm whitespace-nowrap">
            <span className="hidden sm:inline">Browse All Products</span>
            <span className="sm:hidden">Browse All</span>
            <span className="relative inline-flex w-3.5 h-3.5 overflow-hidden"><ArrowRight className="w-3.5 h-3.5 absolute transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0" /><ArrowRight className="w-3.5 h-3.5 absolute -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" /></span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productsOverview.map((prod) => (
            <div key={prod.name} className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col">
              {/* Top — natural aspect ratio, zero distortion */}
              <div className="w-full bg-white">
                <Image
                  src={prod.img}
                  alt={prod.name}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              {/* Bottom — text left, button right */}
              <div className="flex items-center justify-between gap-3 px-5 py-4 border-t border-slate-100">
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-1 leading-snug">{prod.name}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{prod.sub}</p>
                </div>
                <button
                  className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:opacity-80 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]"
                  style={{ backgroundColor: '#4A7C59' }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
