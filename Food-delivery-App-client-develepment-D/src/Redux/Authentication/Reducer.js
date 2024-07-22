import { USER_KEY } from "../../utils/constants";
import { LOGIN_SUCCESFULL, SIGNED_OUT } from "./Action";

const user = window.localStorage.getItem(USER_KEY);

const initialState = user
  ? JSON.parse(user)
  : {
      isAuth: false,
      user: null,


    };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESFULL:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case SIGNED_OUT:
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }

 
};
export default reducer;
