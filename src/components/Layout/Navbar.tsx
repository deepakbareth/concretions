import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGalleryDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-[#161715]/50 backdrop-blur-[1px]">
      {/* Top micro info bar in matching theme (very thin, minimalist, uppercase) */}
      <div className="border-b border-white/5 py-2.5 px-6 md:px-12 flex justify-between items-center text-[10px] lg:text-[15px] uppercase tracking-[0.25em] text-[#ebdcb9]/60">
        <div className="hidden sm:flex items-center gap-4">
          <span>Orange County, CA</span>
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-6 mx-auto sm:mx-0">
          <a href="tel:714-936-0066" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
            <span>714-936-0066</span>
          </a>
          <a href="mailto:caryezell@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
            <span>caryezell@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main minimal header bar */}
      <nav className="py-6 px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Left Side Links */}
        <div className="hidden lg:flex items-center gap-8 w-1/3 text-[11px] lg:text-[15px] font-medium uppercase tracking-[0.25em] text-white/80">
          <a href="#about" className="hover:text-white transition-colors underline-animation">
            About Us
          </a>
          <a href="#services" className="hover:text-white transition-colors underline-animation">
            Services
          </a>
        </div>

        {/* Center Logo - Styled exactly like Emily Hotel */}
        <div className="flex justify-start sm:justify-center items-center flex-1 lg:flex-none lg:w-1/3">
          <a href="#home" className="flex flex-col items-start sm:items-center">
            <span className="font-serif text-2xl lg:text-[28px] tracking-[0.3em] font-light text-white hover:text-[#ebdcb9] transition-colors uppercase">
              CONCRETIONS
            </span>
            <span className="text-[8px] lg:text-[10px] font-semibold tracking-[0.4em] text-[#ebdcb9]/50 uppercase mt-1">
              ARCHITECTURAL SURFACES
            </span>
          </a>
        </div>

        {/* Right Side Links */}
        <div className="hidden lg:flex items-center justify-end gap-8 w-1/3 text-[11px] lg:text-[15px] font-medium uppercase tracking-[0.25em]" ref={dropdownRef}>
          {/* Gallery Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
              className="flex cursor-pointer items-center gap-1 hover:text-white text-[#ebdcb9] transition-colors"
            >
              <span>Gallery</span>
              <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4" />
            </button>

            {isGalleryDropdownOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-[#161715] border border-white/5 shadow-2xl py-2 z-50 text-[10px] lg:text-[11px] font-semibold uppercase tracking-widest text-[#ebdcb9]">
                <a
                  href="#concrete-gallery"
                  onClick={() => setIsGalleryDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-white/5 hover:text-white transition-colors"
                >
                  Concrete Gallery
                </a>
                <a
                  href="#tiles-gallery"
                  onClick={() => setIsGalleryDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-white/5 hover:text-white transition-colors"
                >
                  Tiles Gallery
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="border border-[#ebdcb9]/30 hover:border-[#ebdcb9] text-[#ebdcb9] hover:text-white px-6 py-2.5 transition-colors"
          >
            Inquire
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-[#ebdcb9] transition-colors ml-auto"
          aria-label="Toggle Navigation Drawer"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile menu layout */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[110px] bg-[#161715] border-t border-white/5 p-8 flex flex-col space-y-6 z-40 animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-[#ebdcb9]">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
              Services
            </a>

            <div className="pt-4 border-t border-white/5 space-y-4">
              <span className="text-[10px] text-white/40 block">Galleries</span>
              <a
                href="#concrete-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 hover:text-white transition-colors"
              >
                — Concrete Gallery
              </a>
              <a
                href="#tiles-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 hover:text-white transition-colors"
              >
                — Tiles Gallery
              </a>
            </div>

            <div className="pt-6 border-t border-white/5">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-block text-center border border-[#ebdcb9]/40 py-3 hover:border-white hover:text-white transition-colors"
              >
                Inquire
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}