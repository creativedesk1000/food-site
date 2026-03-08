"use client";

import { useCartStore } from "@/store/useCartStore";
import { CartItem } from "./CartItem";
import { Button, buttonVariants } from "@/components/ui/button";
import { ShoppingBag, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerFooter,
    DrawerTrigger
} from "@/components/ui/drawer";

export const CartDrawer = () => {
    const { items, getTotalPrice, getTotalItems } = useCartStore();

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="relative p-2 text-primary hover:text-accent transition-colors">
                    <ShoppingBag className="w-6 h-6" />
                    {getTotalItems() > 0 && (
                        <span className="absolute top-0 right-0 bg-accent text-primary text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                            {getTotalItems()}
                        </span>
                    )}
                </button>
            </DrawerTrigger>
            <DrawerContent className="max-w-md mx-auto h-[80vh] bg-slate-50 rounded-t-[3rem]">
                <DrawerHeader className="border-b border-slate-100 pb-4">
                    <DrawerTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-accent" />
                            <span className="text-xl font-black text-primary">Your Cart</span>
                        </div>
                    </DrawerTitle>
                </DrawerHeader>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
                                <ShoppingBag className="w-10 h-10 text-slate-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary">Your cart is empty</h3>
                                <p className="text-sm text-slate-400">Add some delicious food to get started!</p>
                            </div>
                            <Link
                                href="/menu"
                                className={buttonVariants({ variant: "outline", className: "rounded-full px-8" })}
                            >
                                Go to Menu
                            </Link>
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <DrawerFooter className="bg-white border-t border-slate-100 p-6 space-y-4">
                        <div className="flex justify-between items-center text-lg">
                            <span className="font-medium text-slate-500">Subtotal</span>
                            <span className="font-black text-primary">${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <Link
                            href="/checkout"
                            className={buttonVariants({ variant: "default", className: "w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg group" })}
                        >
                            <span className="flex items-center justify-center gap-2">
                                Checkout Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </DrawerFooter>
                )}
            </DrawerContent>
        </Drawer>
    );
};
