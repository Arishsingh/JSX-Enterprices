'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { serviceKeys } from '../../data'

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: '', company: '', service: '', phone: '', message: '' })

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Send an Enquiry</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Name</label>
            <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Company</label>
            <input type="text" placeholder="Company name" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
          </div>
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Service Required</label>
          <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors text-slate-700 appearance-none cursor-pointer">
            <option value="">Select a service</option>
            {serviceKeys.map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Phone</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Message</label>
          <textarea rows={4} placeholder="Describe your requirement..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors resize-none" />
        </div>
        <button className="cursor-pointer w-full h-11 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.96] border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
          Send Enquiry <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
