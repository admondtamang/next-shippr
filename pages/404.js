import CustomLink from "../components/CustomLink";
import LayoutError from "../components/Layout/404";

const ErrorPage = () => (
    <LayoutError>
        <section className="error-page">
            <div className="container">
                <h1>Error 404</h1>
                <p>Woops. Looks like this page doesn't exist</p>
                <CustomLink to="/">
                    <span className="btn btn--rounded btn--yellow">Go to home</span>
                </CustomLink>
            </div>
        </section>
    </LayoutError>
);

export default ErrorPage;
