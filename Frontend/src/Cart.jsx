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

      <div className="flex not-md:flex-wrap justify-items-start">
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
      </div>
    </div>
  );
};

export default Cart;
