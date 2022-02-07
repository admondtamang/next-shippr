import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, ADD_TO_CART, DECREASE_CART, INCREASE_CART } from "../../../redux/cart/cartSlice";
// import { setCount } from './../../../store/actions/cartActions';

const ShoppingCart = (props) => {
    const { thumb, name, id, color, size, count, price } = props;
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(REMOVE_FROM_CART(props));
    };

    const setProductCount = (count) => {
        if (count <= 0) {
            return false;
        }

        dispatch(ADD_TO_CART({ id, variation_id: 0, count, thumb, price, name }));
    };

    return (
        <tr>
            <td>
                <div className="cart-product">
                    <div className="cart-product__img">
                        <img src={thumb} alt="" />
                    </div>

                    <div className="cart-product__content">
                        <h3>{name}</h3>
                        <p>#{id}</p>
                    </div>
                </div>
            </td>
            <td className="cart-item-before" data-label="Color">
                {color}
            </td>
            <td className="cart-item-before" data-label="Size">
                {size}
            </td>
            <td>
                <div className="quantity-button">
                    <button type="button" onClick={() => dispatch(INCREASE_CART({ id }))} className="quantity-button__btn">
                        -
                    </button>
                    <span>{count}</span>
                    <button type="button" onClick={() => dispatch(DECREASE_CART({ id }))} className="quantity-button__btn">
                        +
                    </button>
                </div>
            </td>
            <td>${price}</td>
            <td className="cart-item-cancel">
                <i className="icon-cancel" onClick={() => removeFromCart()}></i>
            </td>
        </tr>
    );
};

export default ShoppingCart;
