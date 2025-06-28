export interface NavItems {
    label: string;
    path: string;
}

export interface Products {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    imageUrl: string;
    currency: string;
    promo: boolean;
    promoPrice: number | null;
}