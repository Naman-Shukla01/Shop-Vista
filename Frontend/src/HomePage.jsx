import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = ({
  acc,
  setAcc,
  products,
  wishlist,
  setWishlist,
  cart,
  setCart,
}) => {
  let navigate = useNavigate();
  return (
    <div>
      <div>
        {" "}
        <Navbar acc={acc} setAcc={setAcc} cart={cart} />{" "}
      </div>
      <div className="relative h-[100vh]">
        <div className="absolute -z-10">
          {" "}
          <img
            className="min-h-screen min-w-screen "
            src="/greencart.avif"
            alt=""
          />
        </div>
        <div>
          <h1 className="absolute text-7xl font-bold text-white right-52 top-40">
            YOU WANT IT{" "}
          </h1>
          <h1 className="absolute text-9xl font-bold text-white right-56 top-60">
            YOU GOT IT
          </h1>
          <button
            onClick={() => navigate("/products")}
            className="absolute bottom-40 right-30 not-md:bottom-20 p-4 w-50 text-2xl text-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-800 transition-transform rounded-xl"
          >
            View Products
          </button>
        </div>
      </div>
      <div className="text-center m-5">
        <h1 className="m-5 text-3xl font-bold text-green-900">
          Featured Categories
        </h1>
        <div className="flex flex-wrap justify-around ">
          <div>
            <div
              onClick={() =>
                  navigate("/products", { state: { category: "furniture" } })
              }
              className="relative m-5 cursor-pointer"
            >
              <img
                className="rounded-full w-3/4 bg-gray-200"
                src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
                alt=""
              />
              <p className="absolute bottom-0 font-bold text-6xl text-green-900">
                Furniture
              </p>
            </div>
          </div>

          <div
            onClick={() => navigate("/products", { state: { category: "groceries" } })}
            className="relative m-5 cursor-pointer"
          >
            <img
              className="rounded-full w-3/4 bg-gray-200 "
              src="https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp"
              alt=""
            />
            <p className="absolute bottom-0 font-bold text-6xl text-green-900">
              Groceries
            </p>
          </div>
          <div
            onClick={() =>  navigate("/products", { state: { category: "beauty" } })}
            className="relative m-5 cursor-pointer"
          >
            <img
              className="rounded-full w-3/4 bg-gray-200 "
              src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
              alt=""
            />
            <p className="absolute bottom-0 font-bold text-6xl text-green-900">
              Beauty
            </p>
          </div>
          
        </div>
        <button
            onClick={() => navigate("/products")}
            className=" m-10  p-4 w-70 text-2xl text-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-800 transition-transform rounded-xl"
          >
            View all Products
          </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
