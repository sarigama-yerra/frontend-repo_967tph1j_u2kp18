function Services() {
  const services = [
    {
      title: 'IT Consulting',
      points: [
        'Cloud adoption and modernization',
        'DevOps and platform engineering',
        'Cybersecurity assessments',
        'AI readiness and automation',
      ],
      accent: 'from-emerald-400 to-cyan-400',
    },
    {
      title: 'Import & Export',
      points: [
        'Market entry and trade strategy',
        'Compliance and documentation',
        'Supplier sourcing and auditing',
        'Logistics and customs optimization',
      ],
      accent: 'from-amber-400 to-rose-400',
    },
    {
      title: 'Tea Services',
      points: [
        'Curated premium tea selections',
        'Corporate gifting programs',
        'Tasting events and education',
        'B2B supply for cafes and hotels',
      ],
      accent: 'from-lime-400 to-emerald-400',
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What We Do</h2>
          <p className="mt-3 text-slate-300">Three practices. One trusted partner.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <div className={`h-1 w-16 rounded bg-gradient-to-r ${s.accent}`} />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
