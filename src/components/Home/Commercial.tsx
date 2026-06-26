import { ArrowRight } from 'lucide-react'
import h6 from '../../assets/Home/h6.jpg'

export default function Commercial() {
  return (
    <section
      id="services"
      className="py-32 px-6 md:px-12 bg-bg-linen text-text-charcoal relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Metadata */}
        <div className="flex justify-between items-start text-[10px] font-bold uppercase tracking-[0.25em] text-text-charcoal/50 border-b border-text-charcoal/10 pb-4">
          <span>COMMERCIAL WORK</span>
          <span>LOS MOLINOS SELECTION</span>
          <span className="hidden sm:inline">CONTRACTORS DIRECTORY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-text-charcoal/50 block">
              • BOUTIQUE COMMERCIAL MASONRY
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Los Molinos <br />
              <span className="font-serif italic font-normal text-[#e19e11]">Commercial Complex</span>
            </h2>
            <p className="text-sm text-text-charcoal/70 leading-relaxed font-light">
              Extending our masonry craft beyond the domestic sector. The Los Molinos installation utilizes fiber-reinforced structural columns, sandblasted concrete walkways, and custom layout tiling to match high-traffic retail specifications.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#e19e11] hover:text-amber-600 transition-colors"
              >
                <span>Explore Commercial Projects</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Right image: h6.jpg */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-text-charcoal/5 shadow-2xl">
            <div className="aspect-[16/10] w-full">
              <img
                src={h6}
                alt="Los Molinos Commercial Windmill masonry"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
