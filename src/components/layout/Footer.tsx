import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-primary text-slate-300 py-12 px-4 border-t border-slate-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-accent font-bold text-lg">
                            F
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            FOOD<span className="text-accent text-2xl">.</span>
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Experience the finest local and international cuisines delivered right to your doorstep. Premium taste, premium service.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/menu" className="hover:text-accent transition-colors">Browse Menu</Link></li>
                        <li><Link href="/deals" className="hover:text-accent transition-colors">Special Deals</Link></li>
                        <li><Link href="/orders" className="hover:text-accent transition-colors">Order Tracking</Link></li>
                        <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Support</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                        <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/refund" className="hover:text-accent transition-colors">Refund Policy</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3">
                            <MapPin className="w-5 h-5 text-accent shrink-0" />
                            <span>123 Foodie Street, Gourmet City, GC 12345</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone className="w-5 h-5 text-accent shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex gap-3">
                            <Mail className="w-5 h-5 text-accent shrink-0" />
                            <span>hello@foodsite.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} FOOD. All rights reserved.</p>
            </div>
        </footer>
    );
};
