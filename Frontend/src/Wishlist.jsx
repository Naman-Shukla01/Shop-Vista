import Navbar from "./Navbar"
import ProductCard from "./ProductCard"

const Wishlist = ({acc, setAcc, products, wishlist, setWishlist, cart, setCart}) => {

  return (
    <div>
      
        <Navbar acc={acc} setAcc={setAcc} cart={cart}/>
        <h2 className='px-8 py-4 text-bold text-2xl font-bold'>Wishlist</h2>
        <div className="p-4 flex flex-wrap space-y-6 ">
            {
                wishlist.map((item, index )=> {
                  let wishlistProduct = products.find((p) => p.id === item);
                  return  <ProductCard key={index} products={wishlistProduct} wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={cart}/>
                })
            }
        </div>
    </div>
  )
}

export default Wishlist