import OrderSummary from "./OrderSummary";
import { useLocation } from "react-router-dom";

const OrderConfirmation = ({
  cartTotal,
  setCartTotal,
  subtotals,
  setSubtotals,
}) => {
  
  const { search } = useLocation(); 
  const queryParams = new URLSearchParams(search);

  const name = queryParams.get("name");
  const email = queryParams.get("email");
  const address = queryParams.get("address");
  const contact = queryParams.get("contact");

  let code = Math.floor(Math.random()*100000);
  return (
    <div className="min-h-screen min-w-screen bg-white ">
      <div className="m-4 text-center text-green-600 text-2xl font-bold">
  ✅ Order Confirmed!
</div >
<div className="flex justify-center">
    <div className="m-4 text-lg font-semibold p-4 h-[80vh] w-5/6 rounded-lg  bg-gray-200 space-x-4 space-y-4">
        <h1 className="text-3xl m-4  text-green-900 font-bold" >Thanks for your purchase!</h1>
        <p className="w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          recusandae incidunt facilis provident quis ab temporibus, doloremque
          delectus inventore dolorum! Perferendis, facere corrupti?
        </p>
        <p>Code: {code}</p>
        <p>Address: {address}</p>
        <p>Phone: {contact}</p>
        <p>Email: {email}</p>
        
      </div>
</div>
      
      <div>
          <OrderSummary
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        subtotals={subtotals}
        setSubtotals={setSubtotals}
        dest="/"
      />
        </div>      
    </div>
  );
};

export default OrderConfirmation;
