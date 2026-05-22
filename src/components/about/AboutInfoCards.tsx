import { MapPin, Globe, Wrench } from 'lucide-react'

export default function AboutInfoCards() {
  return (
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
            <Globe className="w-3.5 h-3.5" style={{ color: '#4A7C59' }} strokeWidth={1.8} />
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
  )
}
