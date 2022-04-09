import CustomLink from "@/components/CustomLink";

const Breadcrumb = ({ currentPage }) => {
  return (
    <section className="breadcrumb py-4 ">
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
