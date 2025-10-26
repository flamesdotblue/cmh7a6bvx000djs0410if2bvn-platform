import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="hidden md:block absolute inset-0">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
            <source src="https://cdn.coverr.co/videos/coverr-sewing-machine-4158/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="md:hidden absolute inset-0">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" alt="Tailoring in action" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      </div>

      <div className="relative h-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24 flex items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="uppercase tracking-[0.25em] text-xs text-white/80">Bespoke Tailoring Studio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl leading-tight font-['Playfair Display',serif] text-white mt-3">
            Crafting Confidence,
            <br className="hidden md:block" /> One Stitch at a Time
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-white/80 max-w-xl mt-5">
            Luxurious, handcrafted garments designed to fit your life—and your silhouette—with flawless precision.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="px-5 py-3 rounded-full bg-white text-neutral-900 hover:translate-y-[-2px] transition">Explore Creations</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-white/70 text-white hover:bg-white/10 backdrop-blur transition">Book a Fitting</a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-widest uppercase">
        Scroll
        <div className="h-6 w-px bg-white/50 mx-auto mt-2 animate-pulse" />
      </div>
    </section>
  )
}
