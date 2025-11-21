function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-[32rem] h-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Smart Consulting for a Connected World
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Tasshiro Corporation is a multi-domain consulting partner specializing in IT strategy, Import & Export operations, and premium Tea services. We turn complexity into clarity and growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="px-5 py-3 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">Explore Services</a>
              <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">Get in Touch</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <div className="h-full w-full rounded-2xl bg-slate-950/40 grid grid-cols-2">
                <div className="p-6 border-r border-white/5">
                  <h3 className="text-white font-semibold">IT Consulting</h3>
                  <p className="text-slate-300 text-sm mt-2">Cloud, automation, cybersecurity, and modern software delivery.</p>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold">Import & Export</h3>
                  <p className="text-slate-300 text-sm mt-2">Trade strategy, compliance, sourcing, and logistics optimization.</p>
                </div>
                <div className="p-6 border-t border-white/5 border-r">
                  <h3 className="text-white font-semibold">Tea Services</h3>
                  <p className="text-slate-300 text-sm mt-2">Curated teas, corporate gifting, and tasting experiences.</p>
                </div>
                <div className="p-6 border-t">
                  <h3 className="text-white font-semibold">Why Tasshiro?</h3>
                  <p className="text-slate-300 text-sm mt-2">Cross-industry insights and hands-on execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
