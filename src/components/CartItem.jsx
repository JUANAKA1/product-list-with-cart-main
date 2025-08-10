import { useCartStore } from "../store/Cart.Store";

const CartItem = (props) => {
  const { name, quantity, price } = props;

  const { deleteItemCart } = useCartStore();

  return (
    <div className="border border-transparent border-b-Rose-300 text-sm py-4">
      <div className="flex justify-between items-center ">
        <div className="">
          <h3>{name}</h3>
          <div className="flex gap-2">
            <p className="text-Red font-semibold">{quantity}x</p>
            <p className="text-Rose-500 ">@${price.toFixed(2)}</p>
            <p className="text-Rose-500 font-semibold ">
              ${(quantity * price).toFixed(2)}
            </p>
          </div>
        </div>
        <img
          onClick={() => deleteItemCart(name)}
          className="border border-Rose-300 rounded-full p-0.5 cursor-pointer"
          src="/public/assets/images/icon-remove-item.svg"
          alt="icon remove"
        />
      </div>
    </div>
  );
};
export default CartItem;
