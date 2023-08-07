import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex justify-center gap-20">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
