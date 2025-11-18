import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto container px-6 md:px-12">
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-400" />
            <span className="text-white font-semibold">HoloNFT</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#explore" className="hover:text-white transition">Explore</a>
            <a href="#create" className="hover:text-white transition">Create</a>
            <a href="#" className="hover:text-white transition">Stats</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-3 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90">Connect Wallet</button>
            <button className="md:hidden text-white/90">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
