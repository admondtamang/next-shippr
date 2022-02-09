// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CustomImage from "../../CustomImage";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
// import ImagePreview from "../../ImagePreview";
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function Gallery({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div className="flex w-6/12 gap-4 flex-col">
            {/* <ImagePreview images={images} /> */}

            <ModalGateway>
                {viewerIsOpen && (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={images.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                )}
            </ModalGateway>

            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={10}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-gallery"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <CustomImage
                            layout="responsive"
                            src={image.src}
                            alt=""
                            width={500}
                            height={600}
                            onClick={(e) => openLightbox(e, { index })}
                            className="swiper-lazy rounded shadow cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-gallery--navigation"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <CustomImage
                            layout="responsive"
                            src={image.src}
                            alt=""
                            width={200}
                            height={200}
                            className="swiper-lazy rounded shadow cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
