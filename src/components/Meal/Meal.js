import React from 'react';

const Meal = ({ meal, handleAddToCart }) => {
    // console.log(meal);
    const { strArea, strMeal, strMealThumb, strInstructions } = meal;
    return (
        <div className='border-2 rounded-lg border-neutral-500 relative'>
            <div className='mb-3 p-5'>
                <img src={strMealThumb} alt={strMealThumb} />
                <h2 className='text-2xl font-bold mt-5'>{strMeal}</h2>
                <p className='text-xl font-bold'>Area: {strArea}</p>
                <p className='text-lg'>{strInstructions.slice(0, 100)}</p>
            </div>
            <div className='mt-28'>
                <button onClick={() => handleAddToCart(meal)} className='bg-teal-600 text-white rounded-sm w-full absolute bottom-0 px-2 py-4 hover:bg-teal-700'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Meal;