export default function Featured() {
  const featured = [
    {
      image: "/images/featured-1.jpg",
      type: "featured-item-large",
      title: "New arrivals are now in!",
      link: "#",
      linkTitle: "Show Collection",
    },
    {
      image: "/images/featured-2.jpg",
      type: "featured-item-small-first",
      title: "Basic t-shirts $29,99",
      link: "#",
      linkTitle: "More details",
    },
    {
      image: "/images/featured-3.jpg",
      type: "featured-item-small",
      title: "Sale this summer",
      link: "#",
      linkTitle: "VIEW ALL",
    },
  ];
  return (
    <>
      <section className="featured">
        <div className="container">
          {featured.map(({ title, image, type, link, linkTitle }, index) => (
            <article
              style={{ backgroundImage: `url(${image})` }}
              key={index}
              className={`featured-item ${type}`}
            >
              <div className="featured-item__content">
                <h3>{title}</h3>
                <a href={link} className="btn btn--rounded">
                  {linkTitle}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
