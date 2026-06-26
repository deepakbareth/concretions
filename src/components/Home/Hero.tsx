import h4 from '../../assets/banner.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-bg-moody flex flex-col justify-between items-center text-center overflow-hidden"
    >
      {/* Background Image: h4.jpg */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src={h4}
          alt="Luxury Concrete Living Room"
          className="w-full h-full object-cover animate-fade-in"
        />
      </div>

      {/* Top spacer for absolute navbar alignment */}
      <div></div>

      {/* Center Heading Title */}
      <div className="relative z-10 px-6 max-w-5xl animate-slide-up space-y-6 mb-40">
        <h1 className="font-serif text-3xl md:text-8xl tracking-[0.18em] text-white font-light uppercase">
          CONCRETIONS RESIDENCES
        </h1>
      </div>
    </section>
  )
}
