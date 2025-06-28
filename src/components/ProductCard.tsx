import { type Products } from "../interfaces/appInterface";
import { formatCurrency } from "../lib/helperFunctions";
import { type MouseEvent } from "react";


const ProductCard = ({product, addToCart}: {product: Products, addToCart: (event: MouseEvent<HTMLButtonElement>) => void}) => {


  return (
    <div className='bg white rounded-lg w-80 p-4 shadow-2xl hover:scale-105 ease-in-out transition-all duration-300 cursor-pointer'>
            <div className='flex flex-col gap-4'>
                {
                    product.imageUrl && (<img src={product.imageUrl} alt={product.name} className='w-full' />)
                }
                <h4 className='text-lg font-medium'>{product.name}</h4>
                <p className='text-gray-400 text-sm'>{product.description}</p>
                <p className='font-bold text-sm'>{formatCurrency(product.price)}</p>
                <button onClick={addToCart} className='bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300'>
                    Add To Cart
                </button>
            </div>
        </div>
  )
}

export { ProductCard }