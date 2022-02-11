import("boxicons");
import "../styles/main.scss";
import { wrapper } from "../redux/configureStore";

import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

export default wrapper.withRedux(MyApp);
