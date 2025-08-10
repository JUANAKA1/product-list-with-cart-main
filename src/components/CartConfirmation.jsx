import iconConfirmed from "/public/assets/images/icon-order-confirmed.svg";
import CartButton from "./CartButton";
import CartConfirmItem from "./CartConfirmItem";
import CartTotal from "./CartTotal";
import { useCartStore } from "../store/Cart.Store";

const CartConfirmation = () => {
  const { isClose, toggleClose, cart, resetCart } = useCartStore();
  const handleNewOrder = () => {
    toggleClose();
    resetCart();
  };
  // Cierra el modal si se hace clic fuera del contenido
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleClose();
    }
  };
  return (
    <dialog
      hidden={isClose}
      className=" bg-Rose-900/50 w-full fixed h-screen flex justify-center items-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-[375px] py-10 px-6 rounded-lg md:w-[600px]">
        <img src={iconConfirmed} alt="icon order confirmed" />
        <h2 className="text-[2.5rem] font-bold ">Order Confirmed</h2>
        <p className="text-Rose-400 mb-6">We hope you enjoy your food!</p>
        <div className="bg-Rose-50">
          {cart.map((item) => (
            <CartConfirmItem key={item.name} {...item} />
          ))}
          <div>
            <CartTotal />
            <CartButton onClick={handleNewOrder} text="Start New Order" />
          </div>
        </div>
      </div>
    </dialog>
  );
};
export default CartConfirmation;
