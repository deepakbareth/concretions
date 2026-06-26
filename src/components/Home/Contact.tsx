export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 bg-bg-moody text-text-linen border-t border-white/5 relative"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#ebdcb9] block">
            • CONCIERGE & COMMISSION
          </span>
          <h2 className="text-5xl font-light text-white font-serif uppercase tracking-wide">
            INQUIRE DIRECTLY
          </h2>
          <div className="w-12 h-px bg-[#ebdcb9]/40 mx-auto my-6"></div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="space-y-6">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#ebdcb9]/40 block font-bold">PRIMARY ARTISAN</span>
            <div>
              <h4 className="text-2xl font-serif text-white uppercase">Cary Ezell</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ebdcb9]/60 mt-1">Lead Mason & Founder</p>
            </div>
            <p className="text-xs text-text-linen/60 leading-relaxed max-w-sm font-light">
              Consult with our studio to get exact quote assessments, custom sample blocks, and timeline estimates for concrete tiles and bespoke installations in Orange County, CA.
            </p>
          </div>

          <div className="space-y-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#ebdcb9]/40 block font-bold">CONTACT METRICS</span>
            
            <div className="space-y-4 text-xs font-semibold uppercase tracking-[0.2em]">
              <div>
                <span className="block text-[9px] text-[#ebdcb9]/40 mb-1">Telephone</span>
                <a href="tel:714-936-0066" className="text-white hover:text-[#ebdcb9] transition-colors">
                  714-936-0066
                </a>
              </div>
              <div>
                <span className="block text-[9px] text-[#ebdcb9]/40 mb-1">Electronic Mail</span>
                <a href="mailto:caryezell@gmail.com" className="text-white hover:text-[#ebdcb9] transition-colors truncate block">
                  caryezell@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
