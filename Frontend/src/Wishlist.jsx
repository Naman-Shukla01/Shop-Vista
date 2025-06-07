import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import ProductCard from "./ProductCard"

const Wishlist = ({acc, setAcc, products, wishlist, setWishlist, cart, setCart}) => {
 let navigate = useNavigate();
  return (
    <div>
      
        <Navbar acc={acc} setAcc={setAcc} cart={cart}/>
        <h2 className='px-8 py-4 text-bold text-2xl font-bold'>Wishlist</h2>
        <div className="p-4 flex flex-wrap space-y-6 ">
            {
                wishlist.map((item, index )=> {
                  let wishlistProduct = products.find((p) => p.id === item);
                  return  <ProductCard key={index} acc={acc} setAcc={setAcc} products={wishlistProduct} wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>
                })
            }
        </div>
        {wishlist.length===0 && <div>
          <h2 className='px-8 py-4 text-bold text-2xl font-bold'>No Products In your Wishlist</h2>
          <button
          onClick={() => navigate("/products")}
          className=" m-10 not-md:[m-2] not-md:p-2 not-md:w-2/3 p-4 w-70 text-2xl text-green-900 bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-800 transition-transform rounded-xl"
        >
          Explore
        </button>
          </div>}
    </div>
  )
}

export default Wishlist