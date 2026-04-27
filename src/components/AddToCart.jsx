import Cart from "../assets/icon-cart.svg";
function AddToCart({addToCart, product, count, setCount}) {
  function resetCount() {
    setCount(0);
  }
  function checkCount() {
    return count > 0;
  }
  function handleAddToCart() {
    if (!checkCount()) return;
    addToCart(product, count);
    resetCount();
  }
  return (
    <button className="flex sm:flex-grow-6  text-sm items-center justify-center cursor-pointer gap-4 bg-[#ff7d1a] hover:brightness-125 hover:opacity-95 text-black font-bold py-4 rounded-xl"
    onClick={handleAddToCart}>
      <img src={Cart} alt="Cart" className="brightness-0 h-4"/>
      Add to Cart
    </button>
  );
}
export default AddToCart;
