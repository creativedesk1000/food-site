"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { foodItems } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Star, Minus, Plus, Heart } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const addItem = useCartStore((state) => state.addItem);

    const item = useMemo(() => foodItems.find(i => i.id === id), [id]);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(item?.sizes?.[0]?.name);
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    if (!item) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Button onClick={() => router.push("/menu")} className="mt-4">Back to Menu</Button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addItem(item, quantity, selectedSize, selectedExtras);
        router.push("/cart");
    };

    const toggleExtra = (extra: string) => {
        setSelectedExtras(prev =>
            prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
        );
    };

    const totalPrice = useMemo(() => {
        let price = item.price;
        if (selectedSize) {
            const sizeObj = item.sizes?.find(s => s.name === selectedSize);
            if (sizeObj) price = sizeObj.price;
        }
        // Add extra prices if they existed in mock data (currently they don't have prices in mock data)
        return price * quantity;
    }, [item.price, selectedSize, quantity, item.sizes]);

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <Button
                variant="ghost"
                onClick={() => router.back()}
                className="mb-8 hover:bg-slate-100 rounded-full"
            >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Menu
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* Gallery */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl"
                >
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white text-primary shadow-lg"
                    >
                        <Heart className="w-5 h-5" />
                    </Button>
                </motion.div>

                {/* Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Badge className="bg-accent/10 border-accent/20 text-accent font-bold px-3 py-1">
                                {item.category.toUpperCase()}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                                <Star className="w-4 h-4 text-accent fill-accent" />
                                {item.rating} (50+ reviews)
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black text-primary">{item.name}</h1>

                        <p className="text-slate-500 text-lg leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Configuration */}
                    <div className="space-y-6">
                        {/* Sizes */}
                        {item.sizes && (
                            <div className="space-y-3">
                                <h3 className="font-bold text-primary">Select Size</h3>
                                <div className="flex flex-wrap gap-3">
                                    {item.sizes.map((size) => (
                                        <button
                                            key={size.name}
                                            onClick={() => setSelectedSize(size.name)}
                                            className={cn(
                                                "px-6 py-3 rounded-2xl font-bold transition-all border-2",
                                                selectedSize === size.name
                                                    ? "bg-primary border-primary text-white"
                                                    : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
                                            )}
                                        >
                                            {size.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="space-y-3">
                            <h3 className="font-bold text-primary">Quantity</h3>
                            <div className="flex items-center gap-4 bg-slate-50 w-fit p-1 rounded-2xl border border-slate-200">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-xl"
                                >
                                    <Minus className="w-4 h-4" />
                                </Button>
                                <span className="font-black text-lg w-8 text-center">{quantity}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-xl"
                                >
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button
                            size="lg"
                            className="w-full h-16 rounded-[2rem] bg-primary hover:bg-primary/90 text-xl font-bold gap-4 shadow-xl shadow-primary/10 transition-transform active:scale-95"
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart className="w-6 h-6" />
                            Add to Orders - ${totalPrice.toFixed(2)}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
