import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ acc, setAcc, cart }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  console.log(acc);
  return (
    <div className="sticky top-0 bg-white z-50 shadow-md">
      <div className="flex items-center p-4 justify-between font-bold">
        <div
          onClick={() => (window.location.href = "/")}
          className="flex items-center cursor-pointer"
        >
          <img className="h-13 w-15 mr-2 bg-white" src="/shop2.png" alt="" />
          <h1>Shop Vista</h1>
        </div>

        <div className="hidden md:flex items-center">
          {!acc && (
            <div
              className="mx-4 flex items-center cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              <i className="px-2 text-xl fa-regular fa-user"></i>
              <div className="text-black">Signup</div>
            </div>
          )}
          {acc && (
            <div
              className="mx-4 flex items-center cursor-pointer"
              onClick={() => setAcc(false)}
            >
              <i className="px-2 text-xl fa-regular fa-user"></i>
              <div className="text-black">Logout</div>
            </div>
          )}

          <div
            className="mx-4 flex items-center cursor-pointer relative"
            onClick={() => 
              {
                if(acc){navigate("/cart")}
              else{navigate("/signup")}
            }
            }
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className="text-black ml-1 ">Cart</div>
            {cart?.length > 0 && acc && (
              <span className="absolute top-0 ml-2 right-0 bg-red-500 text-white text-xs px-2 rounded-full transform translate-x-5 -translate-y-2">
                {cart.length}
              </span>
            )}
          </div>

          <div
            className="mx-4 flex items-center cursor-pointer"
            onClick={() => {
                if(acc){navigate("/wishlist")}
              else{navigate("/signup")}
            }}
          >
            <i className="fa-regular fa-heart px-2 text-xl"></i>
            <div className="text-black">Wishlist</div>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-3xl">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-start bg-gray-100 px-6 py-4 space-y-3 font-semibold">
          {!acc && (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
            >
              <i className="fa-regular fa-user px-2 text-xl"></i> Signup / Login
            </div>
          )}
          <div
            className="flex items-center cursor-pointer relative"
            onClick={() => {
             {
                if(acc){navigate("/cart")}
              else{navigate("/signup")}
            }
              setIsOpen(false);
            }}
          >
            <span className=" ml-1.5 material-symbols-outlined">
              shopping_cart
            </span>
            <span className="ml-2">Cart</span>
            {cart?.length > 0 && acc && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              {
                if(acc){navigate("/wishlist")}
              else{navigate("/signup")}
            }
              setIsOpen(false);
            }}
          >
            <i className="fa-regular fa-heart px-2 text-xl"></i> Wishlist
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
