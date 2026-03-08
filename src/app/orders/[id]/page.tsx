"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Truck, Utensils, Package, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function OrderTrackingPage() {
    const { id } = useParams();
    const router = useRouter();

    const steps = [
        { id: 'received', label: 'Order Received', icon: CheckCircle2, time: '12:30 PM', completed: true },
        { id: 'preparing', label: 'Preparing Food', icon: Utensils, time: '12:45 PM', completed: true },
        { id: 'on-the-way', label: 'On the Way', icon: Truck, time: 'Pending', completed: false, active: true },
        { id: 'delivered', label: 'Delivered', icon: Package, time: 'Pending', completed: false },
    ];

    return (
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
            <Button
                variant="ghost"
                onClick={() => router.push("/orders")}
                className="mb-8 hover:bg-slate-100 rounded-full"
            >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Orders
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Tracking Details */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-primary mb-2">Track Order</h2>
                                <p className="text-slate-500 font-medium">Order ID: <span className="text-accent">{id}</span></p>
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Arrival</p>
                                <p className="text-4xl font-black text-primary">15-20 <span className="text-accent text-lg uppercase tracking-normal">mins</span></p>
                            </div>
                        </div>

                        <div className="space-y-0 relative">
                            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-slate-100 -z-10" />

                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-start gap-8 pb-12 last:pb-0 relative"
                                >
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-3xl flex items-center justify-center transition-all shadow-lg ${step.completed ? "bg-green-500 text-white" : step.active ? "bg-accent text-primary scale-110 ring-8 ring-accent/10" : "bg-white text-slate-300 border-2 border-slate-100"
                                        }`}>
                                        <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>

                                    <div className="flex-1 pt-1 md:pt-3">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className={`text-lg md:text-xl font-black ${step.completed || step.active ? "text-primary" : "text-slate-300"}`}>
                                                {step.label}
                                            </h4>
                                            <span className="text-xs font-bold text-slate-400">{step.time}</span>
                                        </div>
                                        <p className={`text-sm md:text-md ${step.active ? "text-accent font-bold" : "text-slate-400"}`}>
                                            {step.active ? "Your order is with the delivery partner!" : step.completed ? "Task successfully completed." : "Waiting for previous step..."}
                                        </p>
                                    </div>

                                    {step.active && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            className="absolute left-[-4px] md:left-0 top-0 w-1 h-32 bg-accent rounded-full -z-10"
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Delivery Info Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-primary rounded-[2.5rem] p-8 text-white space-y-8">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Truck className="w-6 h-6 text-accent" />
                            Delivery Info
                        </h3>

                        <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10">
                                <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80" alt="Rider" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-lg text-white">Alex Johnson</p>
                                <div className="flex items-center gap-1 text-accent text-sm font-bold">
                                    <ArrowLeft className="w-3 h-3 rotate-45" />
                                    <span>4.9 Rider Rating</span>
                                </div>
                            </div>
                            <Button size="icon" className="ml-auto bg-white/10 hover:bg-white/20 rounded-xl">
                                <Phone className="w-5 h-5 text-accent" />
                            </Button>
                        </div>

                        <div className="h-px bg-white/10" />

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <MapPin className="w-6 h-6 text-accent shrink-0" />
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Pick up</p>
                                    <p className="font-bold text-sm">Gourmet Pizza Palace, Block 4</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <MapPin className="w-6 h-6 text-green-500 shrink-0" />
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Drop off</p>
                                    <p className="font-bold text-sm">123 My Sweet Home, 5th Floor</p>
                                </div>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold border-none">
                            Contact Support
                        </Button>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl">
                        <h4 className="font-bold text-primary mb-4">Summary</h4>
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span className="text-slate-500">Order Amount</span>
                            <span className="text-primary font-bold">$32.20</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
