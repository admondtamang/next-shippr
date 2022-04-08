import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

export default function ImagePreview({ images }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(true);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
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
    );
}
