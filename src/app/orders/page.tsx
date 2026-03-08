"use client";

import { CheckCircle2, Package, Truck, Utensils, MapPin, ChevronRight, RotateCcw } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OrdersPage() {
    const orders = [
        {
            id: "ORD-9921",
            date: "24 Feb, 2026",
            total: 45.50,
            status: "delivered",
            items: "2x Pepperoni Pizza, 1x Coke Large"
        },
        {
            id: "ORD-9922",
            date: "08 Mar, 2026",
            total: 32.20,
            status: "preparing",
            items: "1x Double Cheese Burger, 1x Fries"
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "delivered": return "bg-green-500/10 text-green-600 border-green-500/20";
            case "preparing": return "bg-accent/10 text-accent border-accent/20";
            case "on-the-way": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
            default: return "bg-slate-100 text-slate-500";
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-black text-primary mb-2">My Orders</h1>
                    <p className="text-slate-500">Track and manage your recent orders</p>
                </div>
                <Link
                    href="/menu"
                    className={buttonVariants({ variant: "outline", className: "rounded-full border-slate-200" })}
                >
                    New Order
                </Link>
            </div>

            <div className="space-y-6">
                {orders.map((order, index) => (
                    <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all p-6 md:p-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-primary border border-slate-100 group-hover:bg-accent/10 transition-colors">
                                    <Package className="w-8 h-8 opacity-40 group-hover:text-accent transition-colors" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-lg text-primary">{order.id}</span>
                                        <Badge className={`font-bold uppercase tracking-wider text-[10px] ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-slate-400 font-medium">{order.date}</p>
                                </div>
                            </div>

                            <div className="h-px md:h-12 md:w-px bg-slate-100" />

                            <div className="flex-1 md:px-8">
                                <p className="text-sm font-medium text-slate-500 mb-1">Items</p>
                                <p className="font-bold text-primary truncate max-w-xs">{order.items}</p>
                            </div>

                            <div className="flex flex-col items-end gap-2 shrink-0">
                                <span className="text-2xl font-black text-primary">${order.total.toFixed(2)}</span>
                                <div className="flex gap-2">
                                    <Link
                                        href={`/orders/${order.id}`}
                                        className={buttonVariants({ variant: "default", size: "sm", className: "bg-primary hover:bg-primary/90 text-white rounded-xl px-6 h-10 font-bold" })}
                                    >
                                        Track
                                    </Link>
                                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl border border-slate-100 hover:bg-slate-50 text-slate-400 hover:text-primary transition-colors">
                                        <ChevronRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State Illustration would go here if no orders */}
        </div>
    );
}
