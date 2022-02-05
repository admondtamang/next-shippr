import("boxicons");
import "../styles/main.scss";
import { wrapper } from "../redux/configureStore";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
