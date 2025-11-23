"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
                    <p className="text-slate-700 max-w-2xl mx-auto">
                        We'd love to hear from you. Contact us for quotes and inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
                    >
                        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                            <FaPhone />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
                        <p className="text-gray-600 mb-6">Speak directly with our team.</p>
                        <div className="space-y-2">
                            <a href="tel:+919876543210" className="block text-accent font-semibold hover:underline">+91 98765 43210</a>
                            <a href="tel:+919876543211" className="block text-accent font-semibold hover:underline">+91 98765 43211</a>
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
                    >
                        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                            <FaEnvelope />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
                        <p className="text-gray-600 mb-6">Send us your requirements.</p>
                        <a href="mailto:info@silvonagrotech.com" className="text-accent font-semibold hover:underline">
                            info@silvonagrotech.com
                        </a>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
                    >
                        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                            <FaMapMarkerAlt />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Visit Us</h3>
                        <p className="text-gray-600 mb-6">Come see our factory.</p>
                        <p className="text-gray-700">
                            123 Industrial Area,<br />
                            Surat, Gujarat, India
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
