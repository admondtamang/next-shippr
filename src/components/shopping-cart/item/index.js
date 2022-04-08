import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, ADD_TO_CART, DECREASE_CART, INCREASE_CART } from "../../../redux/cart/cartSlice";
import CustomImage from "../../CustomImage";
// import { setCount } from './../../../store/actions/cartActions';

const ShoppingCart = (props) => {
    const { thumb, name, id, color, variation_id, size, quantity, price } = props;
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(REMOVE_FROM_CART(props));
    };

    const setProductCount = (quantity) => {
        if (quantity <= 0) {
            console.log("quantity less");
            return false;
        }

        dispatch(ADD_TO_CART({ id, variation_id: 0, quantity, thumb, price, name }));
    };

    return (
        <tr>
            <td>
                <div className="cart-product">
                    <div className="cart-product__img">
                        <CustomImage width="500" height="500" src={thumb} alt={name} />
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
                    <button type="button" onClick={() => dispatch(DECREASE_CART(props))} className="quantity-button__btn">
                        -
                    </button>
                    <span>{quantity}</span>
                    <button type="button" onClick={() => dispatch(INCREASE_CART(props))} className="quantity-button__btn">
                        +
                    </button>
                </div>
            </td>
            <td>Rs {price}</td>
            <td className="cart-item-cancel">
                <i className="icon-cancel" onClick={() => removeFromCart()}></i>
            </td>
        </tr>
    );
};

export default ShoppingCart;
