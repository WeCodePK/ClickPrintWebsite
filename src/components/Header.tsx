import { useState, type MouseEvent } from 'react'
import logo from '../assets/WhiteBgLogoHighQuality.png'

interface HeaderProps {
  isHome: boolean
  onHome: () => void
  onRegister: () => void
}

export default function Header({ isHome, onHome, onRegister }: HeaderProps) {
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
    <header className="sticky top-0 z-50 bg-white backdrop-blur-[14px] border-b border-[rgba(228,233,242,.7)]">
      <div className="cp-in h-16 sm:h-18.5 flex items-center justify-between gap-3 sm:gap-5">
        <a onClick={onHome} className="flex items-center gap-2.75 cursor-pointer">
          <img src={logo} alt="ClickPrint" className="h-12 sm:h-16 w-auto block" />
        </a>

        {/* Desktop nav */}
        <nav className="cp-nav hidden md:flex items-center gap-7.5 text-[14.5px] font-semibold text-muted">
          <a href="#how" onClick={handleNav('how')}>How it works</a>
          <a href="#why" onClick={handleNav('why')}>Why partner</a>
          <a href="#download" onClick={handleNav('download')}>Get the app</a>
          <a href="#faq" onClick={handleNav('faq')}>FAQ</a>
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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <nav className="cp-nav flex flex-col gap-1 px-6 pb-5 pt-2">
          <a href="#how" onClick={handleNav('how')} className="py-3 text-[15px] font-semibold text-body border-b border-line/50">How it works</a>
          <a href="#why" onClick={handleNav('why')} className="py-3 text-[15px] font-semibold text-body border-b border-line/50">Why partner</a>
          <a href="#download" onClick={handleNav('download')} className="py-3 text-[15px] font-semibold text-body border-b border-line/50">Get the app</a>
          <a href="#faq" onClick={handleNav('faq')} className="py-3 text-[15px] font-semibold text-body">FAQ</a>
          <button
            onClick={() => { onRegister(); setMenuOpen(false); }}
            className="sm:hidden cp-btn-primary mt-2 border-none cursor-pointer font-manrope font-bold text-[15px] text-white bg-coral px-5.5 py-3.5 rounded-xl shadow-[0_8px_22px_rgba(255,139,123,.32)]"
          >
            Register your shop
          </button>
        </nav>
      </div>
    </header>
  )
}
