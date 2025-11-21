import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />

        <footer className="py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Tasshiro Corporation. All rights reserved.</p>
              <div className="text-slate-400 text-sm flex items-center gap-4">
                <a href="/test" className="hover:text-white">System Test</a>
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
