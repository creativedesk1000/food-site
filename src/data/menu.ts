import { Category, FoodItem } from "@/types";

export const categories: Category[] = [
    { id: "1", name: "Pizza", slug: "pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" },
    { id: "2", name: "Burger", slug: "burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    { id: "3", name: "Pasta", slug: "pasta", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&q=80" },
    { id: "4", name: "Sandwiches", slug: "sandwiches", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" },
    { id: "5", name: "Fries", slug: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" },
    { id: "6", name: "Drinks", slug: "drinks", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80" },
    { id: "7", name: "Desserts", slug: "desserts", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&q=80" },
    { id: "8", name: "Deals", slug: "deals", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
];

export const foodItems: FoodItem[] = [
    {
        id: "p1",
        name: "Double Cheese Margherita",
        description: "Classic delight with 100% real mozzarella cheese layered on our secret tomato sauce.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
        category: "pizza",
        rating: 4.8,
        isPopular: true,
        ingredients: ["Mozzarella", "Tomato Sauce", "Basil"],
        sizes: [
            { name: "Small", price: 12.99 },
            { name: "Medium", price: 15.99 },
            { name: "Large", price: 18.99 }
        ]
    },
    {
        id: "p2",
        name: "Pepperoni Passion",
        description: "Generous portions of pepperoni, mozzarella cheese and our signature sauce.",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
        category: "pizza",
        rating: 4.9,
        isPopular: true
    },
    {
        id: "b1",
        name: "Classic Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, onions and our special house sauce.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        category: "burger",
        rating: 4.7,
        isPopular: true
    },
    {
        id: "b2",
        name: "Zinger Crunch Burger",
        description: "Crispy chicken fillet with spicy mayo and shredded lettuce in a toasted bun.",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1513185158878-8d8c196b896b?w=800&q=80",
        category: "burger",
        rating: 4.9,
        isPopular: true
    },
    {
        id: "pa1",
        name: "Creamy Alfredo Pasta",
        description: "Penne pasta tossed in a rich and creamy white sauce with parmesan and garlic.",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1645112481338-3079633e08f5?w=800&q=80",
        category: "pasta",
        rating: 4.6,
        isPopular: false
    }
];
