const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
    theme: {
        colors: {
            primary: colors.cyan,
            secondary: colors.emerald,
            gray: colors.gray,
            white: colors.white,
            black: colors.black,
            transparent: "transparent",
        },
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
