import "../styles/main.scss";
import { wrapper } from "../redux/configureStore";
import SimpleReactLightbox from "simple-react-lightbox";

import useMediaQuery from "@mui/material/useMediaQuery";
import { ScreenContext } from "../contexts/ScreenContext";

if (typeof window !== "undefined") {
    // Client-side-only code
    import("boxicons");
}
function MyApp({ Component, pageProps }) {
    const mobileScreen = useMediaQuery("(max-width:600px)");
    return (
        <ScreenContext.Provider value={{ mobileScreen }}>
            <SimpleReactLightbox>
                <Component {...pageProps} />
            </SimpleReactLightbox>
        </ScreenContext.Provider>
    );
}

export default wrapper.withRedux(MyApp);
