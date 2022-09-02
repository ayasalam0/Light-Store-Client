import ProductCard from "../components/Products/ProductCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  SortProducts,
  FetchAllCategories,
} from "../Redux/Products";
import { useEffect } from "react";
import Pagination from "../components/Pagination";
const Products = () => {
  const dispatch = useDispatch();
  const Categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(FetchAllCategories());
  }, []);
  const productsData = useSelector((state) => state.productsData);
  console.log(productsData);

  return (
    <div className="pl-20 pr-20  pt-16 min-h-screen">
      <div className="flex justify-between items-center m-2 ">
        <h1 className=" text-5xl font-bold ">Products</h1>

        <select
          name="filter"
          id="filter"
          className=" w-32 h-16 bg-white text-fontPrimary font-bold rounded-lg text-center"
          onChange={(e) => {
            dispatch(SortProducts(e.target.value));
          }}
        >
          <option value={""}>Sort By</option>
          {Categories?.Categories.map((category) => {
            return <option value={category}>{category}</option>;
          })}{" "}
        </select>
      </div>

      {!productsData.products?.length ? (
        <div className="w-full h-96 flex items-center justify-center">
          <p className="text-fontPrimary text-4xl">Loading...</p>
        </div>
      ) : (
        <div className=" grid grid-cols-4   gap-4">
          {productsData?.products.map((product) => {
            return (
              <ProductCard
                category={product.category}
                name={product.title}
                price={product.price}
                image={product.image}
                href={product.id}
                ParagraphStyle="text-lg text-white"
                title="View Details "
                id={product.id}
              />
            );
          })}
        </div>
      )}

      <Pagination />
    </div>
  );
};

export default Products;
