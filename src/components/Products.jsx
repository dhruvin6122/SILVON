"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ImageLightbox from "./ImageLightbox";

const products = [
    {
        id: 1,
        name: "Groundnut Seeds",
        image: "https://images.unsplash.com/photo-1627599099887-39328859942a?q=80&w=1000&auto=format&fit=crop",
        description: "High-yield, disease-resistant groundnut seeds for optimal farming.",
    },
    {
        id: 2,
        name: "Peanuts",
        image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1000&auto=format&fit=crop",
        description: "Premium quality raw and roasted peanuts, rich in protein and flavor.",
    },
    {
        id: 3,
        name: "Groundnut Oil",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop",
        description: "100% pure, cold-pressed groundnut oil for healthy cooking.",
    },
    {
        id: 4,
        name: "Peanut Butter",
        image: "https://images.unsplash.com/photo-1558326435-049eb6610c55?q=80&w=1000&auto=format&fit=crop",
        description: "Creamy and crunchy peanut butter made from the finest roasted peanuts.",
    },
];

const Products = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const productImages = products.map(p => p.image);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
                    >
                        Our Premium Products
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-700 text-lg max-w-2xl mx-auto"
                    >
                        Discover our range of high-quality agricultural products, processed with care and precision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div
                                className="relative h-56 overflow-hidden cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-accent transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                    {product.description}
                                </p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                                >
                                    Call Us to Order <FaArrowRight className="text-sm" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ImageLightbox
                images={productImages}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                initialIndex={selectedImageIndex}
            />
        </section>
    );
};

export default Products;
