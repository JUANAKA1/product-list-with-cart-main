import iconCart from "/public/assets/images/icon-add-to-cart.svg"
import iconDecrement from "/public/assets/images/icon-decrement-quantity.svg";
import iconIncrement from "/public/assets/images/icon-increment-quantity.svg";
// import { useState } from "react";
import { useCartStore } from "../store/Cart.Store";

const ProductCard = ({ image, name, category, price }) => {
  // const [quantity, setQuantity] = useState(0);

  const { addItemCart, updateItemCart, deleteItemCart, cart } = useCartStore();

  let quantity = 0;
  const itemsInCart = cart.filter((item) => item.name === name);
  
  if (itemsInCart.length > 0) {
    quantity = itemsInCart[0].quantity;}

  const addOne = () => {
    const newQuantity = quantity + 1;
    // setQuantity(newQuantity);

    if (newQuantity > 1) {
      updateItemCart({
        name,
        image,
        price,
        quantity: newQuantity,
      });
    } else {
      addItemCart({
        name,
        image,

        price,
        quantity: newQuantity,
      });
    }
  };
  const subtractOne = () => {
    const newQuantity = quantity - 1;
    // setQuantity(newQuantity);
    if (newQuantity === 0) {
      deleteItemCart(name);
    } else {
      updateItemCart({
        name,
        image,
        price,
        quantity: newQuantity,
      });
    }
  };

  return (
    <div className="relative">
      <picture>
        <source media="(min-width:768px)" srcSet={image.tablet} />
        <source media="(min-width:1440px)" srcSet={image.desktop} />
        <img
          className="rounded-lg mb-[38px]  "
          src={image.mobile}
          alt="image baklava mobile"
        />
      </picture>

      {quantity === 0 ? (
        <button
          onClick={addOne}
          className="bg-Rose-50 border-2 border-Rose-300 w-40 rounded-full flex justify-center gap-2 p-3 absolute top-[188px] left-0 right-0 mx-auto cursor-pointer hover:border-Red transition-colors"
        >
          <img
            src={iconCart}
            alt="icon add to cart"
          />
          <span>Add to Cart</span>
        </button>
      ) : (
        <div className="bg-Red w-40 rounded-full flex justify-between items-center gap-2 p-3 absolute top-[188px] left-0 right-0 mx-auto cursor-pointer">
          <img
            onClick={subtractOne}
            className="border border-Rose-50 size-[18px] rounded-full p-1 "
            src={iconDecrement}
            alt="icon decrement quantity"
          />
          <p className="text-Rose-50">{quantity}</p>
          <img
            onClick={addOne}
            className="border border-Rose-50 size-[18px] rounded-full p-1 "
            src={iconIncrement}
            alt="icon increment quantity"
          />
        </div>
      )}
      <p className="text-sm text-Rose-500 ">{category}</p>
      <h2 className="font-bold">{name}</h2>
      <p className="text-Red font-semibold ">{price.toFixed(2)}</p>
    </div>
  );
};
export default ProductCard;
