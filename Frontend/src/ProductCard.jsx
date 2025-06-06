import { useNavigate } from "react-router-dom";

const ProductCard = ({
  acc, setAcc,
  products: { id, title, description, price, images, thumbnail },
  wishlist,
  setWishlist,
  cart,
  setCart,
}) => {
  const navigate = useNavigate();
  let buttonClicked = false;

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
  return (
    <div
      onClick={() => {
        !buttonClicked && navigate(`/products/${id}`);
        buttonClicked = false;
      }}
      div
      className="p-4 mb-14 h-80 w-60 hover:scale-[95%] transition-transform "
    >
      <div className="relative bg-gray-200 rounded-lg">
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
          className="overflow-hidden h-60 w-60 object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="flex justify-between my-4">
        <p className="font-semibold">{title}</p>
        <br />
        <p className="text-xl font-bold text-green-900">&#8377;{price}</p>
      </div>
      {!cart.includes(id) ? (
        <button
          onClick={() => {
            buttonClicked = true;
            if (acc) {
              setCart((prevCart) => [...prevCart, id]);
            } else {
              navigate("/signup");
            }
          }}
          className="p-2 w-full text-green-900 border-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-900 transition-transform rounded-xl"
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            buttonClicked = true;
            setCart((prevCart) => prevCart.filter((itemId) => itemId !== id));
          }}
          className="p-2 w-full text-green-900 border-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-red-900 transition-transform rounded-xl"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ProductCard;
