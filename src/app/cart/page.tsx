"use client";

import { useCartStore } from "@/store/useCartStore";
import { CartItem } from "@/components/cart/CartItem";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CartPage() {
    const { items, getTotalPrice, clearCart } = useCartStore();
    const subtotal = getTotalPrice();
    const deliveryFee = 2.50;
    const total = subtotal + (items.length > 0 ? deliveryFee : 0);

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl md:text-4xl font-black text-primary flex items-center gap-3">
                    <ShoppingBag className="w-8 h-8 text-accent" />
                    Shopping Cart
                </h1>
                {items.length > 0 && (
                    <Button
                        variant="ghost"
                        onClick={clearCart}
                        className="text-destructive hover:bg-destructive/10 rounded-full"
                    >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Clear Cart
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Items List */}
                <div className="lg:col-span-2 space-y-6">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <CartItem item={item} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 py-20 text-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <ShoppingBag className="w-12 h-12 text-slate-200" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-2">Your cart is empty</h2>
                            <p className="text-slate-500 mb-8 max-w-sm mx-auto px-4">
                                Looks like you haven&apos;t added anything to your cart yet.
                            </p>
                            <Link
                                href="/menu"
                                className={buttonVariants({ variant: "default", size: "lg", className: "rounded-full px-10 h-12 bg-primary hover:bg-primary/90 text-white font-bold" })}
                            >
                                Browse Menu
                            </Link>
                        </div>
                    )}

                    {items.length > 0 && (
                        <Link
                            href="/menu"
                            className={buttonVariants({ variant: "ghost", className: "rounded-full hover:bg-slate-100" })}
                        >
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Continue Shopping
                        </Link>
                    )}
                </div>

                {/* Summary */}
                {items.length > 0 && (
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 space-y-6 sticky top-24">
                            <h3 className="text-xl font-bold text-primary">Order Summary</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between text-slate-500">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-primary">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-500">
                                    <span>Delivery Fee</span>
                                    <span className="font-bold text-primary">${deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="h-px bg-slate-100" />
                                <div className="flex justify-between text-xl">
                                    <span className="font-bold text-primary">Total</span>
                                    <span className="font-black text-accent">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20 mb-6">
                                    <p className="text-xs text-accent font-bold uppercase tracking-wider mb-2">Promo Code</p>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter code"
                                            className="flex-1 bg-white border border-slate-200 rounded-lg px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                                        />
                                        <Button size="sm" className="bg-primary text-white hover:bg-primary/90 rounded-lg font-bold">Apply</Button>
                                    </div>
                                </div>

                                <Link
                                    href="/checkout"
                                    className={buttonVariants({ variant: "default", size: "lg", className: "w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg group shadow-xl shadow-primary/10" })}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Proceed to Checkout
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </div>

                            <p className="text-center text-[10px] text-slate-400">
                                Tax calculated at checkout. Free delivery for first time orders.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
