import CustomImage from "../../CustomImage";

const Gallery = ({ images }) => {
    const featImage = images[0];

    return (
        <section className="product-gallery">
            <div className="product-gallery__thumbs">
                {images.map((image) => (
                    <div key={image} className="product-gallery__thumb">
                        <CustomImage
                            layout="responsive"
                            src={image || ""}
                            alt=""
                            width={500}
                            height={height || 150}
                            className="swiper-lazy rounded"
                        />
                    </div>
                ))}
            </div>

            <div className="product-gallery__image">
                <CustomImage
                    layout="responsive"
                    src={image || ""}
                    alt=""
                    width={500}
                    height={height || 150}
                    className="swiper-lazy rounded"
                />
            </div>
        </section>
    );
};

export default Gallery;
