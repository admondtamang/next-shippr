import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import CustomLink from "../../components/CustomLink";
import Button from "../../components/Button";
import { useState } from "react";
import { postPlaceOrder } from "../../api/checkout";
import Router from "next/router";
import { EMPTY_CART } from "../../redux/cart/cartSlice";
const CheckoutPage = () => {
  const [order, setOrder] = useState({});
  const cartItems = useSelector((state) => state.cart.cartItems);
  const priceTotal = useSelector((state) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.quantity));
    }

    return totalPrice;
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    console.log(e);
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys.length <= 0) {
      alert("please fill shipping address");
      return;
    }
    const values = {
      payment_method: "bacs",
      payment_method_title: "Cash on delivery",
      billing: order,
      line_items: cartItems.map(({ id, quantity }) => {
        return { product_id: id, quantity };
      }),
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "100.00",
        },
      ],
    };
    try {
      const result = await postPlaceOrder(values);
      debugger;
      Router.push({
        pathname: "/cart/order-success",
        query: { pid: result.data.id },
      });
      dispatch(EMPTY_CART());
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Layout>
      <section className="cart p-4 bg-white">
        <form className="container">
          <form className="form">
            <div className="cart__intro">
              <h3 className="cart__title">Shipping and Payment</h3>
              <CheckoutStatus step="checkout" />
            </div>

            <div className="checkout-content">
              <div className="checkout__col-6">
                {/* <div className="checkout__btns">
                                <button className="btn btn--rounded btn--yellow">Log in</button>
                                <button className="btn btn--rounded btn--border">Sign up</button>
                            </div> */}

                <div className="block">
                  <h3 className="block__title mb-4">Shipping information</h3>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="First name"
                        name="first_name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form__col">
                      <input
                        required
                        className="form__input form__input--sm"
                        name="last_name"
                        type="text"
                        onChange={handleChange}
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        required
                        onChange={handleChange}
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        onChange={handleChange}
                        required
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  <div className="form__input-row ">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        onChange={handleChange}
                        required
                        name="address_1"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="checkout__col-6">
                <div className="block">
                  <h3 className="block__title">Your cart</h3>
                  <CheckoutItems />

                  <div className="checkout-total">
                    <p>Total cost</p>
                    <h3>Rs {priceTotal + 100} with delivery</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-center-between mt-20">
              <span className="cart__btn-back">
                {/* <CustomLink
                  href="/cart"
                  className="border-2 border-gray-600 p-5 px-4 py-3 rounded-full"
                >
                  <i className="icon-left"></i> Back
                </CustomLink> */}

                <Button
                  title="Back"
                  variant="icon-button"
                  boxIcon="left-arrow-alt"
                />
              </span>

              <div className="flex gap-2">
                <Button
                  title="Continue shopping"
                  borderd
                  variant="icon-button"
                  boxIcon="shopping-bag"
                />

                <Button
                  title="Proceed to checkout"
                  variant="icon-button"
                  href="/"
                  type="submit"
                  onClick={handleSubmit}
                  primary
                  boxIcon="right-arrow-alt"
                />
              </div>
            </div>
          </form>
        </form>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
