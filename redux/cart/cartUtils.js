export const addItemTocart = (cartItems, cartItemToAdd) => {
    let cart;
    // if cart is empty
    if (cartItemToAdd.product_id === null) {
        return cartItems;
    }
    const existingCartItem = cartItems.find((cartItems) => cartItems.product_id === cartItemToAdd.product_id);

    if (existingCartItem) {
        // If it came from productDetail
        // if (existingCartItem.cameFromProductDetail) {
        //     return [...cartItems, { ...cartItemToAdd }];
        // }
        // Increase product quantiy when add to cart.
        // cart = cartItems.map(
        //     (item) =>
        //         item.id === existingCartItem.id ? (existingCartItem.variation_id === cartItemToAdd.id ? { ...cartItemToAdd } : item) : item //return same item

        //     // item.id === existingCartItem.id ? (item.variation_id===cartItemToAdd ? { ...item,{...item,variation_id:variation_id}  } : item) : item
        // );

        // if (existingCartItem.variation_id && existingCartItem.variation_id !== cartItemToAdd.variation_id) {
        //     cart.push({ ...cartItemToAdd });
        // }

        return cartItems;
    }

    // For the first time added to cart

    if (cartItemToAdd.quantity > 1) {
        return [...cartItems, { ...cartItemToAdd }];
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const increaseCartItem = (cartItems, cartItemToIncrese) => {
    const existingCartItem = cartItems.find((cartItems) => cartItems.product_id === cartItemToIncrese.product_id);
    if (existingCartItem) {
        // decrease for varitation product
        if (cartItemToIncrese.variation_id !== 0) {
            return cartItems.map((item) =>
                item.variation_id === cartItemToIncrese.variation_id ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        // for no varation product
        return cartItems.map((item) => (item.product_id === existingCartItem.product_id ? { ...item, quantity: item.quantity + 1 } : item));
    }
};
export const decreaseCartItem = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find((cartItems) => cartItems.product_id === cartItemToDecrease.product_id);
    if (existingCartItem) {
        // donot remove quantity if quantity is one
        if (existingCartItem.quantity <= 1) {
            return cartItems;
        }
        // decrease for varitation product
        if (cartItemToDecrease.variation_id) {
            return cartItems.map((item) =>
                item.variation_id === cartItemToDecrease.variation_id ? { ...item, quantity: item.quantity - 1 } : item
            );
        }
        // for no varation product
        return cartItems.map((item) => (item.product_id === existingCartItem.product_id ? { ...item, quantity: item.quantity - 1 } : item));
    }
};

export const removeItemfromCart = (cartItems, cartItemsToRemove) => {
    // remove for varitation product
    if (cartItemsToRemove.variation_id !== 0) {
        return cartItems.filter((cartItem) => cartItem.variation_id !== cartItemsToRemove.variation_id);
    } else return cartItems.filter((cartItem) => cartItem.product_id !== cartItemsToRemove.product_id);

    // console.log("remove", cartItemsToRemove);
    // cartItems.reduce((ack, item) => {
    //     if (item.id === cartItemsToRemove.id) {
    //         console.log("delete on quantity");

    //         if (item.quantity === 1) return ack;
    //         return [...ack, { ...item, quantity: item.quantity - 1 }];
    //     } else {
    //         console.log("Last");

    //         return [...ack, item];
    //     }
    // }, []);
};
