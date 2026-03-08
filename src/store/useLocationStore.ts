import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Address } from '@/types';

interface LocationState {
    selectedAddress: Address | null;
    setAddress: (address: Address) => void;
    clearAddress: () => void;
}

export const useLocationStore = create<LocationState>()(
    persist(
        (set) => ({
            selectedAddress: null,
            setAddress: (address) => set({ selectedAddress: address }),
            clearAddress: () => set({ selectedAddress: null }),
        }),
        {
            name: 'food-site-location',
        }
    )
);
