import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import CustomLink from "../../components/CustomLink";
import Button from "../../components/Button";

const CheckoutPage = () => {
    const priceTotal = useSelector((state) => {
        const cartItems = state.cart.cartItems;
        let totalPrice = 0;
        if (cartItems.length > 0) {
            cartItems.map((item) => (totalPrice += item.price * item.quantity));
        }

        return totalPrice;
    });

    return (
        <Layout>
            <section className="cart">
                <div className="container">
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
                                            <input className="form__input form__input--sm" type="text" placeholder="First name" />
                                        </div>
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text" placeholder="Email" />
                                        </div>
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text" placeholder="Phone number" />
                                        </div>
                                    </div>

                                    <div className="form__input-row ">
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text" placeholder="Address" />
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
                                        <h3>Rs {priceTotal}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart-actions cart-actions--checkout">
                            <span className="cart__btn-back">
                                <CustomLink href="/cart">
                                    <i className="icon-left"></i> Back
                                </CustomLink>
                            </span>
                            <div className="cart-actions__items-wrapper">
                                {/* <button type="button" className="btn btn--rounded btn--border">
                                    Continue shopping
                                </button> */}
                                {/* <button type="button" className="btn btn--rounded btn--yellow">
                                    Proceed to checkout
                                </button> */}
                                <Button title="Continue shopping" />
                                <Button title="Proceed to checkout" borderd />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default CheckoutPage;
