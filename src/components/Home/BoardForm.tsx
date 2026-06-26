import h1 from '../../assets/Home/h1.jpg'
import h2 from '../../assets/Home/h2.jpg'
import h5 from '../../assets/Home/h5.jpg'

export default function BoardForm() {
  return (
    <section
      id="boardform"
      className="py-22 px-6 md:px-12 bg-bg-linen text-text-charcoal relative overflow-hidden"
    >
      {/* Subtle background SVG drawing curves */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,100 C200,50 400,450 700,200 C900,50 1100,300 1200,600" className="drawing-line" />
          <path d="M100,500 C300,300 600,600 800,200 C950,50 1100,100 1150,50" className="drawing-line" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Metadata */}
        <div className="flex justify-between items-start text-[10px] font-bold uppercase tracking-[0.25em] text-text-charcoal/50 border-b border-text-charcoal/10 pb-4">
          <span>CONCRETIONS STUDIO</span>
          <span>ORANGE COUNTY, CA</span>
          <span className="hidden sm:inline">ARCHITECTURAL FINISHES & TILES</span>
        </div>

        {/* Overlapping Text Grid & 3 Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative">
          {/* Left Image: h5.jpg */}
          <div className="lg:col-span-3 aspect-[3/4] overflow-hidden group shadow-lg">
            <img
              src={h1}
              alt="Sherman Address Concrete Column"
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          </div>

          {/* Center Image: h1.jpg with the giant overlapping text layered */}
          <div className="lg:col-span-6 flex flex-col items-center relative py-12 lg:py-0">
            {/* Overlapping titles */}
            <div className="text-center flex flex-col gap-5 select-none absolute top-[0px] w-full z-20 pointer-events-none">
              <h2 className="font-serif text-[#161715] overlap-heading-top font-light tracking-[0.08em] opacity-90">
                BOARD FORM
              </h2>
              <h3 className="font-serif text-white overlap-heading-bottom font-light tracking-[0.08em] mt-[-10px] md:mt-[-10px] drop-shadow-md">
                CONCRETE TILE
              </h3>
            </div>

            {/* Central Visual */}
            <div className="w-[85%] aspect-square overflow-hidden shadow-2xl relative z-10 border border-white/10 group mt-16">
              <img
                src={h2}
                alt="Board Form Concrete Tile Villa"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>

            {/* Subtext description below image */}
            <p className="text-[10px] md:text-xs text-text-charcoal/70 text-center max-w-sm mt-8 leading-relaxed uppercase tracking-[0.15em] font-medium">
              The signature look of board-form concrete. Cast into lightweight, large-format panels to provide industrial resilience with a warm, organic visual rhythm.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block border border-text-charcoal/30 hover:border-text-charcoal text-text-charcoal px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-colors rounded-none"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Right Image: h2.jpg */}
          <div className="lg:col-span-3 aspect-[3/4] overflow-hidden group shadow-lg">
            <img
              src={h5}
              alt="Modern Stucco Concrete Facade"
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
