import ImageProduct1 from "../assets/image-product-1.jpg";
import ImageProduct2 from "../assets/image-product-2.jpg";
import ImageProduct3 from "../assets/image-product-3.jpg";
import ImageProduct4 from "../assets/image-product-4.jpg";

import Counter from "./Counter";
import AddToCart from "./AddToCart";
import ProductImages from "./ProductImages";
import { useState } from "react";
function Body({addToCart}) {
  const [count, setCount] = useState(0);
  const product = {
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    image: ImageProduct1,
  };

  const imagesProduct = [
    ImageProduct1,
    ImageProduct2,
    ImageProduct3,
    ImageProduct4,
  ];
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between sm:py-16 sm:px-12 sm:gap-22 ">
      <ProductImages images={imagesProduct} />
      <div className=" flex flex-col sm:gap-6 gap-4 sm:py-10 pt-75 mb-4 sm:w-1/2">
        <span className="text-[#68707d] sm:text-sm text-xs font-bold tracking-wide">
          SNEAKER COMPANY
        </span>
        <h3 className="font-bold sm:text-5xl text-2xl">
          Fall Limited Edition Sneakers
        </h3>
        <p className="text-[#68707d] text-base">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex sm:flex-col gap-2 items-center sm:items-start justify-between sm:justify-start">
          <span className="flex gap-4 items-center">
            <div className="font-bold sm:text-3xl text-2xl">$125.00</div>
            <div className="sm:rounded-lg rounded-sm bg-black font-bold sm:text-base text-sm h-fit flex text-white items-center w-fit sm:px-3 px-2 sm:py-1 py-0">
              50%
            </div>
          </span>
          <span className="line-through text-[#68707d] font-bold sm:text-base text-sm">
            $250.00
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Counter count={count} setCount={setCount} />
          <AddToCart addToCart={addToCart} product={product} count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
}
export default Body;
