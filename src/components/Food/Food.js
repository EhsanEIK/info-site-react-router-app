import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Food = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);
    return (
        <div>
            <h2 className='text-center text-4xl mb-3'>Welcome to the Food House!!!</h2>
            <hr />
            <div>
                <div className='meal-container grid md:grid-cols-3 grid-cols-2 gap-4 mt-10'>
                    {
                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                        ></Meal>)
                    }
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Food;