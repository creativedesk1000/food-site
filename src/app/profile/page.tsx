"use client";

import { useUserStore } from "@/store/useUserStore";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, LogOut, ChevronRight, Settings, CreditCard, Bell } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const { user, logout } = useUserStore();
    const router = useRouter();

    if (!user) {
        if (typeof window !== "undefined") router.push("/login");
        return null;
    }

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    const menuItems = [
        { label: "Settings", icon: Settings, color: "text-blue-500", bg: "bg-blue-50" },
        { label: "Payment Methods", icon: CreditCard, color: "text-purple-500", bg: "bg-purple-50" },
        { label: "Notifications", icon: Bell, color: "text-yellow-500", bg: "bg-yellow-50" },
    ];

    return (
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left: Profile Card */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 text-center space-y-6">
                        <div className="relative w-32 h-32 mx-auto">
                            <div className="w-full h-full bg-slate-100 rounded-[2rem] flex items-center justify-center text-slate-300 border-4 border-white shadow-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80" alt="Avatar" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-xl border-4 border-white flex items-center justify-center">
                                <User className="w-5 h-5 text-primary" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-primary">{user.name}</h2>
                            <p className="text-sm text-slate-500 font-medium">Joined Mar 2026</p>
                        </div>

                        <Button onClick={handleLogout} variant="ghost" className="w-full text-destructive hover:bg-destructive/10 rounded-2xl gap-2 font-bold h-12">
                            <LogOut className="w-4 h-4" /> Sign Out
                        </Button>
                    </div>

                    <div className="bg-primary rounded-[2rem] p-6 text-white text-center">
                        <p className="text-accent font-black text-3xl mb-1">5%</p>
                        <p className="text-xs uppercase tracking-widest font-bold opacity-60">Cashback on every order</p>
                        <Button className="mt-4 bg-white/10 hover:bg-white/20 w-full rounded-xl border-none">Upgrade to Gold</Button>
                    </div>
                </div>

                {/* Right: Info & Settings */}
                <div className="md:col-span-2 space-y-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-primary px-2">Account Info</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "Full Name", value: user.name, icon: User },
                                { label: "Email Address", value: user.email, icon: Mail },
                                { label: "Phone Number", value: user.phone, icon: Phone },
                                { label: "Primary Address", value: "Not set", icon: MapPin },
                            ].map((field) => (
                                <div key={field.label} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-4">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                                        <field.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{field.label}</p>
                                        <p className="font-bold text-primary truncate max-w-[150px]">{field.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-primary px-2">Settings</h3>
                        <div className="space-y-3">
                            {menuItems.map((item) => (
                                <button key={item.label} className="w-full bg-white px-6 py-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-accent transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-primary">{item.label}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-accent transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
