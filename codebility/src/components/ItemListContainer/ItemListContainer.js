import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="flex-column justify-evenly">
      <h1 className="block font-bold text-4xl my-6 text-center">{greeting}</h1>
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
