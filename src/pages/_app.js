import "../styles/main.scss";
import { wrapper } from "../redux/configureStore";
import SimpleReactLightbox from "simple-react-lightbox";
import { NotificationsProvider } from "@mantine/notifications";

import useMediaQuery from "@mui/material/useMediaQuery";
import { ScreenContext } from "../contexts/ScreenContext";
import { QueryClient, Hydrate, QueryClientProvider } from "react-query";
import { MantineProvider } from "@mantine/core";

if (typeof window !== "undefined") {
    // Client-side-only code
    import("boxicons");
}
function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
    const mobileScreen = useMediaQuery("(max-width:600px)");
    return (
        <ScreenContext.Provider value={{ mobileScreen }}>
            <SimpleReactLightbox>
                <QueryClientProvider client={queryClient}>
                    <MantineProvider>
                        <NotificationsProvider>
                            <Hydrate state={pageProps.dehydratedState}>
                                <Component {...pageProps} />
                            </Hydrate>
                        </NotificationsProvider>
                    </MantineProvider>
                </QueryClientProvider>
            </SimpleReactLightbox>
        </ScreenContext.Provider>
    );
}

export default wrapper.withRedux(MyApp);
