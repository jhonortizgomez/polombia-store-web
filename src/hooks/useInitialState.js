import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  // ------------------------------------------- States
  const [menuDesktop, setMenuDesktop] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [myOrder, setMyOrder] = useState(false);
  const [state, setState] = useState(initialState);
  // ------------------------------------------- Logic Header
  const toggleMenuDesktop = () => {
    setMenuDesktop(!menuDesktop);
  };
  const toggleMenuMobile = () => {
    setMenuMobile(!menuMobile);
  };
  const toggleMyOrder = () => {
    setMyOrder(!myOrder);
  };
  // ------------------------------------------- Logic MyOrder
  const closeMyOrder = () => {
    setMyOrder(false);
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  // ------------------------------------------- Logic Products
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const addedToCart = (product) => {
    const boolean = state.cart.some((item) =>
      item.id === product.id ? true : false
    );
    return boolean;
  };
  const toCart = (payload) => {
    addedToCart(payload) ? removeFromCart(payload) : addToCart(payload);
  };

  return {
    menuDesktop,
    menuMobile,
    myOrder,
    state,
    setMenuDesktop,
    toggleMenuMobile,
    toggleMenuDesktop,
    toggleMyOrder,
    closeMyOrder,
    removeFromCart,
    sumTotal,
    addToCart,
    toCart,
    addedToCart,
  };
};

export { useInitialState };












// const Metas = () =>{
//   if( '¿Que hago?'){
//     return '¿Como hago?'
//   } else if ('¿Que hago?' && '¿Como hago?'){
//     return 'Hagalo'
//   } else {
//     Metas()
//   }
// }