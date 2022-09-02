import Header from "../components/Layout/HeaderSec";
import CategoriesSwiper from "../components/Categories/CategoriesSwiper";
import ProductsSwiper from "../components/Products/ProductsSwiper";
import Footer from "../components/Layout/Footer";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Products";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <body>
      <Header />
      <CategoriesSwiper />
      <ProductsSwiper />
      <Footer />
    </body>
  );
}

export default App;
