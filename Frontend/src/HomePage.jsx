import Navbar from './Navbar';
import ProductTab from './ProductTab';
import Banner from './Banner';
import Footer from './Footer';

const HomePage = ({acc, setAcc, products, wishlist, setWishlist, cart,
  setCart }) => {
  return (
    <>

      < Navbar className="p-4" acc={acc} setAcc={setAcc} cart={cart}/>
      <Banner />
      <h2 className='p-4 text-xl font-bold'>Recommended for you!</h2>
      <ProductTab acc={acc} setAcc={setAcc} products={products} wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>

      <Footer/>
    </>
  )
}

export default HomePage