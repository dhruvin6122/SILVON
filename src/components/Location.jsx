"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
    return (
        <section id="location" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Location</h2>
                    <p className="text-slate-700 max-w-2xl mx-auto text-lg">
                        Visit our factory and office.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[500px] relative bg-white"
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
                        className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-2xl max-w-md border-l-4 border-accent hover:shadow-3xl transition-shadow duration-300 cursor-pointer group"
                    >
                        <div className="flex items-start gap-3">
                            <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                                <FaMapMarkerAlt className="text-accent text-2xl" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-accent transition-colors">Silvon Agro Tech</h4>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    Dhandha GIDC, Himatnagar - Idar State Highway Rd,<br />
                                    behind Ambika Traders,<br />
                                    Himatnagar, Gujarat 383001
                                </p>
                                <p className="text-accent text-xs mt-2 font-medium">Click to open in Google Maps →</p>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;
