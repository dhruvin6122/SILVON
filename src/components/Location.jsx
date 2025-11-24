"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
    return (
        <section id="location" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-3 md:mb-4">Our Location</h2>
                    <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-4">
                        Visit our factory and office.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px] sm:h-[450px] md:h-[500px] relative bg-white"
                >
                    <iframe
                        src="https://maps.google.com/maps?q=23.62978735609447,72.9599704+(Silvon+Agro+Tech)&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Silvon Agro Tech Location"
                    ></iframe>

                    <a
                        href="https://www.google.com/maps?q=23.62978735609447,72.9599704"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white p-4 sm:p-6 rounded-xl shadow-2xl border-l-4 border-accent hover:shadow-3xl transition-shadow duration-300 cursor-pointer group"
                    >
                        <div className="flex items-start gap-2 sm:gap-3">
                            <div className="bg-accent/10 p-2 sm:p-3 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                                <FaMapMarkerAlt className="text-accent text-lg sm:text-2xl" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-accent transition-colors">Silvon Agro Tech</h4>
                                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                                    Dhandha GIDC, Himatnagar - Idar State Highway Rd,<br className="hidden sm:inline" />
                                    <span className="sm:hidden"> </span>behind Ambika Traders,<br className="hidden sm:inline" />
                                    <span className="sm:hidden"> </span>Himatnagar, Gujarat 383001
                                </p>
                                <p className="text-accent text-xs mt-1 sm:mt-2 font-medium">Click to open in Google Maps →</p>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;
