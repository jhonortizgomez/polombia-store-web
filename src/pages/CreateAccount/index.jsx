import React from "react";
import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="createAccount">
      <div className="createAccount-form">
        <h1 className="createAccount-form__title">My account</h1>

        <form action="/" className="createAccount-form__form">
          <div>
            <label htmlFor="name" className="createAccount-form__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Teff"
              className="createAccount-form__input input-name"
            />

            <label htmlFor="email" className="createAccount-form__label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.com"
              className="createAccount-form__input input-email"
            />

            <label htmlFor="password" className="createAccount-form__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="createAccount-form__input input-password"
            />
          </div>

          <input
            type="submit"
            value="Create"
            className="createAccount-form__button create-button"
          />
        </form>
      </div>
    </div>
  );
};

export { CreateAccount };
