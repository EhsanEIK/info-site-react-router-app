// set data to local storage
const addToDb = id => {
    let foodCart = getFromDb();
    let quantity = foodCart[id];
    if (quantity) {
        quantity++;
        foodCart[id] = quantity;
    }
    else {
        foodCart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(foodCart));
}

// get data from local storage
const getFromDb = () => {
    let foodCart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }
    return foodCart;
}

export { addToDb, getFromDb };