import React from 'react'
import ItemList from './ItemList'
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log({cartItems});
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems());
    }

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='font-bold text-2xl'>Cart</h1>
        <div className='w-6/12 m-auto'>
            {cartItems.length > 0 ?
            <> 
                <div className="flex justify-end mb-2">
                    <button className="bg-orange-500 text-white rounded-md shadow-md px-3 py-1 text-sm" onClick={handleClearCart}>
                        Clear Cart
                    </button> 
                </div>  
                <div className='bg-amber-50 border-gray-100 p-4 rounded-md shadow-md'>
                    <ItemList data={cartItems}/>
                </div> 
            </> :
            <div className='m-4 p-4 text-xl'>Your cart is empty!</div>}
            
        </div>
    </div>
  )
}

export default Cart
