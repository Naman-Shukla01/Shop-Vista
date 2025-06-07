import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({
  acc, setAcc,
  products,
  wishlist,
  setWishlist,
  cart,
  setCart,
}) => {
  let [count, setCount] = useState(1);
  let { id: pId } = useParams();

  const navigate = useNavigate();
  let buttonClicked = false;

  const reduceCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };


  let updateWishlist = (e) => {
    e.preventDefault();
    buttonClicked = true;
    if (acc) {
      if (!wishlist.includes(id)) {
        setWishlist((prevWishlist) => [...prevWishlist, id]);
      } else {
        setWishlist((prevWishlist) => prevWishlist.filter((idx) => idx !== id));
      }
    } else {
      navigate("/signup");
    }
  };  


  if (products.length == 0)
    return (
      <div className="text-4xl text-green-900 flex justify-center">
        Loading product...
      </div>
    );

  let {
    id,
    title,
    description,
    price,
    images,
    thumbnail,
    stock,
    weight,
    availabilityStatus,
    returnPolicy,
    rating,
    shippingInformation,
    warrantyInformation,
  } = products[pId - 1];
  return (
    <div className="p-4">
      <Navbar acc={acc} setAcc={setAcc} cart={cart} />
      <div className="mt-4 flex not-md:flex-wrap">
        <div className="mr-3 relative">
          <p
          onClick={updateWishlist}
          className="absolute top-0 right-1.5 text-xl"
        >
          {!wishlist.includes(id) ? (
            <i className="fa-regular fa-heart"></i>
          ) : (
            <i className="fa-solid fa-heart"></i>
          )}
        </p>
          <img
            className="h-96 w-96  object-cover bg-gray-200 rounded-lg"
            src={thumbnail}
            alt={title}
          />
          <div className="flex overflow-scroll">
            {images.map((url, index) => {
              return (
                <img
                  key={index}
                  className="mt-3 mr-3 h-25 w-25 object-cover bg-gray-200 rounded-lg"
                  src={url}
                  alt="img"
                />
              );
            })}
          </div>
        </div>

        <div className="w-lg p-2 space-y-3">
          <h1 className="text-2xl font-semibold ">{title}</h1>
          <p className="font-semibold">Description</p>
          <h4 className="text-xs">{description}</h4>

          <hr className="text-gray-200" />

          <p className="text-2xl font-bold text-green-900">
            &#8377;{Number(price.toFixed(3))}
          </p>

          <hr className="text-gray-200" />

          <div className="flex">
            <div className="mt-5 text-lg bg-gray-200 rounded-xl p-3 w-30 text-center">
              <i onClick={reduceCount} class="fa-solid fa-minus"></i>{" "}
              &nbsp;&nbsp;&nbsp;
              {count} &nbsp;&nbsp;&nbsp;
              <i onClick={increaseCount} class="fa-solid fa-plus "></i>
            </div>
            <div className="mt-5 ml-3">
              Only{" "}
              <span className="font-bold text-green-900">
                {stock - count + 1} items
              </span>{" "}
              Left! <br /> Don't miss it.
            </div>
          </div>

          {!wishlist.includes(id) && (
            <button
              onClick={() => {
                {
                  if (!acc) {
                    navigate("/signup");
                  } else {
                    setWishlist((prevWishlist) => [...prevWishlist, id]);
                  }
                }
              }}
              className="mt-5 p-2 px-8 text-green-900 border-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-900  transition-transform rounded-xl"
            >
              Add to Wishlist
            </button>
          )}
          {!cart.includes(id) && (
            <button
              onClick={() => {
                {
                  if (acc) {
                    setCart((prevCart) => [...prevCart, id]);
                  } else {
                    navigate("/signup");
                  }
                }
                
              }}
              className="mt-5 p-2 px-8 text-green-900 border-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-900  transition-transform rounded-xl"
            >
              Add to Cart
            </button>
          )}
          <div>
            <div className="mt-5 p-2 border-2 border-gray-200 font-semibold">
              {returnPolicy}
            </div>
            <div className=" p-2 border-2 border-gray-200 font-semibold">
              Rating: {rating}/5
            </div>
            <div className=" p-2 border-2 border-gray-200 font-semibold">
              {warrantyInformation}
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 space-y-2">
        <p className=" text-2xl font-bold text-green-900">
          Additional Information
        </p>
        <ul className="space-y-2">
          <li>- {shippingInformation}</li>
          <li>- {availabilityStatus}</li>
          <li>- {weight}</li>
          <li>{}</li>
          <li>{}</li>
          <li>{}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
