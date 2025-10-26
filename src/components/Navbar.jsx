import { useEffect, useState } from 'react'
import { Moon, Sun, Scissors } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/70 dark:border-neutral-800' : 'bg-transparent'}`}>
      <nav className="px-6 md:px-10 lg:px-16 xl:px-24 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-lg font-medium">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 text-white flex items-center justify-center shadow-sm">
            <Scissors size={18} />
          </div>
          <span className="font-['Playfair Display',serif] tracking-wide">Elegant Stitch</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-amber-700 dark:hover:text-amber-400 transition">Services</a>
          <a href="#portfolio" className="hover:text-amber-700 dark:hover:text-amber-400 transition">Portfolio</a>
          <a href="#testimonials" className="hover:text-amber-700 dark:hover:text-amber-400 transition">Testimonials</a>
          <a href="#contact" className="hover:text-amber-700 dark:hover:text-amber-400 transition">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="h-9 w-9 rounded-full grid place-items-center border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 hover:scale-105 transition"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 text-sm hover:translate-y-[-1px] transition">
            Book a Fitting
          </a>
        </div>
      </nav>
    </header>
  )
}
