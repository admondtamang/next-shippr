import Layout from "../components/Layout";
import Home from "./Home";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ScreenContext } from "../contexts/ScreenContext";

export default function index() {
    const mobileScreen = useMediaQuery("(max-width:600px)");
    return (
        <ScreenContext.Provider value={{ mobileScreen }}>
            <Layout>
                <Home />
            </Layout>
        </ScreenContext.Provider>
    );
}
