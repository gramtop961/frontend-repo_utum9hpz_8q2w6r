import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Trending />
        <CTA />
      </main>
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 py-10 text-white/60 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} HoloNFT. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="/test" className="hover:text-white">System Check</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
