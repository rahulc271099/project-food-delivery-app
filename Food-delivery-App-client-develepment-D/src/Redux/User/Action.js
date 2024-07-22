import { getPlaceDetails } from "../../utils/helper"

export const SET_LOCATION = "SET_LOCATION"


export const SetLocation =  (lat,lon)=>{

    return async (dispatch)=>{
    const locality =  await getPlaceDetails(lat,lon);
    console.log(locality);
        if(locality){

            dispatch({type:SET_LOCATION, payload:locality.placeName})
        }
        else{
            console.log("location not found");
        }
    }
};
