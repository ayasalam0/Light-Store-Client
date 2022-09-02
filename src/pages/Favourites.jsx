import ProductCard from "../components/Products/ProductCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts, SortProducts } from "../Redux/Products";
import { useState, useEffect } from "react";

const Favourites = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.productsData.products);

  const [FavProducts, setFavProducts] = useState();
  const Ids = JSON.parse(localStorage.getItem("Favourite"));
  console.log(Ids);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    const FilterProducts = productsData?.filter((product) => {
      return Ids.includes(product.id);
    });
    setFavProducts(FilterProducts);
  }, [productsData]);

  return (
    <div className="pl-20 pr-20  pt-16 ">
      <div className="flex justify-between items-center m-2 ">
        <h1 className=" text-5xl font-bold ">Favourites</h1>
        <select
          name="filter"
          id="filter"
          className=" w-32 h-16 bg-white text-fontPrimary font-bold rounded-lg text-center"
          onChange={(e) => {
            dispatch(SortProducts(e.target.value));
          }}
        >
          <option value="asc">Ascend </option>
          <option value="desc">Descend </option>
        </select>
      </div>

      <div className=" grid grid-cols-4   gap-4">
        {FavProducts?.map((product) => {
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
              favourate={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
