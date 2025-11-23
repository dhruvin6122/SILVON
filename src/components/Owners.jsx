"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const owners = [
    {
        name: "John Doe",
        position: "Co-Founder",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        intro: "Visionary leader with 20 years of experience in agriculture.",
        phone: "+91 98765 43210"
    },
    {
        name: "Jane Smith",
        position: "Co-Founder",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        intro: "Expert in sustainable farming and supply chain management.",
        phone: "+91 98765 43211"
    },
];

const Owners = () => {
    return (
        <section id="owners" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
                    >
                        Meet the Owners
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-700 max-w-2xl mx-auto text-lg"
                    >
                        The driving force behind Silvon Agrotech's success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {owners.map((owner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group bg-white rounded-2xl p-10 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-slate-200 group-hover:border-accent transition-colors duration-300">
                                <Image
                                    src={owner.image}
                                    alt={owner.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-800 mb-2 group-hover:text-accent transition-colors">
                                {owner.name}
                            </h3>
                            <p className="text-accent font-semibold text-lg mb-4">{owner.position}</p>
                            <p className="text-slate-700 mb-6 leading-relaxed">{owner.intro}</p>

                            <a
                                href={`tel:${owner.phone}`}
                                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                            >
                                <FaPhoneAlt className="text-sm" /> {owner.phone}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Owners;
