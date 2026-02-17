'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function DiscoverPage() {
    return (
        <main className="min-h-screen bg-om-dark text-amber-50 selection:bg-om-gold selection:text-black">

            {/* Navigation */}
            <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="text-2xl font-serif font-bold text-om-gold">Old Monk</Link>
                <Link href="/" className="text-sm uppercase tracking-widest hover:text-om-gold transition-colors">
                    Back to Home
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/frames/ezgif-frame-120.jpg"
                        alt="Old Monk Bottle"
                        fill
                        className="object-cover opacity-40 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-om-dark via-om-dark/50 to-transparent" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-serif text-om-gold mb-6 drop-shadow-2xl"
                    >
                        The Legend
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl md:text-2xl font-light tracking-wide text-white/80"
                    >
                        Since 1954
                    </motion.p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-om-gold mb-8">
                            A Legacy of Craftsmanship
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-white/70 mb-6">
                            Old Monk Rum is an iconic vatted Indian dark rum, launched in 1954. It is blended and aged for a minimum of 7 years. It is a dark rum with a distinct vanilla flavour, with an alcohol content of 42.8%.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-white/70">
                            Produced by Mohan Meakin Ltd., in Ghaziabad, Uttar Pradesh, Old Monk has gained a cult following across the world. There is no advertising, its popularity depends on word of mouth and loyalty of customers.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <Image
                            src="/frames/ezgif-frame-001.jpg"
                            alt="Old Monk Classic Bottle"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Tasting Notes */}
            <section className="py-24 bg-om-brown/20 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-om-gold mb-16">Tasting Notes</h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Nose", desc: "Heavy vanilla, spice, and caramel notes with a hint of dried fruits." },
                            { title: "Palate", desc: "Rich and smooth with flavors of dark chocolate, oak, and roasted coffee." },
                            { title: "Finish", desc: "Long, warm, and sweet finish that lingers pleasantly." }
                        ].map((note, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="p-8 border border-om-gold/20 rounded-xl bg-black/40 hover:bg-om-gold/5 transition-colors"
                            >
                                <h3 className="text-2xl font-serif text-white mb-4">{note.title}</h3>
                                <p className="text-white/60">{note.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-center text-om-gold mb-12">The Collection</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-[800px]">
                    {/* Using different frames to simulate a gallery */}
                    <div className="relative h-full col-span-2 row-span-2 rounded-lg overflow-hidden group">
                        <Image src="/frames/ezgif-frame-050.jpg" alt="Gallery 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="relative h-full rounded-lg overflow-hidden group">
                        <Image src="/frames/ezgif-frame-080.jpg" alt="Gallery 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative h-full rounded-lg overflow-hidden group">
                        <Image src="/frames/ezgif-frame-150.jpg" alt="Gallery 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative h-full rounded-lg overflow-hidden group">
                        <Image src="/frames/ezgif-frame-180.jpg" alt="Gallery 4" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative h-full rounded-lg overflow-hidden group">
                        <Image src="/frames/ezgif-frame-220.jpg" alt="Gallery 5" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center text-white/40 text-sm border-t border-white/5">
                <p>© {new Date().getFullYear()} Mohan Meakin Ltd. Please Drink Responsibly.</p>
            </footer>
        </main>
    );
}
