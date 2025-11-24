"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 py-20 md:py-0">
            {/* Animated Background Blob */}
            <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />

            {/* Content */}
            <div className="container relative z-10 px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
                        Premium Quality <br />
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">Peanut Products</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                        Silvon Agrotech delivers the finest peanuts, groundnut seeds, peanut butter and groundnut oil directly from our manufacturing plant to your home.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                        <Link
                            href="#products"
                            className="text-white font-semibold hover:text-accent transition-colors duration-300 text-base sm:text-lg hover:underline w-full sm:w-auto text-center py-2"
                        >
                            Explore Our Products
                        </Link>
                        <Link
                            href="#contact"
                            className="text-white font-semibold hover:text-accent transition-colors duration-300 text-base sm:text-lg hover:underline w-full sm:w-auto text-center py-2"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
