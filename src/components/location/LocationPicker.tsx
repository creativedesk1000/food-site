"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Navigation, CheckCircle2, Home, Briefcase, Plus } from "lucide-react";
import { motion } from "framer-motion";

interface LocationPickerProps {
    onSelect: (address: any) => void;
}

export const LocationPicker = ({ onSelect }: LocationPickerProps) => {
    const [search, setSearch] = useState("");
    const [savedAddresses] = useState([
        { id: "1", label: "Home", address: "123 Foodie Blvd, Gourmet City", icon: Home },
        { id: "2", label: "Office", address: "456 Tech Park, Innovate City", icon: Briefcase },
    ]);

    return (
        <div className="space-y-6">
            {/* Search Address */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                    placeholder="Search for your delivery address..."
                    className="pl-12 h-14 rounded-2xl border-slate-200 focus-visible:ring-accent shadow-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-accent hover:bg-accent/10 rounded-xl"
                >
                    <Navigation className="w-5 h-5" />
                </Button>
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-video bg-slate-100 rounded-[2.5rem] border-4 border-white shadow-inner overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=14&size=600x300&key=YOUR_API_KEY')] bg-cover opacity-50 transition-opacity hover:opacity-100" />
                <div className="relative z-10 text-center space-y-2">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto shadow-xl animate-bounce">
                        <MapPin className="w-6 h-6 text-primary fill-primary" />
                    </div>
                    <p className="font-bold text-primary bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm text-sm">
                        Gourmet City Center
                    </p>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6">
                    <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg font-bold">
                        Confirm Pin Location
                    </Button>
                </div>
            </div>

            {/* Saved Addresses */}
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <h4 className="font-bold text-primary">Saved Addresses</h4>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 p-0 h-auto">
                        <Plus className="w-4 h-4 mr-1" />
                        Add New
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {savedAddresses.map((addr) => (
                        <button
                            key={addr.id}
                            onClick={() => onSelect(addr)}
                            className="flex items-center gap-4 p-4 rounded-3xl border-2 border-slate-100 bg-white hover:border-accent hover:shadow-lg transition-all text-left group"
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                <addr.icon className="w-6 h-6 text-slate-400 group-hover:text-accent transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-primary">{addr.label}</p>
                                <p className="text-xs text-slate-500 truncate">{addr.address}</p>
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-slate-100 group-hover:border-accent flex items-center justify-center transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
