'use client';

import ScrollImageSequence from "@/components/ScrollImageSequence";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[800vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ScrollImageSequence />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center text-center p-4">

          {/* Intro */}
          <motion.div style={{ opacity: opacity1 }} className="absolute">
            <h1 className="text-6xl md:text-8xl font-serif text-om-gold mb-4 drop-shadow-lg">Old Monk</h1>
            <p className="text-xl md:text-2xl tracking-widest uppercase text-white/90">The Legend Lives On</p>
          </motion.div>

          {/* Heritage */}
          <motion.div style={{ opacity: opacity2 }} className="absolute max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-om-gold mb-6 drop-shadow-md">A Time-Honored Tradition</h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              Crafted with passion since 1954, Old Monk is a vatted Indian dark rum, blended and aged for a minimum of 7 years. Its distinct vanilla flavor and smooth texture have made it a cult favorite across generations.
            </p>
          </motion.div>

          {/* Taste */}
          <motion.div style={{ opacity: opacity3 }} className="absolute max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-om-gold mb-6 drop-shadow-md">The Taste of Warmth</h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              With notes of caramel, chocolate, and a hint of spice, every sip is a journey into warmth. Perfect neat, on the rocks, or with a splash of cola.
            </p>
          </motion.div>

          {/* Final / Default State */}
          <motion.div style={{ opacity: finalOpacity }} className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center backdrop-blur-sm pointer-events-auto">
            <h2 className="text-5xl md:text-7xl font-serif text-om-gold mb-8">Old Monk</h2>
            <div className="flex gap-6">
              <Link href="/discover" className="px-8 py-3 bg-om-gold text-black font-semibold tracking-wider hover:bg-yellow-600 transition-colors">
                DISCOVER MORE
              </Link>
              <button className="px-8 py-3 border border-om-gold text-om-gold font-semibold tracking-wider hover:bg-om-gold/10 transition-colors">
                FIND A STORE
              </button>
            </div>
            <footer className="absolute bottom-8 text-neutral-500 text-sm">
              © {new Date().getFullYear()} Mohan Meakin Ltd. Please Drink Responsibly.
            </footer>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50 mix-blend-difference pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
}
