import { USER_KEY } from "../../utils/constants";

export const LOGIN_SUCCESFULL = "LOGIN_SUCCESFULL";
export const SIGNED_OUT  = "SIGNED_OUT";


export const login =(data)=>({
    type:LOGIN_SUCCESFULL,
    payload:data
});
export const signout   =()=>{
   return async (dispatch)=>{
    window.localStorage.removeItem(USER_KEY)
    console.log("ggg");
    dispatch({
        type:SIGNED_OUT
    })
   }
}