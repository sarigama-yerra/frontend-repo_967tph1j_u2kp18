import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
          service: e.target.service.value,
        }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! We will get back to you shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
            <h2 className="text-3xl font-bold text-white">Let’s talk</h2>
            <p className="mt-3 text-slate-300">Tell us about your needs and we’ll arrange a consultation.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Service</label>
                <select name="service" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white">
                  <option>IT Consulting</option>
                  <option>Import & Export</option>
                  <option>Tea Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea name="message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="How can we help?" />
              </div>
              <button className="px-5 py-3 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">Send Message</button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </form>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
            <h3 className="text-xl font-semibold text-white">Offices</h3>
            <p className="mt-2 text-slate-300 text-sm">Operating across APAC, EMEA, and North America.</p>
            <div className="mt-6 space-y-3 text-slate-300 text-sm">
              <p>General: hello@tasshiro.co</p>
              <p>Partnerships: partners@tasshiro.co</p>
              <p>Tea Program: tea@tasshiro.co</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
