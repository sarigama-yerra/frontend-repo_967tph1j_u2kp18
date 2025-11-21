function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
          <h2 className="text-3xl font-bold text-white">About Tasshiro</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Founded with a mission to blend precision, culture, and technology, Tasshiro Corporation acts as a strategic partner for modern organizations. Our teams bring deep expertise across IT transformation, global trade, and specialty tea to craft solutions that are practical and distinctive.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-2xl font-semibold text-white">10+ years</p>
              <p className="text-sm text-slate-300">Industry experience</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-2xl font-semibold text-white">Global</p>
              <p className="text-sm text-slate-300">Cross-border capabilities</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-2xl font-semibold text-white">Boutique</p>
              <p className="text-sm text-slate-300">High-touch delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
