"use client";

import { categories } from "@/data/menu";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const CategorySlider = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-2">Popular Categories</h2>
                        <p className="text-slate-500">Explore our delicious range of categories</p>
                    </div>
                    <Link href="/menu" className="text-accent font-semibold hover:underline">
                        View All
                    </Link>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 group cursor-pointer"
                        >
                            <Link href={`/menu?category=${category.slug}`} className="block text-center">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-50 group-hover:border-accent transition-all relative">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform"
                                    />
                                </div>
                                <h3 className="font-bold text-primary group-hover:text-accent transition-colors">
                                    {category.name}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
