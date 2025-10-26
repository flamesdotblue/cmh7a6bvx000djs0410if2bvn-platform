import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import { motion } from 'framer-motion'
import { MessageCircle, Calendar } from 'lucide-react'

const portfolioItems = [
  { id: 1, category: 'Men', title: 'Bespoke Navy Suit', src: 'https://images.unsplash.com/photo-1517681851217-9b88f74b4b2d?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, category: 'Women', title: 'Tailored Linen Set', src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, category: 'Bridal', title: 'Classic Bridal Gown', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, category: 'Formal', title: 'Black Tie Tuxedo', src: 'https://images.unsplash.com/photo-1542060748-10c28b62716c?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, category: 'Women', title: 'Evening Silk Dress', src: 'https://images.unsplash.com/photo-1512646605205-78422bfa9d36?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, category: 'Men', title: 'Summer Seersucker', src: 'https://images.unsplash.com/photo-1506630448388-8ad30711d49b?q=80&w=1200&auto=format&fit=crop' },
]

const testimonials = [
  { id: 1, name: 'Amelia Hart', text: 'Impeccable craftsmanship. My bridal gown fit like a dream.', rating: 5 },
  { id: 2, name: 'Lucas Reed', text: 'The suit elevated my presence at every meeting. Worth every stitch.', rating: 5 },
  { id: 3, name: 'Priya Kapoor', text: 'Attention to detail is unmatched. Truly bespoke experience.', rating: 5 },
]

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <div className="min-h-screen bg-[#faf7f2] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />

        {/* Services */}
        <section id="services" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/0 dark:to-white/0" />
          <Services />
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="px-6 md:px-10 lg:px-16 xl:px-24 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 dark:text-neutral-400">Portfolio</p>
                <h2 className="text-3xl md:text-4xl font-semibold font-['Playfair Display',serif]">Signature Creations</h2>
              </div>
              <div className="hidden md:flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                <span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">Men</span>
                <span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">Women</span>
                <span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">Bridal</span>
                <span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">Formal</span>
              </div>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><!-- Masonry-like layout -->
              {portfolioItems.map((item) => (
                <motion.figure
                  key={item.id}
                  whileHover={{ scale: 1.01 }}
                  className="mb-4 break-inside-avoid rounded-xl overflow-hidden group relative shadow-sm shadow-black/5 dark:shadow-white/5"
                >
                  <img src={item.src} alt={item.title} className="w-full h-auto object-cover group-hover:brightness-110 transition" />
                  <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <div>
                      <p className="text-white/90 text-xs uppercase tracking-widest">{item.category}</p>
                      <p className="text-white text-lg font-medium">{item.title}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="px-6 md:px-10 lg:px-16 xl:px-24 py-20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 dark:text-neutral-400">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-semibold font-['Playfair Display',serif] mb-8">Words From Our Clients</h2>

            <div className="relative overflow-hidden">
              <div className="flex gap-6 animate-[scrollX_20s_linear_infinite] hover:[animation-play-state:paused]">
                {testimonials.concat(testimonials).map((t, idx) => (
                  <div key={`${t.id}-${idx}`} className="min-w-[300px] max-w-md p-6 rounded-2xl bg-[#f6f1e7] dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-800">
                    <div className="mb-3 flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-amber-500">★</span>
                      ))}
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed">“{t.text}”</p>
                    <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">— {t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-6 md:px-10 lg:px-16 xl:px-24 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Playfair Display',serif] text-xl">Elegant Stitch</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Crafting confidence, one stitch at a time.</p>
          </div>
          <div className="h-px w-full md:w-auto md:h-6 md:w-px bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#c8b27f_4px,#c8b27f_8px)] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#8b7a44_4px,#8b7a44_8px)]" />
          <div className="text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Elegant Stitch. All rights reserved.</div>
        </div>
      </footer>

      {/* Floating Actions */}
      <a
        href="https://wa.me/1234567890?text=Hello%20Elegant%20Stitch%2C%20I%27d%20like%20to%20book%20a%20fitting."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:translate-y-[-2px] transition"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
      <a href="#contact" className="fixed bottom-24 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-black/90 dark:bg-white/90 text-white dark:text-black px-5 py-3 shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition">
        <Calendar size={18} /> Book Appointment
      </a>

      {/* Keyframes */}
      <style>{`
        @keyframes scrollX { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
