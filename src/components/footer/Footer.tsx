import Link from 'next/link'
import { MapPin, Mail } from 'lucide-react'
import { WaterDropNavIcon, IconLinkedIn, IconFacebook, IconInstagram, IconYoutube } from '../../icons'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2028' }}>
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1px_1fr] gap-0">

          {/* Logo column */}
          <div className="pr-10 pb-10 lg:pb-0">
            <div className="flex items-center gap-2.5 mb-5">
              <WaterDropNavIcon />
              <div className="leading-none">
                <div className="text-[19px] font-bold text-white tracking-tight">JSK</div>
                <div className="text-[8.5px] font-semibold tracking-[0.2em] uppercase text-white/45 mt-[3px]">Water Tech</div>
              </div>
            </div>
            <p className="text-[12.5px] text-white/45 leading-relaxed mb-4 max-w-[220px]">
              Complete MEP contractor for Water Treatment, Plumbing, and Fire Fighting systems.
            </p>
            <p className="text-[12px] text-white/35 mb-6">Vadodara · Ahmedabad · Pan India</p>
            <div className="flex items-center gap-2.5">
              {[IconLinkedIn, IconFacebook, IconInstagram, IconYoutube].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded-xl border-2 flex items-center justify-center transition-colors shadow-[0_0_0_1px_rgba(74,124,89,0.2),0_2px_1px_0_rgba(0,0,0,0.2)]" style={{ backgroundColor: 'rgba(74,124,89,0.15)', borderColor: 'rgba(74,124,89,0.25)', color: '#6aaa7a' }}>
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-white/8 mx-10" />

          {/* Links columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pl-0 lg:pl-10">
            <div>
              <h5 className="text-[12px] font-semibold text-white mb-5">Company</h5>
              <ul className="space-y-3">
                {['About Us', 'Our Team', 'Careers', 'Contact Us', 'Privacy Policy'].map(item => (
                  <li key={item}><Link href="#" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[12px] font-semibold text-white mb-5">Services</h5>
              <ul className="space-y-3">
                {['Plumbing', 'Fire Fighting', 'Water Treatment', 'Waste Water', 'AMC / O&M'].map(item => (
                  <li key={item}><Link href="#services" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[12px] font-semibold text-white mb-5">Products</h5>
              <ul className="space-y-3">
                {['Filters', 'Instruments', 'Spares & Chemicals', 'Equipment'].map(item => (
                  <li key={item}><Link href="#products" className="text-[12.5px] text-white/40 hover:text-white/80 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[12px] font-semibold text-white mb-5">Contact</h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 mt-[2px] flex-shrink-0" style={{ color: '#4A7C59' }} />
                  <div>
                    <p className="text-[12px] font-medium text-white/60 mb-0.5">Vadodara Office</p>
                    <p className="text-[11.5px] text-white/35 leading-snug">123, Industrial Area,<br />Vadodara, Gujarat - 390010</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 mt-[2px] flex-shrink-0" style={{ color: '#4A7C59' }} />
                  <div>
                    <p className="text-[12px] font-medium text-white/60 mb-0.5">Ahmedabad Office</p>
                    <p className="text-[11.5px] text-white/35 leading-snug">456, SG Highway,<br />Ahmedabad, Gujarat - 380054</p>
                  </div>
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
        <div className="mt-12 pt-6 border-t border-white/8 flex items-center justify-between">
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
