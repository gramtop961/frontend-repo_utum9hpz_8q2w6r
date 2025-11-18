function CTA() {
  return (
    <section id="create" className="bg-slate-950">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent border border-emerald-400/20 p-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Start minting your collection</h3>
          <p className="text-white/70 mt-2 max-w-2xl">Bring your art to life on-chain. Create collections, upload NFTs, and list them for sale in minutes.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition">
              Create Collection
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-transparent border border-emerald-300/40 text-emerald-200 hover:bg-emerald-300/10 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
