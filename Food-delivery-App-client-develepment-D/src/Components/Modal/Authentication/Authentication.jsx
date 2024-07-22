import React, { useState } from "react";
import ModalLayout from "../../Layout/ModalLayout";
import Signup from "./signup";
import LoginModal from "./login";
import { data } from "autoprefixer";
import { useSelector } from "react-redux";

function Authentication({ isOpen, onClose }) {
  if (!isOpen) return null;

  const {isAuth} = useSelector(state=>state.auth);
  
  const [existingUser, setExistingUser] = useState(true);
  const setUserExist =(data)=>{
    setExistingUser(data)
  }
  console.log(isAuth);

  return <>{existingUser ? <LoginModal setUserExist={setUserExist} onClose={onClose}/> : <Signup setUserExist={setUserExist} onClose={onClose}/>}</>;
}

export default Authentication;
