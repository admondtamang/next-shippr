import { SRLWrapper } from "simple-react-lightbox";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

// Create an array of objects that you want to pass to the lightbox
const elements = [
  {
    src: "https://my/image.jpg",
    caption: "Lorem ipsum dolor sit amet",
    width: 1920,
    height: "auto",
  },
  {
    src: "https://my/second-image.jpg",
    thumbnail: "https://my/second-image-thumbnails.jpg",
    caption: "Commodo commodo dolore",
    width: 1024,
    height: "auto",
  },
  {
    src: "https://vimeo.com/458698330",
    thumbnail:
      "https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash05.jpg",
    caption: "Vimeo video",
    autoplay: false,
    showControls: true,
  },
];

function ImagePreview() {
  return <SRLWrapper elements={elements} />;
}

export default ImagePreview;
