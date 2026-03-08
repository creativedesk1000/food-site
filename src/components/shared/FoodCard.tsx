"use client";

import { FoodItem } from "@/types";
import { motion } from "framer-motion";
import { Star, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { Badge } from "@/components/ui/badge";

interface FoodCardProps {
    item: FoodItem;
}

export const FoodCard = ({ item }: FoodCardProps) => {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {item.isPopular && (
                    <Badge className="absolute top-4 left-4 bg-accent text-primary font-bold border-none">
                        Popular
                    </Badge>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold text-primary">
                    <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                    {item.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-primary leading-tight">{item.name}</h3>
                    <span className="font-bold text-accent text-lg">${item.price}</span>
                </div>

                <p className="text-slate-500 text-sm line-clamp-2 mb-6 h-10">
                    {item.description}
                </p>

                <div className="flex gap-2">
                    <Button
                        className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl gap-2 h-11"
                        onClick={() => addItem(item)}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="w-11 h-11 rounded-xl border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                        <Plus className="w-5 h-5 text-primary" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
