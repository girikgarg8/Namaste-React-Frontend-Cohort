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
    <div className="cart-container" data-testid="cart">
      <h1 className="cart-heading"> Cart </h1>
      {cartItems.length != 0 && (
        <button
          className="clear-cart"
          onClick={handleClearCart}
          data-testid="clear-cart"
        >
          Clear Cart
        </button>
      )}
      {cartItems.length ? (
        <div className="cart-items" data-testid="cart-items-list">
          <ItemList items={cartItems} isAdded={true} />
        </div>
      ) : (
        <h3> Your cart is empty !</h3>
      )}
    </div>
  );
};

export default Cart;
