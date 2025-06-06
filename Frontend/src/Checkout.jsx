import { useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const Checkout = ({ cartTotal, setCartTotal, subtotals, setSubtotals }) => {
  
  let navigate = useNavigate();
  let handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
    const data = new FormData(form);
    const query = new URLSearchParams(data).toString();

    navigate(`/cart/order-confirmation?${query}`);
  }

  return (
    <div className="min-h-screen min-w-screen bg-white flex justify-center items-center">
  <div className="flex flex-wrap md:flex-nowrap gap-6 m-7 bg-gray-200 rounded-xl p-6 w-[90%] max-w-[1200px]">
    
    <div className="flex flex-col items-center w-full md:w-2/3">
      <h1 className="text-3xl m-4 text-green-900 font-bold">Checkout</h1>
      <label className="p-4 text-xl font-bold">Shipping Information</label>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 w-full md:w-[60%] text-center"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="text-lg font-semibold block">Enter name</label>
            <input required type="text" id="name" name="name" className="border text-sm bg-white border-gray-300 rounded-lg p-2 w-full" />
          </div>

          <div>
            <label htmlFor="email" className="text-lg font-semibold block">Enter email</label>
            <input required type="email" id="email" name="email" className="border text-sm bg-white border-gray-300 rounded-lg p-2 w-full" />
          </div>

          <div>
            <label htmlFor="address" className="text-lg font-semibold block">Enter Address</label>
            <input required type="text" id="address" name="address" className="border text-sm bg-white border-gray-300 rounded-lg p-2 w-full" />
          </div>

          <div>
            <label htmlFor="contact" className="text-lg font-semibold block">Enter Contact Number</label>
            <input required type="tel" id="contact" name="contact" className="border text-sm bg-white border-gray-300 rounded-lg p-2 w-full" />
          </div>

          <button className="mt-5 p-3 w-full bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-900 transition-transform rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </div>

    
    <div className="w-full md:w-[40%]">
      <OrderSummary
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        subtotals={subtotals}
        setSubtotals={setSubtotals}
        dest="/cart/order-confirmation"
      />
    </div>
  </div>
</div>
  );
};

export default Checkout;
