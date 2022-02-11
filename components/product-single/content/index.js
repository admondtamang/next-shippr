import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { ADD_TO_CART } from "../../../redux/cart/cartSlice";

const Content = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    let discount;

    const { id, price, variations, name, on_sale, description, regular_price, images } = product;
    const pictures = images?.map((img) => {
        return { uri: img.src };
    });

    if (regular_price) {
        discount = ((regular_price - price) / regular_price) * 100;
        discount = discount.toFixed(0);
    }

    // image validation choosing 1st image
    const image = images.length <= 0 ? "https://facebook.github.io/react/img/logo_small.png" : images[0].src;

    const addToCart = () => {
        dispatch(ADD_TO_CART({ id: id, variation_id: 0, quantity: quantity, thumb: image, price, name }));
    };

    function handleQuantity(value) {
        if (value < 1) setQuantity(1);
        else setQuantity(value);
    }

    return (
        <section className="container flex flex-col gap-6">
            <div>
                {regular_price && <div className="pill w-11">Sale</div>}
                <h1 className="text-3xl font-light h2 mb-3">{name}</h1>
                <p className="text-3xl">
                    Rs. {price} {regular_price && <span className="text-2xl line-through ml-4 text-gray-400">Rs. {regular_price}</span>}
                </p>
            </div>

            {/* <div className="div">
                <h5 className="text-sm mb-2 text-gray-400">Size:</h5>
            </div> */}

            <div className="product-filter-item ">
                <h5 className="text-sm mb-2 text-gray-400">Quantity:</h5>
                <div className="quantity-buttons">
                    <div className="quantity-button">
                        <button type="button" onClick={() => handleQuantity(quantity - 1)} className="quantity-button__btn">
                            -
                        </button>
                        <span>{quantity}</span>
                        <button type="button" onClick={() => handleQuantity(quantity + 1)} className="quantity-button__btn">
                            +
                        </button>
                    </div>

                    <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">
                        Add to cart
                    </button>
                    {/* <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}> */}
                </div>
            </div>
        </section>
    );
};

export default Content;