import cartIcon from "../assets/icon-cart.svg";
import deleteIcon from "../assets/icon-delete.svg";
import { useState } from "react";
function Cart(props) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }
  return (
    <div className="relative ">
      <img
        src={cartIcon}
        alt="cart icon"
        className="cursor-pointer sm:h-6 h-4 group hover:brightness-0 focus:brightness-0"
        onMouseEnter={toggleCart}
        onMouseLeave={toggleCart}
        onClick={toggleCart}
      />
      {props.cartItems.length > 0 && (
        <div
          className="absolute -top-2 -right-2 bg-[#ff7d1a] text-white rounded-full sm:w-5 w-4 sm:h-5 h-3 flex items-center justify-center text-xs font-bold"
        >
          {props.cartItems.length}
        </div>
      )}
      <div>
        {isCartOpen && (
          <div className="absolute sm:top-14 top-12 sm:-right-10 -right-12 flex flex-col bg-white sm:w-80 w-82 rounded-lg drop-shadow-2xl min-h-fit z-40">
            <div className="text-gray-700 font-bold border-b-2 border-[#f7f8fd] p-4">
              Cart
            </div>

            <div className="flex flex-col items-center justify-center p-4 min-h-40">
              <div className="text-[#68707d] font-bold">
                {props.cartItems.length === 0 && (
                  <div className="flex items-center justify-center h-full">
                    Your cart is empty.
                  </div>
                )}
                {props.cartItems.length > 0 && (
                  <div className="flex flex-col gap-4 w-full">
                    {props.cartItems.map((item, index) => (
                      <div key={index} className="flex gap-4 items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="sm:h-12 h-12 rounded-md"
                        />
                        <div className="flex flex-col h-full font-medium text-sm justify-between gap-1 text-[#b6bcc8]">
                          <span className="">{item.name}</span>
                          <span className="flex gap-2 items-center">
                            ${item.price.toFixed(2)} x {item.count}
                            <div className="font-bold text-black">
                              ${(item.price * item.count).toFixed(2)}
                            </div>
                          </span>
                        </div>
                        <img
                          src={deleteIcon}
                          alt="delete icon"
                          className="cursor-pointer"
                          onClick={() => props.removeFromCart(index)}
                        />
                      </div>
                    ))}
                    <button className="flex text-sm items-center justify-center cursor-pointer  bg-[#ff7d1a] hover:brightness-125 hover:opacity-95 text-black font-bold py-4 rounded-xl">
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
