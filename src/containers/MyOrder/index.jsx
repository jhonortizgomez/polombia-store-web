import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { OrderItem } from "../../components/OrderItem";
import flecha from "../../assets/icons/flechita.svg";
import "./MyOrder.scss";

const MyOrder = () => {
  const { state, closeMyOrder, sumTotal } = useContext(AppContext);

  return (
    <aside className="myOrder">
      <div className="myOrder-header">
        <img src={flecha} alt="arrow" onClick={() => closeMyOrder()} />
        <p className="myOrder-header__title">My order</p>
      </div>
      <div className="myOrder-content">
        <div className="myOrder-content__orders">
          {state.cart.map((item) => (
            <OrderItem product={item} key={`orderItem- ${item.id}`} />
          ))}
        </div>
        <div className="myOrder-content__total">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="myOrder-content__button">Checkout</button>
      </div>
    </aside>
  );
};

export { MyOrder };
