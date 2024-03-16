import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading"> Cart </h1>
      {cartItems.length != 0 && (
        <button className="clear-cart" onClick={handleClearCart}>
          Clear Cart
        </button>
      )}
      <div className="cart-items">
        <ItemList items={cartItems} isAdded={true} />
        {cartItems.length === 0 && <h3> Your cart is empty !</h3>}
      </div>
    </div>
  );
};

export default Cart;
