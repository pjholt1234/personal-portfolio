import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Gallery = ({ images, delay = 5 }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[imageIndex]);

  useEffect(() => {
    if (images.length <= 0) {
      return;
    }

    const intervalId = setInterval(() => {
      if (imageIndex >= images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }

      setCurrentImage(images[imageIndex]);
    }, delay * 1000);

    return () => clearInterval(intervalId);
  }, [imageIndex]);

  return (
    <div className="w-full">
      {currentImage != null ? (
        <img src={currentImage} alt="Gallery Image" />
      ) : (
        <h1>No images found :(</h1>
      )}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
  delay: PropTypes.number,
};

export default Gallery;
