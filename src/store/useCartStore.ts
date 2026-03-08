import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, FoodItem } from '@/types';

interface CartState {
    items: CartItem[];
    addItem: (product: FoodItem, quantity?: number, selectedSize?: string, selectedExtras?: string[]) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product, quantity = 1, selectedSize, selectedExtras = []) => {
                const items = get().items;
                const existingItemIndex = items.findIndex(
                    (item) =>
                        item.id === product.id &&
                        item.selectedSize === selectedSize &&
                        JSON.stringify(item.selectedExtras) === JSON.stringify(selectedExtras)
                );

                if (existingItemIndex !== -1) {
                    const updatedItems = [...items];
                    updatedItems[existingItemIndex].quantity += quantity;
                    updatedItems[existingItemIndex].totalPrice = updatedItems[existingItemIndex].quantity * product.price;
                    set({ items: updatedItems });
                } else {
                    set({
                        items: [
                            ...items,
                            {
                                ...product,
                                quantity,
                                selectedSize,
                                selectedExtras,
                                totalPrice: quantity * product.price,
                            },
                        ],
                    });
                }
            },
            removeItem: (itemId) => {
                set({
                    items: get().items.filter((item) => item.id !== itemId),
                });
            },
            updateQuantity: (itemId, quantity) => {
                const updatedItems = get().items.map((item) => {
                    if (item.id === itemId) {
                        return {
                            ...item,
                            quantity,
                            totalPrice: quantity * item.price,
                        };
                    }
                    return item;
                });
                set({ items: updatedItems });
            },
            clearCart: () => set({ items: [] }),
            getTotalPrice: () => {
                return get().items.reduce((total, item) => total + item.totalPrice, 0);
            },
            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },
        }),
        {
            name: 'food-site-cart',
        }
    )
);
