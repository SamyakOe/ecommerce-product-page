import Body from "./components/Body";
import NavBar from "./components/NavBar";
import { useState } from "react";
export default function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product, count) {
    setCartItems((prevItems) => [...prevItems, {... product, count }]);
  }
  function removeFromCart(index) {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }
  return (
    <div className="sm:px-32 px-6 flex flex-col font-kumbh-sans bg-white min-h-screen text-base overflow-hidden ">
      <NavBar cartItems={cartItems} removeFromCart={removeFromCart}/>
      <Body addToCart={addToCart} />
    </div>
  );
}
