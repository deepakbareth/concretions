import React, { useState } from 'react';
import { X } from 'lucide-react';
import ex1 from '../../assets/Home/ex1.jpg'
import ex2 from '../../assets/Home/ex2.jpg'
import ex3 from '../../assets/Home/ex3.jpg'
import ex4 from '../../assets/Home/ex4.jpg'
import ex5 from '../../assets/Home/ex5.jpg'
import ex6 from '../../assets/Home/ex6.jpg'
import ex7 from '../../assets/Home/ex7.jpg'
import ex8 from '../../assets/Home/ex8.jpg'


export default function ExperienceShowcase() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Sample images matching the aesthetic of the provided screenshot
    const floatingImages = [
        {
            id: 1,
            url: ex3,
            // Top right cabin
            className: "w-40 h-40 md:w-56 md:h-56 -top-10 -right-4 md:-right-10",
            alt: "Log cabin at night"
        },
        {
            id: 2,
            url: ex2,
            // Middle treehouse
            className: "w-32 h-32 md:w-44 md:h-44 top-1/4 left-0 md:left-24",
            alt: "Treehouse in forest"
        },
        {
            id: 3,
            url: ex1,
            // Small middle right lake house
            className: "w-20 h-20 md:w-24 md:h-24 top-1/3 right-20 md:right-32",
            alt: "Small cabin on lake"
        },
        {
            id: 4,
            url: ex4,
            // Far right small cabin
            className: "hidden md:block w-16 h-16 top-1/2 -right-4",
            alt: "Tiny wooden cabin"
        },
        {
            id: 5,
            url: ex5,
            // Bottom right windmill
            className: "w-28 h-28 md:w-40 md:h-40 -bottom-12 -right-6 md:-right-8",
            alt: "Windmill at sunset"
        },
        {
            id: 6,
            url: ex6,
            // Bottom middle castle
            className: "w-24 h-24 md:w-32 md:h-32 bottom-8 right-16 md:right-40",
            alt: "Castle on a hill"
        },
        {
            id: 7,
            url: ex7,
            // Bottom left mountain/rocks (partially cropped)
            className: "w-40 h-40 md:w-64 md:h-64 -bottom-20 md:-bottom-32 left-10 md:left-32",
            alt: "Mountain landscape"
        },
        {
            id: 8,
            url: ex8,
            // Tiny bottom left
            className: "w-12 h-12 md:w-16 md:h-16 bottom-24 left-0 md:left-20",
            alt: "Cozy a-frame"
        }
    ];

    return (
        <section className="py-12 px-4 md:px-8 max-w-[90rem] mx-auto">
            {/* Main Container */}
            <div className="bg-bg-olive rounded-[2.5rem] p-10 md:p-20 flex flex-col md:flex-row relative overflow-hidden min-h-[400px]">

                {/* Left Content */}
                <div className="md:w-[45%] relative z-10 flex flex-col justify-center">
                    <h2 className="font-serif text-4xl md:text-[3.5rem] text-white leading-[1.1] mb-6">
                        Discover a new unique <br className="hidden md:block" />
                        living experience
                    </h2>

                    <p className="text-gray-300 text-[15px] md:text-[17px] leading-relaxed mb-6 max-w-md">
                        Take a step into the extraordinary by immersing yourself in a unique life experience. Your home away from everyone is waiting for you!
                    </p>

                    {/* Hint text for UX */}
                    <p className="text-sm text-gray-100 italic mb-8 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-gray-100 block"></span>
                        Click any image to open in lightbox
                    </p>

                </div>

                {/* Right Floating Images Area */}
                <div className="md:w-[55%] relative h-[400px] md:h-auto mt-12 md:mt-0">
                    {floatingImages.map((img) => (
                        <img
                            key={img.id}
                            src={img.url}
                            alt={img.alt}
                            onClick={() => setSelectedImage(img.url)}
                            className={`absolute rounded-full object-cover cursor-pointer hover:scale-110 hover:z-20 transition-all duration-500 shadow-2xl border-4 border-[#111111] ${img.className}`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Main Lightbox Image */}
                    <img
                        src={selectedImage}
                        alt="Enlarged view"
                        className="max-w-full max-h-full rounded-lg shadow-2xl object-contain animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
                    />
                </div>
            )}
        </section>
    );
}