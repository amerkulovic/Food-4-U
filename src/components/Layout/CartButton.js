import { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const ctx = useContext(CartContext);
  console.log(ctx.items);

  const numberOfCartItems = ctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
