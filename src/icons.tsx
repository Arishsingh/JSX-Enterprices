export function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="currentColor" stroke="none" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

export function WaterDropNavIcon() {
  return (
    <svg width="26" height="32" viewBox="0 0 26 32" fill="none">
      <path d="M13 1C13 1 1.5 12.5 1.5 20C1.5 26.35 6.65 31.5 13 31.5C19.35 31.5 24.5 26.35 24.5 20C24.5 12.5 13 1 13 1Z" fill="#4A7C59" fillOpacity="0.92" />
      <path d="M7 20C7 16.5 9.5 13.2 12.5 11.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
      <path d="M10 25C11.5 26.2 14.5 26.2 16 25" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

export function PlaceholderImg({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex items-center justify-center ${className ?? ''}`}>
      <svg className="w-9 h-9 text-slate-300" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path strokeLinecap="round" d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  )
}
