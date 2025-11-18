import { useEffect, useState } from 'react'

function Trending() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/nfts?limit=8`)
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="explore" className="bg-slate-950">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Trending NFTs</h2>
            <p className="text-white/60 mt-2">Fresh drops from top creators</p>
          </div>
          <a href="#" className="text-emerald-400 hover:text-emerald-300">View all</a>
        </div>

        {loading ? (
          <p className="text-white/60">Loading...</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <article key={item._id} className="group rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image_url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium truncate">{item.name}</h3>
                  <p className="text-white/60 text-sm truncate">{item.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-emerald-400 font-semibold">{(item.price_eth || 0.24).toFixed(2)} ETH</span>
                    <button className="px-3 py-1.5 rounded-md bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-sm">Bid</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Trending
