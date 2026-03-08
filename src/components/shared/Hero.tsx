"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-12 md:py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold">
                        <Star className="w-4 h-4 fill-accent" />
                        <span>Top Rated Food Delivery</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight">
                        Premium Taste <br />
                        <span className="text-accent">Delivered</span> Today
                    </h1>

                    <p className="text-slate-600 text-lg md:text-xl max-w-lg">
                        Savor the flavors of our carefully curated menu, prepared with fresh ingredients and delivered with love.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 group">
                            Order Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-200 hover:bg-slate-100">
                            View Menu
                        </Button>
                    </div>

                    <div className="flex gap-8 pt-8">
                        <div>
                            <p className="text-3xl font-bold text-primary">50k+</p>
                            <p className="text-sm text-slate-500">Happy customers</p>
                        </div>
                        <div className="border-l border-slate-200" />
                        <div>
                            <p className="text-3xl font-bold text-primary">100+</p>
                            <p className="text-sm text-slate-500">Menu items</p>
                        </div>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glassmorphism shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80"
                            alt="Premium Food"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Floating cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Star className="w-6 h-6 text-green-600 fill-green-600" />
                        </div>
                        <div>
                            <p className="font-bold text-primary">4.9/5 Rating</p>
                            <p className="text-xs text-slate-500">Over 10k reviews</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
