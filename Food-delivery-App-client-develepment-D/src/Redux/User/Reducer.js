import { SET_LOCATION } from "./Action";

const initialState = {
    location:null
}



const reducer =(state=initialState,action)=>{
    switch(action.type){
        case SET_LOCATION:
        return{
            ...state,
            location:action.payload
        }
        default:
            return state;
    }
    
};
export default reducer;
