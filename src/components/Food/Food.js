import React, { useEffect, useState } from 'react';
import { addToDb, deleteCartFromDb, getDataFromDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Food = () => {
    // loaded meals using api and set them on meals
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    // add to cart
    const [cart, setCart] = useState([]);
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
        addToDb(selectedMeal.idMeal);
        // console.log(cart)
    }

    // show cart items after 1st loading
    useEffect(() => {
        let storedCart = getDataFromDb();
        let newCart = [];
        for (const id in storedCart) {
            const existsMeal = meals.find(meal => meal.idMeal === id);
            if (existsMeal) {
                existsMeal.quantity = storedCart[id];
                newCart = [...newCart, existsMeal];
            }
        }
        setCart(newCart);
    }, [meals]);

    // delete cart from db and cart
    const deleteCart = () => {
        cart.length ? toast.success("Order is on the way!") : toast.error("Please select item first");
        deleteCartFromDb();
        setCart([]);
    }

    return (
        <div>
            <h2 className='text-center text-4xl mb-3'>Welcome to the Food House!!!</h2>
            <hr />
            <div className='meal-container grid md:grid-cols-4 grid-cols-1 gap-4 mt-10'>
                <div className='meal-container grid col-span-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                    {
                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            handleAddToCart={addToCart}
                        ></Meal>)
                    }
                </div>
                <div className='cart-container bg-slate-500 p-5'>
                    <Cart cart={cart}
                        handleDeleteCart={deleteCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Food;