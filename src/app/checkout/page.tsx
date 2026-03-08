"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    CheckCircle2,
    MapPin,
    CreditCard,
    Truck,
    ChevronRight,
    ArrowLeft,
    ArrowRight,
    ShoppingBag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LocationPicker } from "@/components/location/LocationPicker";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Step = 'address' | 'delivery' | 'payment' | 'confirmation';

export default function CheckoutPage() {
    const [step, setStep] = useState<Step>('address');
    const { items, getTotalPrice, clearCart } = useCartStore();
    const router = useRouter();

    if (items.length === 0 && step !== 'confirmation') {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                <Link
                    href="/menu"
                    className={buttonVariants({ variant: "default", className: "mt-4" })}
                >
                    Browse Menu
                </Link>
            </div>
        );
    }

    const steps = [
        { id: 'address', label: 'Address', icon: MapPin },
        { id: 'delivery', label: 'Delivery', icon: Truck },
        { id: 'payment', label: 'Payment', icon: CreditCard },
    ];

    const handlePlaceOrder = () => {
        setStep('confirmation');
        setTimeout(() => {
            clearCart();
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
            {/* Progress Stepper */}
            {step !== 'confirmation' && (
                <div className="mb-12">
                    <div className="flex justify-between items-center relative after:absolute after:h-1 after:w-full after:bg-slate-100 after:top-1/2 after:-translate-y-1/2 after:-z-10 px-4 md:px-20">
                        {steps.map((s, idx) => {
                            const currentIdx = steps.findIndex(x => x.id === step);
                            const isActive = idx <= currentIdx;
                            return (
                                <div key={s.id} className="flex flex-col items-center gap-3">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-accent text-primary shadow-lg shadow-accent/20" : "bg-white text-slate-300 border-2 border-slate-100"
                                        }`}>
                                        <s.icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? "text-primary" : "text-slate-300"
                                        }`}>
                                        {s.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Form Area */}
                <div className="lg:col-span-2">
                    <AnimatePresence mode="wait">
                        {step === 'address' && (
                            <motion.div
                                key="address"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center justify-between">
                                    <h2 className="text-3xl font-black text-primary">Delivery Address</h2>
                                </div>
                                <LocationPicker onSelect={() => setStep('delivery')} />
                                <div className="flex justify-end pt-6">
                                    <Button
                                        size="lg"
                                        onClick={() => setStep('delivery')}
                                        className="rounded-2xl px-10 h-14 bg-primary text-white font-black group"
                                    >
                                        Next Step
                                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 'delivery' && (
                            <motion.div
                                key="delivery"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <Button variant="ghost" size="icon" onClick={() => setStep('address')} className="rounded-xl">
                                        <ArrowLeft className="w-5 h-5" />
                                    </Button>
                                    <h2 className="text-3xl font-black text-primary">Delivery Details</h2>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { id: 'standard', label: 'Standard Delivery', price: 2.50, time: '30-45 mins' },
                                        { id: 'express', label: 'Express Priority', price: 5.00, time: '15-25 mins' },
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setStep('payment')}
                                            className="flex items-center justify-between p-6 rounded-[2rem] border-2 border-slate-100 hover:border-accent hover:shadow-xl transition-all group bg-white"
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                                    <Truck className="w-8 h-8 text-slate-400 group-hover:text-accent" />
                                                </div>
                                                <div className="text-left">
                                                    <p className="font-bold text-xl text-primary">{opt.label}</p>
                                                    <p className="text-slate-500">{opt.time}</p>
                                                </div>
                                            </div>
                                            <span className="text-xl font-black text-accent">${opt.price.toFixed(2)}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 'payment' && (
                            <motion.div
                                key="payment"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <Button variant="ghost" size="icon" onClick={() => setStep('delivery')} className="rounded-xl">
                                        <ArrowLeft className="w-5 h-5" />
                                    </Button>
                                    <h2 className="text-3xl font-black text-primary">Payment Method</h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { id: 'cash', label: 'Cash on Delivery', sub: 'Pay when you receive', icon: MapPin },
                                        { id: 'card', label: 'Credit / Debit Card', sub: 'Secure online payment', icon: CreditCard },
                                    ].map((pay) => (
                                        <button
                                            key={pay.id}
                                            onClick={() => handlePlaceOrder()}
                                            className="p-8 rounded-[2.5rem] border-2 border-slate-100 hover:border-accent hover:shadow-xl transition-all group bg-white text-center space-y-4"
                                        >
                                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/10 transition-colors">
                                                <pay.icon className="w-10 h-10 text-slate-400 group-hover:text-accent" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-xl text-primary">{pay.label}</p>
                                                <p className="text-sm text-slate-500">{pay.sub}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 'confirmation' && (
                            <motion.div
                                key="confirmation"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10 space-y-8"
                            >
                                <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 10, stiffness: 100 }}
                                    >
                                        <CheckCircle2 className="w-20 h-20 text-green-500" />
                                    </motion.div>
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-4xl font-black text-primary">Order Confirmed!</h2>
                                    <p className="text-slate-500 text-lg">Thank you for ordering. Your meal is being prepared.</p>
                                    <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mt-4">Order ID: #FOD-8829-192</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                                    <Link
                                        href="/orders"
                                        className={buttonVariants({ variant: "default", size: "lg", className: "rounded-full px-12 h-14 bg-primary text-white font-bold" })}
                                    >
                                        Track My Order
                                    </Link>
                                    <Link
                                        href="/"
                                        className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-12 h-14 border-slate-200" })}
                                    >
                                        Back to Home
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Order Summary Sidebar */}
                {step !== 'confirmation' && (
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 space-y-6 sticky top-24">
                            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-accent" />
                                Review Order
                            </h3>

                            <div className="max-h-60 overflow-y-auto space-y-4 no-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-primary truncate">{item.name}</p>
                                            <p className="text-[10px] text-slate-500">Qty: {item.quantity} × ${item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px bg-slate-100" />

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm text-slate-500">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-primary">${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-500">
                                    <span>Delivery Fee</span>
                                    <span className="font-bold text-primary">$2.50</span>
                                </div>
                                <div className="flex justify-between text-lg pt-2">
                                    <span className="font-bold text-primary">Total</span>
                                    <span className="font-black text-accent">${(getTotalPrice() + 2.50).toFixed(2)}</span>
                                </div>
                            </div>

                            {step === 'payment' && (
                                <Button
                                    onClick={handlePlaceOrder}
                                    className="w-full h-14 rounded-2xl bg-accent hover:bg-accent/90 text-primary font-black group mt-4"
                                >
                                    Place My Order
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
