import { useState, type MouseEvent } from 'react'
import logo from '../assets/WhiteBgLogoOptimized.webp'

interface HeaderProps {
  currentRoute?: string
  isHome: boolean
  onHome: () => void
  onRegister: () => void
  onContact: () => void
}

export default function Header({ currentRoute, isHome, onHome, onRegister, onContact }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (targetId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) {
      e.preventDefault()
      onHome()
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Social Header / Top Bar */}
      <div className="bg-navy border-b border-white/10 text-white/80 select-none">
        <div className="cp-in h-8.5 sm:h-9.5 flex items-center justify-between gap-3 text-[11.5px] sm:text-[12.5px]">
          {/* Contact & Hours Info */}
          <div className="flex items-center gap-3 sm:gap-4.5 min-w-0">
            {/* Phone */}
            <a
              href="tel:+923235400291"
              className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors flex-none"
              title="Call Us"
            >
              <svg className="w-3 h-3 text-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              <span className="font-semibold tracking-tight">+92 323 5400291</span>
            </a>

            <span className="hidden min-[480px]:inline-block text-white/20">|</span>

            {/* Gmail */}
            <a
              href="mailto:clickprintsupport@gmail.com"
              className="hidden min-[480px]:flex items-center gap-1.5 text-white/85 hover:text-white transition-colors truncate"
              title="Email Support"
            >
              <svg className="w-3.5 h-3.5 text-blue flex-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="font-medium truncate">clickprintsupport@gmail.com</span>
            </a>

            <span className="hidden lg:inline-block text-white/20">|</span>

            {/* Timings */}
            <div className="hidden lg:flex items-center gap-1.5 text-white/70">
              <svg className="w-3.5 h-3.5 text-coral flex-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Mon – Sat: 9:00 AM – 10:00 PM PKT</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-none">
            <span className="hidden md:inline-block text-[11px] font-semibold text-white/50 mr-0.5">
              Follow Us
            </span>
            {/* WhatsApp */}
            <a
              href="https://wa.me/923235400291"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/75 hover:text-green transition-all"
              title="Chat on WhatsApp"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 2C6.492 2 2 6.492 2 12.031c0 1.808.483 3.518 1.326 5.006L2 22l5.127-1.309a10.01 10.01 0 004.904 1.28c5.539 0 10.031-4.492 10.031-10.031S17.57 2 12.031 2zm5.836 14.199c-.244.688-1.229 1.32-1.74 1.378-.475.053-1.077.076-3.486-.92-2.79-1.155-4.57-4.004-4.708-4.188-.138-.184-1.127-1.503-1.127-2.866 0-1.363.714-2.036.969-2.316.244-.268.535-.335.714-.335.184 0 .367.002.527.01.169.008.396-.064.619.472.229.55.78 1.905.849 2.043.069.138.115.3.023.483-.092.183-.138.298-.275.459-.138.161-.29.359-.414.482-.138.138-.282.288-.121.564.161.276.714 1.177 1.533 1.906 1.054.938 1.944 1.229 2.22 1.366.276.138.437.115.6-.069.161-.184.69-.803.874-1.079.184-.276.368-.23.62-.138.252.092 1.603.757 1.879.895.276.138.46.207.528.322.069.115.069.665-.175 1.353z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/wecodepk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/75 hover:text-blue transition-all"
              title="LinkedIn"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/wecode_pk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/75 hover:text-white transition-all text-[11px] font-bold"
              title="X (Twitter)"
            >
              𝕏
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/wecodepk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/75 hover:text-blue transition-all"
              title="Facebook"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white backdrop-blur-[14px] border-b border-[rgba(228,233,242,.7)]">
        <div className="cp-in h-16 sm:h-18.5 flex items-center justify-between gap-3 sm:gap-5">
        <a onClick={onHome} className="flex items-center gap-2.75 cursor-pointer">
          <img src={logo} alt="ClickPrint" className="h-12 sm:h-16 w-auto block" fetchPriority="high" decoding="async" />
        </a>

        {/* Desktop nav */}
        <nav className="cp-nav hidden md:flex items-center gap-7.5 text-[14.5px] font-semibold text-muted">
          <a href="#how" onClick={handleNav('how')}>How it works</a>
          <a href="#why" onClick={handleNav('why')}>Why partner</a>
          <a href="#download" onClick={handleNav('download')}>Get the app</a>
          <a
            onClick={(e) => { e.preventDefault(); onContact(); }}
            className={`cursor-pointer transition-colors ${currentRoute === 'contact' ? 'text-ink font-bold' : 'hover:text-ink'}`}
          >
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onRegister}
            className="cp-btn-primary hidden sm:inline-flex border-none cursor-pointer font-manrope font-bold text-[14.5px] text-white bg-coral px-5.5 py-3 rounded-xl whitespace-nowrap shadow-[0_8px_22px_rgba(255,139,123,.32)]"
          >
            Register your shop
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.25 p-2 cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5.5 h-[2.5px] rounded-full bg-ink transition-all duration-300 ${menuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`} />
            <span className={`block w-5.5 h-[2.5px] rounded-full bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5.5 h-[2.5px] rounded-full bg-ink transition-all duration-300 ${menuOpen ? 'translate-y-[-7.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="cp-nav flex flex-col gap-1 px-6 pb-5 pt-2">
          <a href="#how" onClick={handleNav('how')} className="py-3 text-[15px] font-semibold text-body border-b border-line/50">How it works</a>
          <a href="#why" onClick={handleNav('why')} className="py-3 text-[15px] font-semibold text-body border-b border-line/50">Why partner</a>
          <a href="#download" onClick={handleNav('download')} className="py-3 text-[15px] font-semibold text-body border-b border-line/50">Get the app</a>
          <a href="#faq" onClick={handleNav('faq')} className="py-3 text-[15px] font-semibold text-body border-b border-line/50">FAQ</a>
          <a
            onClick={(e) => { e.preventDefault(); onContact(); setMenuOpen(false); }}
            className={`py-3 text-[15px] font-semibold cursor-pointer border-b border-line/50 ${currentRoute === 'contact' ? 'text-ink font-bold' : 'text-body'}`}
          >
            Contact Us
          </a>
          <button
            onClick={() => { onRegister(); setMenuOpen(false); }}
            className="sm:hidden cp-btn-primary mt-2 border-none cursor-pointer font-manrope font-bold text-[15px] text-white bg-coral px-5.5 py-3.5 rounded-xl shadow-[0_8px_22px_rgba(255,139,123,.32)]"
          >
            Register your shop
          </button>
        </nav>
      </div>
      </div>
    </header>
  )
}
