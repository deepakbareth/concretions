import h3 from '../../assets/Home/h3.jpg'

export default function ShermanCanal() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 bg-bg-olive text-text-linen relative overflow-hidden"
    >
      {/* Subtle background SVG curves */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M1100,500 C800,400 600,100 300,300 C100,450 -100,300 -150,100" className="drawing-line-white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Metadata */}
        <div className="flex justify-between items-start text-[10px] font-bold uppercase tracking-[0.25em] text-text-linen/50 border-b border-text-linen/10 pb-4">
          <span>RESIDENTIAL PORTFOLIO</span>
          <span>VENICE CANALS, CA</span>
          <span className="hidden sm:inline">PROJECT ARCHIVE 2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: large image (h3.jpg - wood deck patio concrete fireplace) */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-white/5 shadow-2xl">
            <div className="aspect-[4/3] w-full">
              <img
                src={h3}
                alt="Sherman Canal Concrete Fireplace Patio"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur text-white text-[9px] uppercase tracking-widest font-bold py-1.5 px-3 rounded-full border border-white/10">
              Residence Preview
            </div>
          </div>

          {/* Right Column: metadata details */}
          <div className="lg:col-span-5 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-light block">
                • FEATURED ESTATE
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-wide">
                442 SHERMAN <br />
                <span className="font-serif italic font-normal text-gold-light">Canal Project</span>
              </h2>
            </div>

            <p className="text-sm text-gold-light/75 leading-relaxed font-light">
              An upscale residential construction masterpiece overlooking the Venice Canal waterways, California. This project is characterized by hand-burnished raw concrete columns, floating micro-cement outdoor fireplaces, and customized basalt stone tile entryways.
            </p>

            {/* Project Summary */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ebdcb9]/40 block">PROJECT SUMMARY</span>
              <ul className="space-y-2.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-light"></span>
                  <span>3 Bedrooms / 4 Bathrooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-light"></span>
                  <span>Custom Concrete Fireplace Surround</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-light"></span>
                  <span>Polished Masonry & Concrete Floors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-light"></span>
                  <span>Bespoke Basalt Stone Exterior Steps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-light"></span>
                  <span>Seamless Canal Waterway Views</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block border border-gold-light/40 hover:border-white text-gold-light hover:text-white px-7 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors rounded-none"
              >
                RESERVE PRIVATE TOUR
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
