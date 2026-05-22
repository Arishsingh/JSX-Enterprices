import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { IconLinkedIn, IconFacebook, IconInstagram, IconYoutube } from '@/icons'
import EnquiryForm from './EnquiryForm'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f6f7] py-12 sm:py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#4A7C59' }}>Get In Touch</p>
              <h2 className="text-[1.6rem] sm:text-[2.1rem] font-bold text-slate-900 tracking-tight mb-6">Contact &amp; Enquiry</h2>
            </div>
            <div className="space-y-4">
              {[
                { icon: <MapPin className="w-4 h-4" />, label: 'Vadodara Office',  val: '123, Industrial Area, Vadodara, Gujarat 390010' },
                { icon: <MapPin className="w-4 h-4" />, label: 'Ahmedabad Office', val: '456, SG Highway, Ahmedabad, Gujarat 380054'     },
                { icon: <Phone  className="w-4 h-4" />, label: 'Phone',            val: '+91 98765 43210'                                  },
                { icon: <Mail   className="w-4 h-4" />, label: 'Email',            val: 'info@jskwatertech.com'                             },
              ].map((d) => (
                <div key={d.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: '#4A7C59' }}>{d.icon}</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{d.label}</p>
                    <p className="text-sm text-slate-700">{d.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
              {[{ Icon: IconLinkedIn }, { Icon: IconFacebook }, { Icon: IconInstagram }, { Icon: IconYoutube }].map(({ Icon }, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-xl border-2 border-white flex items-center justify-center transition-colors shadow-[0_0_0_1px_rgba(74,124,89,0.14),0_2px_1px_0_rgba(0,0,0,0.04)]" style={{ backgroundColor: '#EEF6F0', color: '#4A7C59' }}>
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
