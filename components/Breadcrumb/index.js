import CustomLink from "../CustomLink";

const Breadcrumb = ({ currentPage }) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <CustomLink href="/">
              <i className="icon-home"></i>
            </CustomLink>
          </li>
          <li>{currentPage}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
