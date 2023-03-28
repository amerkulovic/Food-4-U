import React from "react";
import foodImg from "../../assets/food.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Food <span className={classes.span}>4</span> U
        </h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImg} alt="A bowl full of food!" />
      </div>
    </>
  );
};

export default Header;
