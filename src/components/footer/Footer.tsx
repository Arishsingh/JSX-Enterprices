import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'
import { IconLinkedIn, IconFacebook, IconInstagram, IconYoutube } from '@/icons'

export default function Footer() {
  return (
    <footer className="bg-white pt-12 md:pt-16 pb-6 shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 md:pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-8 md:mb-0">

          {/* Logo column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <span className="text-lg font-bold tracking-tight text-slate-900">
              <span className="text-orange-600">JSK</span> Enterprises
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Complete MEP contractor for Water Treatment, Plumbing, and Fire Fighting systems. Vadodara · Ahmedabad · Pan India.
            </p>
            <div className="flex gap-3">
              {[IconInstagram, IconFacebook, IconLinkedIn, IconYoutube].map((Icon, i) => (
                <Link key={i} href="#" className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:col-span-8 gap-6 md:gap-8">
            {[
              { title: 'Company', links: [
                { label: 'About Us',       href: '/#about'   },
                { label: 'Our Team',       href: '/#about'   },
                { label: 'Careers',    href: '/#contact' },
                { label: 'Contact Us', href: '/#contact' },
              ]},
              { title: 'Services', links: ['Plumbing','Fire Fighting','Water Treatment','Waste Water','AMC / O&M'].map(l => ({ label: l, href: '/services' })) },
              { title: 'Products', links: ['Filters','Instruments','Spares & Chemicals','Equipment'].map(l => ({ label: l, href: '/products' })) },
              { title: 'Contact',  links: [
                { label: 'Vadodara + Ahmedabad', href: '/#contact' },
                { label: '+91 9316495178',        href: 'tel:+919316495178' },
                { label: 'mgr.jsk@gmail.com',     href: 'mailto:mgr.jsk@gmail.com' },
              ]},
            ].map((col) => (
              <div key={col.title} className="space-y-3">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{col.title}</h5>
                <ul className="space-y-2">
                  {col.links.map(item => (
                    <li key={item.label}>
                      <Link href={item.href} target={item.href.startsWith('/privacy') || item.href.startsWith('/terms') ? '_blank' : undefined} rel={item.href.startsWith('/privacy') || item.href.startsWith('/terms') ? 'noopener noreferrer' : undefined} className="text-xs text-slate-400 hover:text-orange-600 transition-colors duration-200 leading-relaxed">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 md:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-400">
        <p>© {new Date().getFullYear()} JSK Enterprises. By kalaakari Adda · JSK Water Technology. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors duration-200">Terms & Policy</Link>
        </div>
      </div>
    </footer>
  )
}
