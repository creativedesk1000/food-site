"use client";

import { CartItem as CartItemType } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CartItemProps {
    item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
    const { updateQuantity, removeItem } = useCartStore();

    return (
        <div className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-primary truncate max-w-[150px]">{item.name}</h4>
                        {item.selectedSize && (
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                                Size: {item.selectedSize}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-300 hover:text-destructive transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-accent">${item.totalPrice.toFixed(2)}</span>

                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg border border-slate-100 p-1">
                        <Button
                            size="icon"
                            variant="ghost"
                            className="w-7 h-7 rounded-sm"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                            <Minus className="w-3 h-3" />
                        </Button>
                        <span className="font-black text-xs w-4 text-center">{item.quantity}</span>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="w-7 h-7 rounded-sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                            <Plus className="w-3 h-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
