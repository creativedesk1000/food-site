"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Tag } from "lucide-react";
import Image from "next/image";

export const DealBanner = () => {
    return (
        <section className="py-12 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative bg-primary rounded-[2.5rem] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />

                    {/* Content */}
                    <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                            <Tag className="w-4 h-4" />
                            Limited Time Offer
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            Get <span className="text-accent underline decoration-4 underline-offset-8">50% OFF</span> <br />
                            On Your First Order
                        </h2>

                        <p className="text-slate-300 text-lg max-w-lg">
                            Use code <span className="text-white font-bold bg-white/10 px-3 py-1 rounded-lg border border-white/20">NEWFOOD50</span> at checkout to avail this exclusive discount.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-4 text-white/80">
                            <Clock className="w-5 h-5 text-accent" />
                            <span className="text-sm font-medium">Valid until March 31, 2026</span>
                        </div>

                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-10 transition-transform hover:scale-105 active:scale-95">
                            Claim Now
                        </Button>
                    </div>

                    {/* Image */}
                    <div className="relative z-10 w-full md:w-1/3 aspect-square max-w-[400px]">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
                                alt="Healthy Meal"
                                fill
                                className="object-cover rounded-full border-8 border-white/10 shadow-2xl"
                            />
                        </motion.div>

                        {/* Floating badge */}
                        <div className="absolute -top-4 -right-4 bg-accent text-primary w-20 h-20 rounded-full flex flex-col items-center justify-center font-black shadow-xl border-4 border-primary">
                            <span className="text-xl">50%</span>
                            <span className="text-[10px] uppercase">OFF</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
