import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetails from "./ProductDetails";
import LoginPage from "./LoginPage";
import { useState, useEffect, use } from "react";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderConfirmation from "./OrderConfirmation";
import SignupPage from "./SignupPage";
import Navbar from "./Navbar";

function App() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    let getProducts = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);
      console.log(products);
    };
    getProducts();
  }, []);



  let [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlistItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
  }, [wishlist]);




  let [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const [cartTotal, setCartTotal] = useState(0);
  const [subtotals, setSubtotals] = useState({});


  const [acc, setAcc] = useState(() => {
    const token = localStorage.getItem("authToken");
    return !!token;
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              acc={acc} setAcc={setAcc}
              products={products}
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetails
            acc={acc} setAcc={setAcc}
              products={products}
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/login" element={<LoginPage acc={acc} setAcc={setAcc}/>} />
        <Route path="/signup" element={<SignupPage acc={acc} setAcc={setAcc}/>} />
        <Route
          path="/cart"
          element={
            <Cart
            acc={acc} setAcc={setAcc}
              products={products}
              cart={cart}
              setCart={setCart}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              subtotals={subtotals}
              setSubtotals={setSubtotals}
            />
          }
        />
        <Route
          path="/cart/checkout"
          element={
            <Checkout
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              subtotals={subtotals}
              setSubtotals={setSubtotals}
            />
          }
        ></Route>

        <Route
          path="/cart/order-confirmation"
          element={
            <OrderConfirmation
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              subtotals={subtotals}
              setSubtotals={setSubtotals}
            />
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <Wishlist
             acc={acc} setAcc={setAcc}
              products={products}
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart/order-confirmation"
          element={
            <OrderConfirmation
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              subtotals={subtotals}
              setSubtotals={setSubtotals}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
