"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

const factoryImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565514020176-db793306c9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const Factory = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section id="factory" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Factory</h2>
                    <p className="text-slate-700 max-w-2xl mx-auto">
                        State-of-the-art manufacturing facilities ensuring the highest quality standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {factoryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={src}
                                alt={`Factory Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ImageLightbox
                images={factoryImages}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                initialIndex={selectedImageIndex}
            />
        </section>
    );
};

export default Factory;
