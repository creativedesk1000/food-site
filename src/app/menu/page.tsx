"use client";

import { useState, useMemo, Suspense } from "react";
import { categories, foodItems } from "@/data/menu";
import { FoodCard } from "@/components/shared/FoodCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

function MenuContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeCategory = searchParams.get("category") || "all";
    const [searchQuery, setSearchQuery] = useState("");

    const filteredItems = useMemo(() => {
        return foodItems.filter((item) => {
            const matchesCategory = activeCategory === "all" || item.category === activeCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const setCategory = (slug: string) => {
        const params = new URLSearchParams(searchParams);
        if (slug === "all") {
            params.delete("category");
        } else {
            params.set("category", slug);
        }
        router.push(`/menu?${params.toString()}`);
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Header */}
            <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-primary mb-2">Our Menu</h1>
                    <p className="text-slate-500">Discover your next favorite meal</p>
                </div>

                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                        placeholder="Search for pizza, burgers..."
                        className="pl-10 h-12 rounded-2xl border-slate-200 focus-visible:ring-accent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-3 overflow-x-auto pb-6 mb-8 no-scrollbar">
                <Button
                    variant={activeCategory === "all" ? "default" : "outline"}
                    className={cn(
                        "rounded-full px-6 h-11 text-sm font-bold min-w-fit",
                        activeCategory === "all" ? "bg-primary text-white" : "border-slate-200 text-slate-500"
                    )}
                    onClick={() => setCategory("all")}
                >
                    All Items
                </Button>
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        variant={activeCategory === category.slug ? "default" : "outline"}
                        className={cn(
                            "rounded-full px-6 h-11 text-sm font-bold min-w-fit flex items-center gap-2",
                            activeCategory === category.slug ? "bg-primary text-white" : "border-slate-200 text-slate-500 hover:border-accent hover:text-accent"
                        )}
                        onClick={() => setCategory(category.slug)}
                    >
                        {category.name}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FoodCard item={item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            ) : (
                <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                    <h3 className="text-xl font-bold text-primary mb-2">No items found</h3>
                    <p className="text-slate-500">Try adjusting your search or category filters</p>
                    <Button
                        variant="link"
                        className="text-accent mt-4 font-bold"
                        onClick={() => {
                            setSearchQuery("");
                            setCategory("all");
                        }}
                    >
                        Clear all filters
                    </Button>
                </div>
            )}
        </div>
    );
}

export default function MenuPage() {
    return (
        <Suspense fallback={
            <div className="container mx-auto px-4 py-20 text-center text-slate-400">
                Loading delicious menu...
            </div>
        }>
            <MenuContent />
        </Suspense>
    );
}
