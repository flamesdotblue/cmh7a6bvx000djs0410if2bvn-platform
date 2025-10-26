import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: 'Custom Suits', date: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!/^[0-9+\-() ]{7,}$/.test(form.phone)) e.phone = 'Valid phone is required'
    if (!form.message.trim()) e.message = 'Please share a few details'
    if (!form.date) e.date = 'Select a preferred date'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const subject = encodeURIComponent('New Fitting Request — Elegant Stitch')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:hello@elegantstitch.studio?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <section id="contact" className="px-6 md:px-10 lg:px-16 xl:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 dark:text-neutral-400">Contact</p>
        <h2 className="text-3xl md:text-4xl font-semibold font-['Playfair Display',serif]">Book A Private Fitting</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Precision is our passion, fabric is our canvas. Share your vision below.</p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full rounded-lg border bg-white/70 dark:bg-neutral-900/60 px-4 py-3 outline-none transition ${errors.name ? 'border-red-400 dark:border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full rounded-lg border bg-white/70 dark:bg-neutral-900/60 px-4 py-3 outline-none transition ${errors.email ? 'border-red-400 dark:border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`w-full rounded-lg border bg-white/70 dark:bg-neutral-900/60 px-4 py-3 outline-none transition ${errors.phone ? 'border-red-400 dark:border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Service Type</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-4 py-3"
            >
              <option>Custom Suits</option>
              <option>Alterations</option>
              <option>Bridal Wear</option>
              <option>Formalwear</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Preferred Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className={`w-full rounded-lg border bg-white/70 dark:bg-neutral-900/60 px-4 py-3 outline-none transition ${errors.date ? 'border-red-400 dark:border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
            />
            {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full rounded-lg border bg-white/70 dark:bg-neutral-900/60 px-4 py-3 outline-none transition ${errors.message ? 'border-red-400 dark:border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
              placeholder="Tell us about your occasion, style preferences, or fit notes"
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent('Hello Elegant Stitch, I would like to book a fitting.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-lg border border-emerald-300 text-emerald-700 dark:text-emerald-400 bg-emerald-50/70 dark:bg-emerald-900/20 hover:translate-y-[-1px] transition"
            >
              Message on WhatsApp
            </a>
            <button type="submit" className="ml-auto px-5 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:translate-y-[-1px] transition">
              Send Request
            </button>
          </div>
          {sent && (
            <p className="md:col-span-2 text-sm text-emerald-600 dark:text-emerald-400">Thanks! Your email client should open with your request. We look forward to tailoring for you.</p>
          )}
        </form>
      </motion.div>
    </section>
  )
}
