import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'
import { WaterDropNavIcon, IconLinkedIn, IconFacebook, IconInstagram, IconYoutube } from '@/icons'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2028' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-14 pb-8">

        {/* Top block — logo + social + links */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1px_1fr] gap-0">

          {/* Logo column */}
          <div className="pb-8 lg:pb-0 lg:pr-10">
            <div className="flex items-center gap-2.5 mb-4">
              <WaterDropNavIcon />
              <div className="leading-none">
                <div className="text-[19px] font-bold text-white tracking-tight">JSK</div>
                <div className="text-[8.5px] font-semibold tracking-[0.2em] uppercase text-white/45 mt-[3px]">Water Tech</div>
              </div>
            </div>
            <p className="text-[12.5px] text-white/45 leading-relaxed mb-3 max-w-[300px] lg:max-w-[210px]">
              Complete MEP contractor for Water Treatment, Plumbing, and Fire Fighting systems.
            </p>
            <p className="text-[12px] text-white/30 mb-5">Vadodara · Ahmedabad · Pan India</p>
            <div className="flex items-center gap-2.5">
              {[IconLinkedIn, IconFacebook, IconInstagram, IconYoutube].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded-xl border-2 flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(74,124,89,0.15)', borderColor: 'rgba(74,124,89,0.25)', color: '#6aaa7a' }}>
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden lg:block bg-white/8 mx-10" />

          {/* Links grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 pl-0 lg:pl-10 pt-8 lg:pt-0 border-t border-white/8 lg:border-t-0">

            {/* Company */}
            <div>
              <h5 className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-4">Company</h5>
              <ul className="space-y-3">
                {['About Us', 'Our Team', 'Careers', 'Contact Us', 'Privacy Policy'].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-4">Services</h5>
              <ul className="space-y-3">
                {['Plumbing', 'Fire Fighting', 'Water Treatment', 'Waste Water', 'AMC / O&M'].map(item => (
                  <li key={item}>
                    <Link href="#services" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h5 className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-4">Products</h5>
              <ul className="space-y-3">
                {['Filters', 'Instruments', 'Spares & Chemicals', 'Equipment'].map(item => (
                  <li key={item}>
                    <Link href="#products" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — full width on mobile so addresses have room */}
            <div className="col-span-2 lg:col-span-1">
              <h5 className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-4">Contact</h5>
              <ul className="space-y-4">
                {/* Offices side-by-side on mobile, stacked on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 mt-[2px] flex-shrink-0" style={{ color: '#4A7C59' }} />
                    <div>
                      <p className="text-[11.5px] font-medium text-white/55 mb-0.5">Vadodara Office</p>
                      <p className="text-[11px] text-white/30 leading-snug">123, Industrial Area,<br />Vadodara, Gujarat – 390010</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 mt-[2px] flex-shrink-0" style={{ color: '#4A7C59' }} />
                    <div>
                      <p className="text-[11.5px] font-medium text-white/55 mb-0.5">Ahmedabad Office</p>
                      <p className="text-[11px] text-white/30 leading-snug">456, SG Highway,<br />Ahmedabad, Gujarat – 380054</p>
                    </div>
                  </li>
                </div>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4A7C59' }} />
                  <span className="text-[12px] text-white/40">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4A7C59' }} />
                  <Link href="mailto:info@jskwatertech.com" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">info@jskwatertech.com</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-5 border-t border-white/8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-white/30">© 2026 JSK Water Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[11.5px] text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[11.5px] text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
