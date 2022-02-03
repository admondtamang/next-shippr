import category from "./json-category";
import jsonType from "./type";
import products from "./json-products";
// https://feathericons.com/
export default [
    {
        type: jsonType.home_banner,
        meta: "",
        icon: "dollar-sign",
        color: "black",
        title: "",
        items: [],
    },
    {
        type: jsonType.rounded_category,
        meta: "",
        items: [
            { id: 334, name: "beer", image: "https://image.flaticon.com/icons/png/512/1250/1250175.png" },
            { id: 335, name: "music", image: "https://image.flaticon.com/icons/png/512/1250/1250175.png" },
            { id: 336, name: "Gadget", image: "https://image.flaticon.com/icons/png/512/1250/1250175.png" },
            { id: 334, name: "food", image: "https://image.flaticon.com/icons/png/512/1250/1250175.png" },
            { id: 334, name: "beer", image: "https://image.flaticon.com/icons/png/512/1250/1250175.png" },
            { id: 334, name: "music", image: "https://image.flaticon.com/icons/png/512/1250/1250175.png" },
            { id: 334, name: "Gadget", image: "https://image.flaticon.com/icons/png/512/1250/1250175.png" },
            { id: 334, name: "food", image: "https://image.flaticon.com/icons/png/512/1250/1250175.png" },
        ],
        viewCatPage: 334,
        style: "py-6",
    },
    {
        type: jsonType.slider,
        meta: "",
        icon: "watch",
        color: "black",
        title: "",
        items: [
            {
                title: "Born ",
                url: "https://www.wallpapertip.com/wmimgs/15-154362_black-guitar-photos-wallpapers-guitar-wallpaper-hd.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                id: 334,
            },
            {
                title: "Acoustic Guitar",
                url: "https://wallpaperaccess.com/full/3560410.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                id: 335,
            },
            {
                title: "Electric Guitar",
                url: "https://wallpaperboat.com/wp-content/uploads/2019/04/electric-guitar-001.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                id: 336,
            },
        ],
    },
    {
        type: jsonType.category,
        meta: "",
        title: "Top Categories",
        icon: "at-sign",
        color: "black",
        items: category,
    },
    {
        type: jsonType.products_horizontal_small,
        meta: "",
        title: "Flash Sale",
        icon: "sale",
        color: "black",
        items: products,
        viewCatPage: 238,
    },
    {
        type: jsonType.products_horizontal_small,
        meta: "",
        title: "Latest Products",
        icon: "briefcase",
        color: "black",
        items: products,
        viewCatPage: 238,
    },
    {
        type: jsonType.products_horizontal_small,
        meta: "",
        title: "New Products",
        icon: "coffee",
        color: "red",
        items: products,
        viewCatPage: 334,
    },

    {
        type: jsonType.products_vertical,
        meta: "",
        title: "Featured Product",
        icon: "divide",
        color: "black",
        items: products,
        viewCatPage: 335,
    },
];
