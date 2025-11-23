"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Animated Background Blob */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            {/* Content */}
            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Premium Quality <br />
                        <span className="text-2xl md:text-4xl lg:text-5xl text-white">Peanut Products</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Silvon Agrotech delivers the finest peanuts, groundnut seeds, penut butter and groundnut oil directly from our manufacturing plant to your home.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#products"
                            className="text-white font-semibold hover:text-accent transition-colors duration-300 text-lg hover:underline"
                        >
                            Explore Our Products
                        </Link>
                        <Link
                            href="#contact"
                            className="text-white font-semibold hover:text-accent transition-colors duration-300 text-lg hover:underline"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-slate-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
