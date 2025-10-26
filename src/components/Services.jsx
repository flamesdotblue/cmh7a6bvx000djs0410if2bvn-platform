import { motion } from 'framer-motion'
import { Scissors } from 'lucide-react'

const services = [
  {
    title: 'Custom Suits',
    desc: 'Full canvas bespoke suits crafted to your posture, preferences, and lifestyle.',
    img: 'https://images.unsplash.com/photo-1542060748-10c28b62716c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Alterations',
    desc: 'Meticulous adjustments from hemming to re-cutting for a perfect silhouette.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Bridal Wear',
    desc: 'Heirloom-quality gowns and ceremonial attire tailored with delicate precision.',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Services() {
  return (
    <div className="px-6 md:px-10 lg:px-16 xl:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6 mb-10"
        >
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 dark:text-neutral-400">Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold font-['Playfair Display',serif]">What We Tailor</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 text-sm">
            <Scissors size={16} /> Book Service
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-neutral-200/70 dark:border-neutral-800 bg-[#f6f1e7] dark:bg-neutral-900"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#contact" className="text-sm underline decoration-amber-400/60 underline-offset-4 hover:text-amber-700 dark:hover:text-amber-400">Book Service</a>
                  <div className="h-9 w-9 rounded-full grid place-items-center bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-amber-600">
                    <Scissors size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
