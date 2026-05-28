'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { serviceKeys } from '@/data'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function EnquiryForm() {
  const [form, setForm] = useState({ email: '', company: '', service: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ email: '', company: '', service: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Send an Enquiry</h3>
      {status === 'success' ? (
        <div className="text-center py-8">
          <p className="text-green-600 font-semibold text-base mb-1">Enquiry sent successfully!</p>
          <p className="text-slate-500 text-sm mb-4">We&apos;ll get back to you shortly.</p>
          <button onClick={() => setStatus('idle')} className="text-sm text-slate-500 underline">Send another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="enquiry-email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Email</label>
              <input id="enquiry-email" name="email" type="email" autoComplete="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
            </div>
            <div>
              <label htmlFor="enquiry-company" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Company</label>
              <input id="enquiry-company" name="company" type="text" autoComplete="organization" placeholder="Company name" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
            </div>
          </div>
          <div>
            <label htmlFor="enquiry-service" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Service Required</label>
            <select id="enquiry-service" name="service" autoComplete="off" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors text-slate-700 appearance-none cursor-pointer">
              <option value="">Select a service</option>
              {serviceKeys.map(k => <option key={k} value={k}>{k}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="enquiry-phone" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Phone</label>
            <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors" />
          </div>
          <div>
            <label htmlFor="enquiry-message" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Message</label>
            <textarea id="enquiry-message" name="message" autoComplete="off" rows={4} placeholder="Describe your requirement..." required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-green-400 transition-colors resize-none" />
          </div>
          {status === 'error' && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}
          <button type="submit" disabled={status === 'loading'} className="cursor-pointer w-full h-11 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.96] disabled:opacity-60 disabled:cursor-not-allowed border border-[#3d6b4a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_1px_0_0_0_rgba(255,255,255,0.3),inset_-1px_0_0_0_rgba(255,255,255,0.3),inset_4px_4px_0_0_rgba(255,255,255,0.06),inset_-4px_-4px_0_0_rgba(255,255,255,0.06),inset_6px_6px_0_0_rgba(255,255,255,0.04),inset_-6px_-6px_0_0_rgba(255,255,255,0.04),inset_8px_8px_0_0_rgba(255,255,255,0.02),inset_-8px_-8px_0_0_rgba(255,255,255,0.02),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.06),0_4px_6px_0_rgba(0,0,0,0.04),0_6px_8px_0_rgba(0,0,0,0.02),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#4A7C59' }}>
            {status === 'loading' ? 'Sending...' : <><span>Send Enquiry</span><ArrowRight className="w-4 h-4" /></>}
          </button>
        </form>
      )}
    </div>
  )
}
