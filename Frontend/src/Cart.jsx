import Navbar from "./Navbar";
import CartProductCard from "./CartProductCard";
import { useState } from "react";

import OrderSummary from "./OrderSummary";

const Cart = ({acc, setAcc, products, cart, setCart, cartTotal, setCartTotal, subtotals, setSubtotals }) => {
  


  const updateSubtotal = (id, subtotal) => {
    setSubtotals((prev) => {
      const updated = { ...prev, [id]: subtotal };
      const newTotal = Object.values(updated).reduce(
        (acc, val) => acc + val,
        0
      );
      setCartTotal(newTotal);
      return updated;
    });
  };
  return (
    <div className="">
      <Navbar acc={acc} setAcc={setAcc} cart={cart}/>
      <h2 className="p-4 text-xl text-bold font-bold">Your Cart</h2>

      {cart.length>0 && <div className="flex not-md:flex-wrap justify-items-start">
        <div >
          {cart.map((itemId) => {
            let cartItem = products.filter((p) => p.id === itemId);
            return (
              <CartProductCard
                key={itemId}
                products={cartItem}
                cart={cart}
                setCart={setCart}
                updateSubtotal={updateSubtotal}
              />
            );
          })}
        </div>
        <OrderSummary cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              subtotals={subtotals}
              setSubtotals={setSubtotals}
              dest="/cart/checkout"/>
      </div>}
      {cart.length===0 && <div>
          <h2 className='px-8 py-4 text-bold text-2xl font-bold'>No Products In your Cart</h2>
          <button
          onClick={() => navigate("/products")}
          className=" m-10 not-md:[m-2] not-md:p-2 not-md:w-2/3 p-4 w-70 text-2xl text-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-800 transition-transform rounded-xl"
        >
          Explore
        </button>
          </div>}
    </div>
  );
};

export default Cart;
