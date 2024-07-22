// src/LoginModal.js
import React, { useState } from "react";
import ModalLayout from "../../Layout/ModalLayout";
import { USER_KEY } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/Authentication/Action";

const LoginModal = ({ isOpen, onClose, setUserExist }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user: {
        email,
        password,
      },
      isAuth:true,
    };
    console.log({ email, password });
    dispatch(login({email,password}))
    window.localStorage.setItem(USER_KEY,JSON.stringify(data))
    onClose();
  };

  return (
    <ModalLayout onClose={onClose} heading="Login">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center justify-between">
          <p
            className="border-b border-b-green-900"
            onClick={() => {
              setUserExist(false);
            }}
          >
            Register Now
          </p>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 "
          >
            Login
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default LoginModal;
