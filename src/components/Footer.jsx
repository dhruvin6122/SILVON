"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer" className="bg-slate-950/90 backdrop-blur-md text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 inline-block">
                            Silvon <span className="text-accent">Agrotech</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Leading manufacturer and supplier of premium agricultural products. Committed to quality, sustainability, and farmer prosperity.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#hero" className="text-slate-400 hover:text-accent transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-slate-400 hover:text-accent transition-colors">Our Products</Link>
                            </li>
                            <li>
                                <Link href="#owners" className="text-slate-400 hover:text-accent transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-slate-400 hover:text-accent transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Products</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#products" className="text-slate-400 hover:text-accent transition-colors">Groundnut Seeds</Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-slate-400 hover:text-accent transition-colors">Peanuts</Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-slate-400 hover:text-accent transition-colors">Groundnut Oil</Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-slate-400 hover:text-accent transition-colors">Peanut Butter</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <FaMapMarkerAlt className="mt-1 text-accent flex-shrink-0" />
                                <span>Dhandha GIDC, Himatnagar - Idar State Highway Rd, behind Ambika Traders, Himatnagar, Gujarat 383001</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <FaPhoneAlt className="text-accent flex-shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <FaEnvelope className="text-accent flex-shrink-0" />
                                <a href="mailto:info@silvonagrotech.com" className="hover:text-accent transition-colors">info@silvonagrotech.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Silvon Agrotech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
