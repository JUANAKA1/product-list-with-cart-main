import { useCartStore } from "../store/Cart.Store";
import ProductCard from "./ProductCard";


const CardsContainer = () => {
  
  const { productos } = useCartStore();

  return (
    <div className="grid gap-6 mb-6 w-[327px] md:grid-cols-3 md:w-[688px]">
      {productos.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};
export default CardsContainer;
