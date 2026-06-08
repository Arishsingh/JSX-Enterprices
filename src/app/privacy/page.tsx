import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react'
import Footer from '@/components/footer/Footer'

export default function PrivacyPage() {
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

      <main className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">

        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight font-subheading">
            Privacy <em style={{ fontStyle: 'italic', color: '#ea580c' }}>Policy</em>
          </h1>
          <p className="mt-4 text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Our privacy policy outlines how JSK Enterprises collects, uses, and protects your personal information.
          </p>
        </div>

        {/* Document card */}
        <div className="border border-slate-100 rounded-2xl shadow-md p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
            <FileText className="w-8 h-8 text-orange-600" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Document</p>
            <h2 className="text-base font-semibold text-slate-900 mb-1">JSK Privacy Policy</h2>
            <p className="text-xs text-slate-400">JSK_Privacy_Policy.docx</p>
          </div>
          <a
            href="/JSK_Privacy_Policy.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white px-6 h-10 text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            Open
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-400 text-center">
          The document will open in a new tab.
        </p>

      </main>

      <Footer />
    </div>
  )
}
