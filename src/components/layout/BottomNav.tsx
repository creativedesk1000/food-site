"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UtensilsCrossed, ShoppingCart, ClipboardList, User } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
    const pathname = usePathname();
    const totalItems = useCartStore((state) => state.getTotalItems());

    const navItems = [
        { label: "Home", icon: Home, href: "/" },
        { label: "Menu", icon: UtensilsCrossed, href: "/menu" },
        { label: "Cart", icon: ShoppingCart, href: "/cart", badge: totalItems },
        { label: "Orders", icon: ClipboardList, href: "/orders" },
        { label: "Account", icon: User, href: "/profile" },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 px-2 py-1">
            <div className="flex items-center justify-around h-16">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center gap-1 min-w-[64px] transition-all",
                                isActive ? "text-accent" : "text-slate-500"
                            )}
                        >
                            <div className="relative">
                                <item.icon className={cn("w-6 h-6", isActive && "stroke-[2.5px]")} />
                                {item.badge !== undefined && item.badge > 0 && (
                                    <span className="absolute -top-1 -right-1.5 h-4 w-4 bg-accent text-primary text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
