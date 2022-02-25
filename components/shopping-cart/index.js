import { useSelector } from "react-redux";
import { Button } from "..";
import CheckoutStatus from "../../components/checkout-status";
import CustomLink from "../CustomLink";
import Item from "./item";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const priceTotal = useSelector((state) => {
    const cartItems = state.cart?.cartItems;
    let totalPrice = 0;
    if (cartItems?.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.quantity));
    }

    return totalPrice;
  });

  return (
    <section className="cart  bg-white p-4 mt-8 rounded-lg container">
      <div className="container ">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list ">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Product</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Ammount</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                {cartItems.map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    variation_id={item.variation_id}
                    color={item.color}
                    price={item.price}
                    size={item.size}
                    quantity={item.quantity}
                  />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Nothing in the cart</p>}
        </div>

        <div className="cart-actions">
          {/* <Button variant={"icon-button"} title="Continue Shopping" /> */}
          <div className="cart__btn-back bg-primary-200 rounded-full p-4 pr-8 hover:bg-primary-300">
            <CustomLink href="/">
              <i className="icon-left"></i> Continue Shopping
            </CustomLink>
          </div>
          {/* <input
            type="text"
            placeholder="Promo Code"
            className="cart__promo-code"
          /> */}

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Total cost <strong>Rs {priceTotal.toFixed(2)}</strong>
            </p>
            {priceTotal != 0 && (
              <CustomLink
                href="/cart/checkout"
                className="btn btn--rounded btn--yellow"
              >
                Checkout
              </CustomLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
