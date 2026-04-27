import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
function Counter(props) {
  function increaseCount() {
    props.setCount((prev) => prev + 1);
  }
  function decreaseCount() {
    props.setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }
  return (
    <div className="flex sm:flex-grow-4 items-center  rounded-xl justify-between bg-[#f7f8fd] py-4 px-6">
      <img src={minus} alt="Minus" className="cursor-pointer hover:brightness-125" onClick={decreaseCount}/>

      <span className="font-bold text-base">{props.count}</span>
      <img src={plus} alt="Plus" className="cursor-pointer hover:brightness-125" onClick={increaseCount} />
    </div>
  );  
}
export default Counter;
