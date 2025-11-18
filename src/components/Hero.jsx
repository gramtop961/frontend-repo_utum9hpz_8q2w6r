import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white border border-white/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live crypto art, holographic vibes
n            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Discover, collect and sell extraordinary NFTs
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl">
              A futuristic marketplace for digital art and collectibles. Experience a dynamic world of shiny, holographic crypto coins and seamless trading.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#explore" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">
                Explore Marketplace
              </a>
              <a href="#create" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-transparent border border-white/30 text-white hover:bg-white/10 transition">
                Create an NFT
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </section>
  );
}

export default Hero;
