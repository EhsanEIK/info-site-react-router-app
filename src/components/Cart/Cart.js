import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart, handleDeleteCart }) => {
    let totalItems = 0;
    for (const item of cart) {
        totalItems += item.quantity;
    }

    return (
        <div className='sticky'>
            <h2 className='text-4xl text-amber-400 font-bold mb-2'>Order Cart</h2>
            <hr />
            <div className='text-white mt-5'>
                <p className='text-xl font-semibold mb-2'>Total Items: {totalItems}</p>
                <ol className='text-lg list-decimal pl-5'>
                    {
                        cart.map(item =>
                            <li>{item.strMeal} : <span className='bg-red-400 text-base text-blue-700 font-bold border-2 rounded-md px-2'>{item.quantity}</span></li>)
                    }
                </ol>
            </div>
            <div>
                <button onClick={handleDeleteCart} className='bg-rose-600 text-white w-full rounded-lg mt-5 px-2 py-2 hover:bg-rose-700'>confirm order</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;