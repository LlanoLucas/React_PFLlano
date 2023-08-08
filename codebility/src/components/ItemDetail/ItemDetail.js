import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, img, price, stock, description }) => {
  return (
    <article className="m-auto mt-12 flex-col w-4/12 rounded-md border-2 border-black">
      <div className="flex-col gap-4 items-center">
        <img
          className="w-full h-52 object-cover border-b-2 border-black rounded-t"
          src={img}
          alt="talita"
        />
      </div>
      <div className="px-3 text-lg pt-2">
        <div className="border-b border-black pb-3">
          <h4 className="mb-3 font-semibold text-3xl">{name}</h4>
          <p className="mb-4 text">{description}</p>
          <p className="pl-2">Price: ${price}</p>
          <p className="pl-2">Stock: {stock}</p>
        </div>
      </div>
      <ItemCount
        initial={1}
        stock={stock}
        onAdd={(quantity) => console.log(`cantidad agregada ${quantity}`)}
      />
    </article>
  );
};

export default ItemDetail;
