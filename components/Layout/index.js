import Head from "next/head";
import Header from "../Header";
import { useRouter } from "next/router";
import Footer from "../Footer";
import BottomNavigation from "../Mobile/MobileBottomNavigation";
import { ScreenContext } from "../../contexts";
import { useContext } from "react";

export default function Layout({ children, title = "Shippr Ecommerce" }) {
    const router = useRouter();
    const pathname = router.pathname;
    const { mobileScreen } = useContext(ScreenContext);
    return (
        <div className="app-main">
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={pathname !== "/" ? "main-page" : ""}>
                {children}
            </main>

            <div className="relative">
                <Footer />
                {mobileScreen && <BottomNavigation />}
            </div>
        </div>
    );
}
