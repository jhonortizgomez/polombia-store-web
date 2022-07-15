import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { MenuDesktop, MenuMobile } from "../Menu";
import { MyOrder } from "../../containers/MyOrder";

import logo from "../../assets/logos/logo_yard_sale.svg";
import menu from "../../assets/icons/icon_menu.svg";
import shoppingCar from "../../assets/icons/icon_shopping_cart.svg";
import "./Header.scss";

// ---------------------------------------------------

const Header = () => {
  const {
    state,
    myOrder,
    toggleMyOrder,
    menuMobile,
    toggleMenuMobile,
    menuDesktop,
    toggleMenuDesktop,
  } = useContext(AppContext);

  return (
    <nav>
      <img
        src={menu}
        alt="menu-mobile"
        className="nav-menu__mobile"
        onClick={() => toggleMenuMobile()}
      />
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li className="nav-right__email" onClick={() => toggleMenuDesktop()}>
            platzi@example.com
          </li>
          <li className="nav-right__cart" onClick={() => toggleMyOrder()}>
            <img src={shoppingCar} alt="shopping cart" />
            {state.cart.length > 0 ? <div> {state.cart.length} </div> : null}
          </li>
        </ul>
      </div>
      {menuMobile && <MenuMobile />}
      {menuDesktop && <MenuDesktop />}
      {myOrder && <MyOrder />}
    </nav>
  );
};

export { Header };
