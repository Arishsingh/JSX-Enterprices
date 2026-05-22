import { industryData } from '@/data'

export default function IndustriesServed() {
  return (
    <div>
      <p className="text-[11px] sm:text-[12px] font-semibold text-slate-500 mb-3 sm:mb-4">Industries Served</p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
        {industryData.map((ind) => (
          <div key={ind.label} className="flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 text-slate-600">
              {ind.icon}
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-600 font-medium text-center leading-tight">{ind.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
