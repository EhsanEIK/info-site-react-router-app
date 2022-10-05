import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Food = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    // loaded meals using api and set them on meals
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    const addToCart = (selectedMeal) => {
        let newCart = [];
        const exists = cart.find(meal => meal.idMeal === selectedMeal.idMeal);
        if (!exists) {
            selectedMeal.quantity = 1;
            newCart = [...cart, selectedMeal];
        }
        else {
            const rest = cart.filter(meal => meal.idMeal !== selectedMeal.idMeal);
            exists.quantity = exists['quantity'] + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        console.log(cart)
    }
    return (
        <div>
            <h2 className='text-center text-4xl mb-3'>Welcome to the Food House!!!</h2>
            <hr />
            <div>
                <div className='meal-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                    {
                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            handleAddToCart={addToCart}
                        ></Meal>)
                    }
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Food;