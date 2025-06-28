import { type NavItems, type Products } from "../interfaces/appInterface";

export const navMenu: NavItems[] = [
    {
        label: 'Home',
        path: '/home'
    },
    {
        label: 'Wishlist',
        path: '/wishlist'
    },
    {
        label: 'Promo',
        path: '/promo'
    },
    {
        label: 'Categories',
        path: '/categories'
    }
]

export const shopProducts: Products[] = [
    {
        id: 78,
        name: 'Sardine Bread',
        price: 2500,
        category: 'Pastry',
        description: 'A delicious, double kneeded, cheesy crusted, sardine filled bread.',
        imageUrl: '',
        currency: '$',
        promo: false,
        promoPrice: null
    },
    {
        id: 79,
        name: 'Chocolate Cake',
        price: 3000,
        category: 'Dessert',
        description: 'A rich and moist chocolate cake with creamy frosting.',
        imageUrl: '',
        currency: '$',
        promo: true,
        promoPrice: 2500
    },
    {
        id: 80,
        name: 'Veggie Pizza',
        price: 2000,
        category: 'Pizza',
        description: 'A delicious pizza topped with fresh vegetables and cheese.',
        imageUrl: '',
        currency: '$',
        promo: false,
        promoPrice: null
    },
    {
        id: 81,
        name: 'Fruit Smoothie',
        price: 1500,
        category: 'Beverage',
        description: 'A refreshing smoothie made with seasonal fruits.',
        imageUrl: '',
        currency: '$',
        promo: true,
        promoPrice: 1200
    },
    {
        id: 82,
        name: 'Chicken Sandwich',
        price: 1800,
        category: 'Sandwich',
        description: 'A grilled chicken sandwich with lettuce and tomato.',
        imageUrl: '',
        currency: '$',
        promo: false,
        promoPrice: null
    },
    {
        id: 83,
        name: 'Caesar Salad',
        price: 2200,
        category: 'Salad',
        description: 'A classic Caesar salad with croutons and parmesan cheese.',
        imageUrl: '',
        currency: '$',
        promo: true,
        promoPrice: 1800
    },
    {
        id: 84,
        name: 'Spaghetti Bolognese',
        price: 2700,
        category: 'Pasta',
        description: 'A hearty spaghetti dish with a rich goat meat sauce.',
        imageUrl: '',
        currency: '$',
        promo: false,
        promoPrice: null
    },
    {
        id: 85,
        name: 'Ice Cream Sundae',
        price: 1600,
        category: 'Dessert',
        description: 'A delightful ice cream sundae topped with chocolate syrup.',
        imageUrl: '',
        currency: '$',
        promo: true,
        promoPrice: 1400
    },
    {
        id: 86,
        name: 'Grilled Salmon',
        price: 3500,
        category: 'Seafood',
        description: 'A perfectly grilled salmon fillet served with lemon butter sauce.',
        imageUrl: '',
        currency: '$',
        promo: false,
        promoPrice: null
    },
    {
        id: 87,
        name: 'Beef Tacos',
        price: 2000,
        category: 'Mexican',
        description: 'Spicy beef tacos served with fresh salsa and guacamole.',
        imageUrl: '',
        currency: '$',
        promo: true,
        promoPrice: 1700
    },
    {
        id: 88,
        name: 'Caprese Salad',
        price: 1900,
        category: 'Salad',
        description: 'A fresh salad with mozzarella, tomatoes, and basil.',
        imageUrl: '',
        currency: '$',
        promo: false,
        promoPrice: null
    },
    {
        id: 89,
        name: 'Chocolate Chip Cookies',
        price: 1200,
        category: 'Dessert',
        description: 'Warm chocolate chip cookies straight from the oven.',
        imageUrl: '',
        currency: '$',
        promo: true,
        promoPrice: 1000
    },
    {
        id: 90,
        name: 'Greek Yogurt Parfait',
        price: 1300,
        category: 'Breakfast',
        description: 'A healthy parfait with Greek yogurt, granola, and berries.',
        imageUrl: '',
        currency: '$',
        promo: false,
        promoPrice: null
    },
    {
        id: 91,
        name: 'BBQ Ribs',
        price: 4000,
        category: 'Meat',
        description: 'Tender BBQ ribs served with coleslaw and cornbread.',
        imageUrl: '',
        currency: '$',
        promo: true,
        promoPrice: 3500
    }
]