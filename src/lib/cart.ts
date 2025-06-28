import { type Products } from "../interfaces/appInterface";

export const cart: Products[] = [];

export const addToCart = (product: Products) => {
    const existingProductIndex = cart.filter((item) => item.id === product.id)
    
    if (existingProductIndex.length > 0) {
        // Product already in cart, update quantity or other properties if needed
        throw new Error('Product already in cart');
    } else {
        // Add new product to cart
        cart.push(product);
    }
};

export const removeFromCart = (product: Products) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    
    if (productIndex !== -1) {
        // Remove product from cart
        cart.splice(productIndex, 1);
    } else {
        throw new Error('Product not found in cart');
    }
};