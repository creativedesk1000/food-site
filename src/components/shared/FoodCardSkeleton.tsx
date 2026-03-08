"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const FoodCardSkeleton = () => {
    return (
        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm p-5 space-y-4 text-left">
            <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
            <div className="space-y-2">
                <div className="flex justify-between">
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-6 w-1/4" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex gap-2 pt-2">
                <Skeleton className="h-11 flex-1 rounded-xl" />
                <Skeleton className="h-11 w-11 rounded-xl" />
            </div>
        </div>
    );
};
