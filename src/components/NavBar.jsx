import imageAvatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import Cart from "./Cart";
import close from "../assets/icon-close.svg";
import { useState } from "react";

function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className="border-b-2 border-[#f7f8fd] sm:py-5 py-2 flex items-center justify-between max-h-16 box-content">
      <div className="flex items-center sm:gap-11 gap-6 h-full">
        <img
          src={menu}
          alt="menu"
          className="sm:hidden cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="sm:hidden block absolute left-0 top-0 w-full h-screen bg-black/75 z-50">
            <ul className="flex flex-col gap-1 list-none text-[#68707d] text-sm h-full bg-white w-3/4 p-8 py-6">
              <img
                src={close}
                onClick={toggleMenu}
                className="self-start pb-8"
              />
              <li className=" py-2 text-black font-bold">Collections</li>
              <li className=" py-2 text-black font-bold">Men</li>
              <li className=" py-2 text-black font-bold">Women</li>
              <li className=" py-2 text-black font-bold">About</li>
              <li className=" py-2 text-black font-bold">Contact</li>
            </ul>
          </div>
        )}

        <div className="font-bold text-3xl">sneakers</div>

        <ul className="sm:flex hidden items-center gap-8 list-none text-[#68707d] text-sm h-full ">
          <li className="hover:border-b-4 hover:border-[#ff7d1a] py-10 hover:text-black">
            Collections
          </li>
          <li className="hover:border-b-4 hover:border-[#ff7d1a] py-10 hover:text-black">
            Men
          </li>
          <li className="hover:border-b-4 hover:border-[#ff7d1a] py-10 hover:text-black">
            Women
          </li>
          <li className="hover:border-b-4 hover:border-[#ff7d1a] py-10 hover:text-black">
            About
          </li>
          <li className="hover:border-b-4 hover:border-[#ff7d1a] py-10 hover:text-black">
            Contact
          </li>
        </ul>
      </div>

      <div className="flex items-center sm:gap-11 gap-4">
        <Cart cartItems={props.cartItems}  removeFromCart={props.removeFromCart}/>
        <img
          src={imageAvatar}
          alt="avatar"
          className="cursor-pointer sm:h-12 h-6 hover:border-2 hover:border-[#ff7d1a] rounded-full"
        />
      </div>
    </div>
  );
}

export default NavBar;
