import { useState } from "react";
import LightBox from "./LightBox";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
function ProductImages(props) {
  const [currentImage, setCurrentImage] = useState(props.images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  function toggleZoom() {
    setIsZoomed((prev) => !prev);
  }
  function goToNextImage() {
    const currentIndex = props.images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % props.images.length;
    setCurrentImage(props.images[nextIndex]);
  }
  function goToPreviousImage() {
    const currentIndex = props.images.indexOf(currentImage);
    const previousIndex =
      (currentIndex - 1 + props.images.length) % props.images.length;
    setCurrentImage(props.images[previousIndex]);
  }

  return (
    <div className=" w-dvw flex flex-col gap-6 absolute sm:relative left-0 sm:w-1/2">
      <img
        src={currentImage}
        alt="Product"
        className="sm:rounded-xl cursor-pointer w-dvw sm:w-full h-70 sm:h-fit  object-cover sm:object-contain"
        onClick={toggleZoom}
      />

      <div
        onClick={goToPreviousImage}
        className="cursor-pointer overflow-hidden absolute top-30 bg-white rounded-full w-9 h-9 p-2 flex sm:hidden items-center justify-center left-3"
      >
        <img src={previous} alt="Previous" className="object-contain" />
      </div>

      <div
        onClick={goToNextImage}
        className="cursor-pointer overflow-hidden absolute top-30 bg-white rounded-full w-9 h-9 p-2 flex sm:hidden items-center justify-center right-3"
      >
        <img src={next} alt="Next" className="object-contain" />
      </div>

      <div className="sm:flex justify-between gap-5 hidden max-w-full">
        {props.images.map((image, index) => (
          <div
            className={`rounded-xl cursor-pointer h-fit overflow-hidden
              ${currentImage === image ? "border-2 border-[#ff7d1a] " : "border-transparent"}
              `}
            key={index}
            onClick={() => setCurrentImage(image)}
          >
            <img
              src={image}
              alt="Product thumbnail"
              className={`hover:opacity-40 ${currentImage === image ? " opacity-30" : ""}`}
            />
          </div>
        ))}
      </div>
      {isZoomed && (
        <LightBox
          images={props.images}
          currentImage={currentImage}
          onClose={toggleZoom}
        />
      )}
    </div>
  );
}

export default ProductImages;
