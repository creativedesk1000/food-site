"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, Search, MapPin } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useLocationStore } from "@/store/useLocationStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Navbar = () => {
    const totalItems = useCartStore((state) => state.getTotalItems());
    const selectedAddress = useLocationStore((state) => state.selectedAddress);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-accent font-bold text-xl"
                    >
                        F
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight text-primary hidden sm:block">
                        FOOD<span className="text-accent text-2xl">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">Home</Link>
                    <Link href="/menu" className="text-sm font-medium hover:text-accent transition-colors">Menu</Link>
                    <Link href="/deals" className="text-sm font-medium hover:text-accent transition-colors">Deals</Link>
                    <Link href="/orders" className="text-sm font-medium hover:text-accent transition-colors">Track Order</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="hidden sm:flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-slate-200 transition-colors">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span className="max-w-[120px] truncate">
                            {selectedAddress?.label || "Select Location"}
                        </span>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2">
                        <Button variant="ghost" size="icon" className="text-primary hover:text-accent">
                            <Search className="w-5 h-5" />
                        </Button>

                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className="relative text-primary hover:text-accent">
                                <ShoppingCart className="w-5 h-5" />
                                {totalItems > 0 && (
                                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-primary border-2 border-white">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Button>
                        </Link>

                        <Link href="/login" className="hidden sm:block">
                            <Button variant="ghost" size="icon" className="text-primary hover:text-accent">
                                <User className="w-5 h-5" />
                            </Button>
                        </Link>

                        <Button variant="ghost" size="icon" className="md:hidden text-primary hover:text-accent">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
