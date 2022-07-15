import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useInitialState } from "../hooks/useInitialState";
import { AppContext } from "../context/AppContext";

import { Layout } from "../containers/Layaut";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PasswordRecovery } from "../pages/PasswordRecovey";
import { SendEmail } from '../pages/SendEmail';
import { NewPassword } from "../pages/NewPassword";
import { Checkout } from "../pages/Checkout";
import { CreateAccount } from "../pages/CreateAccount";
import { MyAccount } from "../pages/MyAccount";
import { Orders } from "../pages/Orders";
import { NotFound } from "../pages/NotFound";
import "../_global.scss";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />

            <Route
              exact
              path="/recovery-password"
              element={<PasswordRecovery />}
            />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export { App };
