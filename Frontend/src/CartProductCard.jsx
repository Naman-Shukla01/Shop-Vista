import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartProductCard = ({ products, cart, setCart, updateSubtotal }) => {
  let { id, description, price, reviews, stock, title, thumbnail } =
    products[0];
  let [count, setCount] = useState(1);
  let navigate = useNavigate();

  const reduceCount = () => {
    setCount(prev => Math.max(1, prev - 1));
  };
  const increaseCount = () => {
    setCount(prev => Math.min(stock, prev + 1));
  };

   useEffect(() => {
    const subtotal = price * count;
    updateSubtotal(id, subtotal);
  }, [count]);

  

  if (products.length == 0 )
    return (
      <div className="text-4xl text-green-900 flex justify-center">
        Loading product...
      </div>
    );
    
  return (
    <div onClick={()=> navigate(`/products/${id}`)} className="flex m-4 w-[90vh] rounded-lg  bg-gray-200 not-md:w-4/5">
      <div >
        <img className="h-28 w-28" src={thumbnail} alt={title} />
        <div className="flex">
          <div className="m-2.5 text-lg bg-white rounded-xl p-1.5 w-30 text-center">
            <i onClick={reduceCount} class="fa-solid fa-minus"></i>{" "}
            &nbsp;&nbsp;&nbsp;
            {count} &nbsp;&nbsp;&nbsp;
            <i onClick={increaseCount} class="fa-solid fa-plus "></i>
          </div>
        </div>
      </div>
      <div className="m-4 ">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-2xl font-bold text-green-900">&#8377;{Number((price*count).toFixed(3))}</p>
        <div className="mt-2.5 text-xs ml-3">
          Only{" "}
          <span className="font-bold text-green-900">
            {stock - count + 1} items
          </span>{" "}
          Left! <br /> Don't miss it.
        </div>
        <div>
            <button
              onClick={() => {
                setCart((prevCart) => prevCart.filter((itemId)=>itemId !== id));
              }}
              className="m-2.5 p-1 px-3 text-green-900 border-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-red-900  transition-transform rounded-xl"
            >
              Remove
            </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
