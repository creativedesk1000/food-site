"use client";

import { foodItems } from "@/data/menu";
import { FoodCard } from "./FoodCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const PopularItems = () => {
    const populars = foodItems.filter(item => item.isPopular);

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-2">Popular Dishes</h2>
                        <p className="text-slate-500">The most ordered items this week</p>
                    </div>
                    <Link href="/menu" className="group flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                        See menu
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {populars.map((item) => (
                        <FoodCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
