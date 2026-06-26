import React from 'react';
import ent1 from '../../assets/Home/ent1.jpg';
import ent2 from '../../assets/Home/ent2.jpg';
import ent3 from '../../assets/Home/ent3.jpg';

export default function InteriorShowcase() {
    const cards = [
        {
            id: 1,
            title: 'Airy Great Room',
            subtitle: 'Floor-to-ceiling windows & natural wood',
            image: ent3,
            // Scoped to tablet/desktop so mobile stacks naturally
            offset: 'md:mt-20 lg:mt-32',
        },
        {
            id: 2,
            title: 'Modern Lounge',
            subtitle: 'Contemporary fireplace & cozy seating',
            image: ent2,
            offset: 'mt-0 md:-mt-4',
        },
        {
            id: 3,
            title: 'Master Suite',
            subtitle: 'Statement lighting & terrace views',
            image: ent1,
            // Pushes off slightly only on larger screens
            offset: 'md:mt-24 lg:mt-40 md:translate-x-6 lg:translate-x-12',
        },
    ];

    return (
        <section className="relative w-full min-h-screen bg-[#FDFDFB] overflow-hidden py-16 font-sans text-[#1A1A1A]">

            {/* --- Continuous Background Line SVG --- */}
            {/* Reduced opacity on mobile so it doesn't clutter the stacked cards */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 md:opacity-100">
                <svg
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-cover"
                    preserveAspectRatio="xMidYMid slice"
                >
                    {/* Bottom Left Loop */}
                    <path d="M-50,750 C30,730 80,780 40,820 C0,860 -40,820 0,780 C40,740 100,650 200,500" stroke="#1A1A1A" strokeWidth="1" />
                    {/* Main Sweeping Line */}
                    <path
                        d="M200,500 C300,350 450,200 600,250 C750,300 800,650 950,650 C1100,650 1300,350 1500,200"
                        stroke="#1A1A1A"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">

                {/* --- Top Header Section --- */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-12 lg:mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 md:mb-0">
                        Discover <br className="hidden md:block" />
                        interior elegance
                    </h1>

                    <div className="flex items-start max-w-xs gap-3 mt-4 md:mt-0">
                        {/* 8-point star icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#947B6A" strokeWidth="1.5" className="flex-shrink-0 mt-1">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                        </svg>
                        <p className="text-sm font-light leading-relaxed">
                            Step inside meticulously crafted interiors. From sun-drenched living areas to tranquil bedroom suites, experience a seamless blend of modern design and natural warmth.
                        </p>
                    </div>
                </div>

                {/* --- Arched Image Cards Layout --- */}
                {/* Increased mobile gap (gap-12) to give stacked cards breathing room */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-12 relative pb-12 md:pb-14">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`relative group mx-auto w-full max-w-[340px] md:max-w-[380px] shadow-2xl shadow-black/10 transition-transform duration-700 hover:-translate-y-2 ${card.offset}`}
                            style={{
                                borderRadius: '12rem 12rem 1.5rem 1.5rem',
                                overflow: 'hidden',
                                aspectRatio: '3/4'
                            }}
                        >
                            {/* Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />

                            {/* Bottom Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            {/* Card Text */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h3 className="text-white font-serif text-2xl mb-1">{card.title}</h3>
                                <p className="text-white/80 font-light text-sm">{card.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}