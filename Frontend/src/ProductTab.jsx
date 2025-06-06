import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const ProductTab = ({acc, setAcc, products, wishlist, setWishlist, cart, setCart }) => {
  let location = useLocation();
  console.log(location.state.category)
  let [category, setCategory]= useState(location.state?.category||"all");
  const filteredProducts = category === "all"
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div className="">
        <div className="px-8 flex flex-wrap justify-start gap-4 cursor-pointer">
        <span className="bg-gray-300 p-1 rounded-xl " onClick={() => setCategory("all")}>All</span>{" "}
        <span className="bg-gray-300 p-1 rounded-xl " onClick={() => setCategory("furniture")}>Furniture</span>{" "}
        <span className="bg-gray-300 p-1 rounded-xl " onClick={() => setCategory("groceries")}>Groceries</span>{" "}
        <span className="bg-gray-300 p-1 rounded-xl " onClick={() => setCategory("beauty")}>Beauty</span>
      </div>
      <div className="flex flex-wrap p-4 space-y-6 justify-between">
      

      
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          acc={acc} setAcc={setAcc}
          products={product}
          wishlist={wishlist}
          setWishlist={setWishlist}
          cart={cart}
          setCart={setCart}
        />
      ))}
      
      
    </div>
    </div>
    
  );
};

export default ProductTab;
