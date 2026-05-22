import { heroStats } from '@/data'

export default function HeroStats() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-8 lg:px-16 pb-4 sm:pb-6">
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
              <div key={i} className={`flex items-center gap-3 px-4 py-4 sm:gap-4 sm:px-7 sm:py-5 ${i % 2 === 0 ? 'border-r border-black/[0.06]' : ''} ${i >= 2 ? 'border-t border-black/[0.06] md:border-t-0' : ''} ${i === 3 ? 'md:border-r-0' : i < 3 ? 'md:border-r border-black/[0.06]' : ''}`}>
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl border-2 border-white flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: bg, boxShadow: `0 0 0 1px ${ring}, 0 2px 1px 0 rgba(0,0,0,0.05)` }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-[20px] sm:text-[27px] font-bold leading-none tracking-tight" style={{ color }}>{value}</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-500 mt-[3px] leading-tight">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
