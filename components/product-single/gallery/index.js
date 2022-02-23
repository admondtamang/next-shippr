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
import { useState, useCallback, useContext } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import ImagePreview from "../ImagePreview";
import { ScreenContext } from "../../../contexts";

export default function Gallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { mobileScreen } = useContext(ScreenContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const noPicture = [
    {
      src: "https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png",
    },
  ];
  if (!images) {
    images = noPicture;
  }
  images = images?.length > 0 ? images : noPicture;
  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="flex w-6/12 h-full gap-8 flex-col">
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
        className="swiper-carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CustomImage
              layout="responsive"
              src={image.src}
              alt={image.src}
              width={mobileScreen ? 200 : 200}
              height={mobileScreen ? 300 : 150}
              onClick={(e) => openLightbox(e, { index })}
              className="rounded object-contain shadow w-full cursor-pointer"
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
        className="swiper-children"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CustomImage
              layout="responsive"
              src={image.src}
              alt=""
              width={mobileScreen ? 200 : 200}
              height={mobileScreen ? 250 : 150}
              className="swiper-lazy object-contain rounded shadow-lg border-2 bg-bg-white cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
