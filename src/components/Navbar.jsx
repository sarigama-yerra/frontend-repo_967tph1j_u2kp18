import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-emerald-400 to-cyan-400" />
            <span className="font-semibold text-white tracking-tight">Tasshiro Corporation</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('home')} className="text-slate-200 hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="text-slate-200 hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="text-slate-200 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="text-white px-4 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-500 transition-colors">Contact</button>
          </nav>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollTo('home')} className="text-left px-2 py-2 rounded hover:bg-white/5 text-slate-200">Home</button>
              <button onClick={() => scrollTo('services')} className="text-left px-2 py-2 rounded hover:bg-white/5 text-slate-200">Services</button>
              <button onClick={() => scrollTo('about')} className="text-left px-2 py-2 rounded hover:bg-white/5 text-slate-200">About</button>
              <button onClick={() => scrollTo('contact')} className="text-left px-2 py-2 rounded bg-emerald-500/10 text-emerald-200">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
