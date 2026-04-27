import { useState } from "react";
import close from "../assets/icon-close.svg";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
function LightBox(props) {
  const [currentImage, setCurrentImage] = useState(props.currentImage);
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
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/75 sm:flex hidden items-center justify-center z-50">
      <div className=" relative flex flex-col gap-4 w-1/3 h-4/5">
        <img
          src={close}
          alt="Close"
          className="cursor-pointer self-end brightness-200 hover:brightness-150"
          onClick={props.onClose}
        />
        <img
          src={currentImage}
          alt="Product"
          className="rounded-xl cursor-pointer w-full h-fit  object-cover "
        />
        <div
          onClick={goToPreviousImage}
          className="cursor-pointer overflow-hidden absolute top-3/7 bg-white rounded-full w-9 h-9 py-2 pl-1 pr-2 flex items-center justify-center -left-4"
        >
          <img src={previous} alt="Previous" className="object-contain" />
        </div>

        <div
          onClick={goToNextImage}
          className="cursor-pointer overflow-hidden absolute top-3/7 bg-white rounded-full w-9 h-9 py-2 pl-2 pr-1 flex items-center justify-center -right-4"
        >
          <img src={next} alt="Next" className="object-contain" />
        </div>
        <div className="sm:flex justify-between gap-5 hidden max-w-full">
          {props.images.map((image, index) => (
            <div
              className={`rounded-xl cursor-pointer h-fit overflow-hidden bg-white
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
      </div>
    </div>
  );
}
export default LightBox;
