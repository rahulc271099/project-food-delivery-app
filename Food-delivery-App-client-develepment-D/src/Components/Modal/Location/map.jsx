import React, { Children, useEffect,useState } from 'react'
import ModalLayout from '../../Layout/ModalLayout'
import { AiOutlineAim } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { SetLocation } from '../../../Redux/User/Action';

const Map=({isOpen,onClose})=> {
    
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const dispatch =useDispatch();

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                error => {
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }
    useEffect(()=>{
        getLocation();

    },[]);

    if (!isOpen)return null;

 

    const handleClick =()=>{
       if(location){
        const {latitude,longitude} = location;
        dispatch(SetLocation(latitude,longitude))
       }
    };

  return (
    <ModalLayout onClose={onClose} heading="Set Location">
        <div onClick={handleClick} className="cursor-pointer flex justify-center py-2 border-y-2 items-center gap-5" >
            <AiOutlineAim size={40} color='rgba(0, 0, 0, 0.5)'/>
           <p className=''>Set Current Location</p>
        </div>
    </ModalLayout>
  )
}

export default Map;
