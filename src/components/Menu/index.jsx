import React from "react";
import "./MenuDesktop.scss";
import "./MenuMobile.scss";

const MenuDesktop = () => {
  return (
    <div className="menu-desktop">
      <ul>
        <li>
          <a href="/" >
            My orders
          </a>
        </li>

        <li>
          <a href="/">My account</a>
        </li>

        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

const MenuMobile = () => {
  return (
    <div className="menu-mobile">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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
          <a href="/">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className="menu-mobile__email">
            platzi@example.com
          </a>
        </li>
        <li>
          <a href="/" className="menu-mobile__sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export { MenuDesktop, MenuMobile };
