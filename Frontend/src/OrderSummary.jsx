import { useNavigate } from "react-router-dom";

const OrderSummary = ({
  cartTotal,
  setCartTotal,
  subtotals,
  setSubtotals,
  dest
}) => {
  let navigate = useNavigate();
  if (!cartTotal || !subtotals) return <p>Loading</p>;

  return (
    <div className="m-4 text-lg font-semibold p-4 h-60 not-md:h-80 rounded-lg bg-gray-200 space-x-4 space-y-4">
      <p>Total items: {Object.keys(subtotals).length}</p>
      <p>
        Delivery Charges: <span className="text-green-900">Free Delivery</span>{" "}
      </p>
      <hr />

      <p className="text-3xl font-bold text-green-900">
        Total Price: &#8377;{Number(cartTotal.toFixed(3))}
      </p>

      {window.location.href === "http://localhost:5173/cart" && (
        <button
          onClick={() => navigate(dest)}
          className="m-2.5  p-1 px-3 text-white border-green-900 bg-green-900 border-2 hover:scale-[95%] hover:text-black hover:bg-white  transition-transform rounded-xl"
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default OrderSummary;
