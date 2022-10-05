import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart)
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
        </div>
    );
};

export default Cart;