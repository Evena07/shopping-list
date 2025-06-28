export const formatCurrency = (price: number) => {
    return Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format(price)
}