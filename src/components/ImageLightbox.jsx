"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

const ImageLightbox = ({ images, isOpen, onClose, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        setCurrentIndex(initialIndex);
        setScale(1);
    }, [initialIndex, isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") handlePrevious();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setScale(1);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setScale(1);
    };

    const handleZoomIn = () => {
        setScale((prev) => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = () => {
        setScale((prev) => Math.max(prev - 0.5, 1));
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors z-50"
                >
                    <FaTimes />
                </button>

                {/* Zoom Controls */}
                <div className="absolute top-4 left-4 flex gap-2 z-50">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleZoomIn();
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-colors"
                    >
                        <FaSearchPlus />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleZoomOut();
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-colors"
                    >
                        <FaSearchMinus />
                    </button>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevious();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-accent transition-colors z-50"
                        >
                            ‹
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-accent transition-colors z-50"
                        >
                            ›
                        </button>
                    </>
                )}

                {/* Image Container */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex items-center justify-center p-16"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className="relative w-full h-full overflow-auto"
                        style={{
                            transform: `scale(${scale})`,
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Image ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageLightbox;
