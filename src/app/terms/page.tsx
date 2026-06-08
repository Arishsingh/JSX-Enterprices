import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/footer/Footer'

const sections = [
  {
    num: '1',
    title: 'Website Usage',
    body: 'This website is intended for informational, promotional, and communication purposes only. Users agree to use the website lawfully and ethically.',
  },
  {
    num: '2',
    title: 'Intellectual Property',
    body: 'All content including text, graphics, logos, images, videos, and website materials are the property of JSK unless otherwise stated. Unauthorized copying, reproduction, or distribution is prohibited.',
  },
  {
    num: '3',
    title: 'User Information',
    body: 'By submitting your details through forms or lead generation campaigns, you confirm that the information provided is accurate and genuine.',
  },
  {
    num: '4',
    title: 'Communication Consent',
    body: 'By using our website or submitting forms, you consent to receive communication via phone calls, WhatsApp, SMS, or email regarding services, updates, and promotional information.',
  },
  {
    num: '5',
    title: 'Third-Party Services',
    body: 'Our website may use third-party services including Meta (Facebook & Instagram), analytics providers, payment gateways, and hosting services. We are not responsible for third-party platform policies or practices.',
  },
  {
    num: '6',
    title: 'Limitation of Liability',
    body: 'JSK shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the website or services.',
  },
  {
    num: '7',
    title: 'External Links',
    body: 'The website may contain links to external websites. We are not responsible for the content, policies, or practices of third-party websites.',
  },
  {
    num: '8',
    title: 'Website Availability',
    body: 'We reserve the right to modify, suspend, or discontinue any part of the website or services at any time without prior notice.',
  },
  {
    num: '9',
    title: 'Privacy Policy',
    body: 'Use of this website is also governed by our Privacy Policy available on the website.',
  },
  {
    num: '10',
    title: 'Prohibited Activities',
    body: 'Users must not misuse the website, attempt unauthorized access, upload malicious content, or engage in activities that may harm the website or its users.',
  },
  {
    num: '11',
    title: 'Changes to Terms',
    body: 'JSK reserves the right to update or modify these Terms & Conditions at any time. Continued use of the website after updates constitutes acceptance of the revised terms.',
  },
  {
    num: '12',
    title: 'Governing Law',
    body: 'These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.',
  },
  {
    num: '13',
    title: 'Contact Information',
    body: 'Website: https://www.jsk.org.in/   Email: info@jsk.org.in',
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/a.png" alt="JSK Enterprises" width={160} height={56} className="h-12 md:h-14 w-auto object-contain" priority />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-6 py-14 md:py-20">

        {/* Title */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight font-subheading mb-2">
            Terms &amp; <em style={{ fontStyle: 'italic', color: '#ea580c' }}>Conditions</em>
          </h1>
          <p className="text-xs text-slate-400 mt-3">Last Updated: May 26, 2026</p>
        </div>

        {/* Intro */}
        <p className="text-sm text-slate-600 leading-relaxed mb-10 pb-10 border-b border-slate-100">
          Welcome to JSK Official Website (<span className="text-orange-600">https://www.jsk.org.in/</span>). By accessing or using this website, you agree to comply with and be bound by the following Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our website or services.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.num} className="flex gap-5">
              <span className="text-[11px] font-bold text-orange-500 tabular-nums pt-[3px] shrink-0 w-5">{s.num}.</span>
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-1.5">{s.title}</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important note */}
        <div className="mt-12 rounded-2xl bg-orange-50 border border-orange-100 px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Important Note</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            These Terms &amp; Conditions are designed to support website transparency, Meta advertising compliance, and user communication standards.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  )
}
