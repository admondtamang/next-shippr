import ToolTipWithButton from "../ToolTipWithButton";

const CheckoutStatus = ({ step }) => {
    return (
        <div className="checkout-status">
            <ul className="checkout-steps">
                <li className={`${step === "cart" ? "active" : "done"}`}>
                    <ToolTipWithButton title="Cart">
                        <i className="icon-cart"></i>
                    </ToolTipWithButton>
                </li>
                <li className={`${step === "checkout" ? "active" : "done"}`}>
                    <ToolTipWithButton title="Checkout">
                        <i className="icon-delivery"></i>
                    </ToolTipWithButton>
                </li>
            </ul>
        </div>
    );
};

export default CheckoutStatus;
