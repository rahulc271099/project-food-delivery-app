import { IoChevronDown, IoLocationSharp } from "react-icons/io5";
import {motion} from "framer-motion";
import useFarmerMotion from "../../../Hooks/useFarmerMotion";
import LoginModal from "../../Modal/Authentication/login";
import { useState } from "react";
import Signup from "../../Modal/Authentication/signup";
import Authentication from "../../Modal/Authentication/Authentication";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Map from "../../Modal/Location/map";


   const Header =()=>{
    
    const {isAuth} = useSelector(state=>state.auth);
    const {location} = useSelector(state=>state.user)
    const navigate = useNavigate();
    const {TextAnimateVariants,scaleAnimateVariant}=useFarmerMotion();
    const pincode = "673602";
    const [openModal,setOPenModal] = useState(false);
    const [mapModal,setMapModal] = useState(false);
    const handleClick =()=>{
      if(isAuth){
        navigate("/settings")
      }
     else{
      setOPenModal(true);
     }
    };
    
    const onClose =()=>{
        setOPenModal(false);
    };

    const closeMapModal =()=>{
      setMapModal(false)
    };
   

    return(
        <>
        {/* ===== Header section =====  */}
      <Authentication isOpen={openModal} onClose={onClose}/>
    <Map isOpen={mapModal} onClose={closeMapModal}></Map>
   <div className="flex items-center gap-3 p-3">
   {/* <img
     className="w-8"
     src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
     alt=""
   /> */}
   <div className="flex items-center gap-3">
     <div>
       <IoLocationSharp className="text-4xl text-green-800" />
     </div>
     <div>
       <div
       onClick={()=>{setMapModal(true)}}
       className="flex items-center gap-1 cursor-pointer ">
         {
          location ?  location.split(" ").map((el, i) => (
            <motion.span
              className="text-2xl font-semibold"
              initial="initial"
              animate="animate"
              variants={TextAnimateVariants(i)}
              key={i}
            >
              {el}
            </motion.span>
          )):<span>Set Location</span>
         }
         <IoChevronDown className="text-2xl hover:cursor-pointer" />
       </div>
       {/* <div>{pincode.split(" ").map((el, i) => (
           <motion.span
             initial="initial"
             animate="animate"
             variants={TextAnimateVariants(i)}
             key={i}
           >
             {el}
           </motion.span>
         ))}</div> */}
     </div>
   </div>

   <div className="ml-auto flex items-center">
     <div className="grid">
       <div className="text-xs ml-auto text-slate-500 flex gap-2">
         {"Hi,Tony".split(" ").map((el, i) => (
           <motion.span
             initial="initial"
             animate="animate"
             variants={TextAnimateVariants(i)}
             key={i}
           >
             {el}
           </motion.span>
         ))}
         <motion.img
           variants={scaleAnimateVariant}
           initial="initial"
           animate="animate"
           className="w-4"
           src="https://em-content.zobj.net/source/whatsapp/396/waving-hand_1f44b.png"
           alt=""
         />
       </div>
       <div className="text-sm">
         {"What do you want to eat?".split(" ").map((el, i) => (
           <motion.span
             initial="initial"
             animate="animate"
             variants={TextAnimateVariants(i)}
             key={i}
           >
             {el}{" "}
           </motion.span>
         ))}
       </div>
       {/* <div className="text-sm">What do you want to eat?</div> */}
     </div>
     <img
       className="w-8 ml-4"
       src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
       alt=""
       onClick={handleClick}
     />

     {/* <IoNotificationsOutline className="text-2xl ml-auto hover:scale-95" /> */}
   </div>
 </div>
        </>
        
    )
   };
   export default Header;
   
   