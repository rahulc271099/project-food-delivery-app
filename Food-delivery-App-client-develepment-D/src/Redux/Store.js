import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { thunk } from "redux-thunk";



export const store = createStore(RootReducer, applyMiddleware(thunk));
