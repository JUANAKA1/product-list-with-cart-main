import iconCarbon from "/public/assets/images/icon-carbon-neutral.svg"
import CartButton from "./CartButton";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useCartStore } from "../store/Cart.Store";

const Cart = () => {
  const { toggleClose, cart } = useCartStore();

  return (
    <div className="bg-Rose-50 p-6 rounded-xl">
      <h2 className="text-Red font-bold text-2xl mb-6">
        Your Cart({cart.length})
      </h2>
      {cart.map((item) => (
        <CartItem key={item.name} {...item} />
      ))}
      <CartTotal />
      <div className="bg-Rose-100 flex justify-center items-center gap-2 rounded-lg p-4 mb-6">
        <img
          src={iconCarbon}
          alt="icon carbon neutral"
        />
        <p className="text-sm">
          This is a <span className="font-bold">carbon neutral</span> delivery
        </p>
      </div>
      <CartButton onClick={toggleClose} text="Confirm Order" />
    </div>
  );
};
export default Cart;
