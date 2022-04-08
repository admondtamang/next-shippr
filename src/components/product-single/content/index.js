import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { ADD_TO_CART } from "../../../redux/cart/cartSlice";
import { CustomLink, CustomImage } from "../..";
import OutlineButton from "../../OutlineButton";
import { shouldForwardProp } from "@mui/styled-engine";
import { useRouter } from "next/router";
import { useNotifications } from "@mantine/notifications";
import { ProductAttributes } from "./product-attributes";

const Content = ({ product }) => {
    const dispatch = useDispatch();
    const notifications = useNotifications();

    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [attributes, setAttributes] = useState({});

    let discount;

    const { id, price, variations, name, on_sale, sku, categories, description, brands, regular_price, images } = product;
    // const pictures = images?.map((img, index) => {
    //   return { uri: img.src, key: index };
    // });
    console.log("varitation", variations);

    if (regular_price) {
        discount = ((regular_price - price) / regular_price) * 100;
        discount = discount.toFixed(0);
    }

    // image validation choosing 1st image
    const image = images?.length <= 0 || !images ? "https://facebook.github.io/react/img/logo_small.png" : images[0].src;

    const addToCart = () => {
        dispatch(
            ADD_TO_CART({
                id: id,
                variation_id: 0,
                quantity: quantity,
                thumb: image,
                price,
                name,
            })
        );
        notifications.showNotification({
            title: "Success",
            message: "Succesfully added to cart! 🤥",
        });
    };

    function handleQuantity(value) {
        if (value < 1) setQuantity(1);
        else setQuantity(value);
    }
    function handleBrandRoute(value) {
        router.push({
            pathname: "/search",
            query: { searchTerm: value },
        });
    }
    function handleAttribute(attribute) {
        setAttributes((prev) => ({
            ...prev,
            ...attribute,
        }));
    }

    return (
        <section className="container flex flex-col gap-8">
            <div className="product-filter-item">
                {regular_price && <div className="pill w-11">Sale</div>}
                <h1 className="text-3xl font-light h2 mb-3">{name}</h1>
                <p className="text-3xl">
                    Rs. {price} {regular_price && <span className="text-2xl line-through ml-4 text-gray-400">Rs. {regular_price}</span>}
                </p>
            </div>

            {/* <div className="div">
                <h5 className="text-sm mb-2 text-gray-400">Size:</h5>
            </div> */}

            {/* {Object.keys(variations).map((variation) => {
                console.log(variation);
                return (
                    <ProductAttributes
                        key={`popup-attribute-key${variation}`}
                        title={variation}
                        attributes={variations[variation]}
                        active={attributes[variation]}
                        onClick={handleAttribute}
                    />
                );
            })} */}

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

            {/* categories */}
            {categories.length > 0 && (
                <div className="product-filter-item ">
                    <h5 className="text-sm mb-2 text-gray-400">Categories:</h5>
                    {categories.map((cat, index) => (
                        <CustomLink to="/" key={index}>
                            <span dangerouslySetInnerHTML={{ __html: cat.name + ", " }} />
                        </CustomLink>
                    ))}
                </div>
            )}
            {/* sku */}
            {sku && (
                <div className="product-filter-item ">
                    <h5 className="text-sm mb-2 text-gray-400">Sku: </h5>
                    <p className="font-normal">{sku}</p>
                </div>
            )}

            {/* Store */}
            {typeof brands == "object" && brands[0]?.name && (
                <div className="border-2 flex-wrap border-gray-200 p-4 rounded-lg flex-center-between  gap-4  md:flex-nowrap">
                    <h1 className="font-bold text-xl text-gray-800">{brands[0].name}</h1>
                    <OutlineButton label={"Visit Store"} icon="chevron-right" onClick={() => handleBrandRoute(brands[0].name)} />
                </div>
            )}

            {/* {typeof brands == "object" && brands[0]?.name && (
        <div className="border-2 flex-wrap border-gray-200 p-6 rounded-lg flex  gap-4  md:flex-nowrap">
          <CustomImage
            src={
              brands[0]?.vendor_shop_logo ||
              "https://facebook.github.io/react/img/logo_small.png"
            }
            layout="responsive"
            width={100}
            height={100}
            className="object-cover rounded-lg md:h-full "
          />
          <div className="text-left">
            <h1 className="font-bold text-xl text-gray-800">
              {brands[0].name}
            </h1>
            <span className="text-gray-500">{store.vendor_address}</span>
          </div>
          <OutlineButton label={"Visit Store"} no_spacing />
        </div>
      )} */}
        </section>
    );
};

export default Content;
