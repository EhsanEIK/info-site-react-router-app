import React from 'react';

const Cart = ({ cart }) => {
    let quantity = 0;
    for (const item of cart) {
        quantity += item.quantity;
    }
    return (
        <div className='sticky'>
            <h2 className='text-4xl text-amber-400 font-bold mb-2'>Order Cart</h2>
            <hr />
            <div className='text-lg text-white mt-5'>
                <p>Total Items: {quantity}</p>
            </div>
        </div>
    );
};

export default Cart;