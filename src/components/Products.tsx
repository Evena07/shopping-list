import { shopProducts } from '../lib/constants'
import { ProductCard } from './ProductCard'
import { type Products } from '../interfaces/appInterface'
import { formatCurrency } from '../lib/helperFunctions'
import { useContext } from 'react'
import { AppContext } from "../context/AppContext";

const ProductPage = () => {

    const appContext = useContext(AppContext);

    const addProduct = (product: Products) => {
        try {
            // addToCart(product);
            appContext?.addToCart(product);
        } catch (error) {
            alert((error as Error).message);
        }
    }

  return (
    <div>
        <div className='grid grid-cols-3'>
            <div className='col-span-2'>
            <h4 className='bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 text-transparent bg-clip-text text-5xl text-center mt-4'>All Products</h4>
        <div className='flex flex-wrap justify-center gap-8 p-4'>
            {
                shopProducts.map((product, index) => (
                    <ProductCard key={index} product={product} addToCart={() => addProduct(product)} />
                ))
            }
        </div>
            </div>
            <div className='col-span-1 gap-6 h-screen overflow-y-scroll'>
                {
                    appContext?.cart.map((product, index) => (
                        <div key={index} className='bg-white shadow-xl rounded-2xl p-4 mb-8'>
                            <h1>{product.name}</h1>
                            <p>{formatCurrency(product.price)}</p>
                        </div>
                    ))
                }
                <hr />
                <div className='flex gap-4'>
                    <h1 className='text-2xl font-semibold'>Total:</h1>
                    <p className='text-2xl font-semibold'>{formatCurrency(appContext?.cart.reduce((acc, currentProduct) => { return acc + currentProduct.price }, 0) as number)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export { ProductPage }