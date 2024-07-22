import { motion } from "framer-motion";
import useFarmerMotion from "../../../Hooks/useFarmerMotion";



const Banner=({banner})=>{

    const {topSideVariants}=useFarmerMotion();
    return(
        <>
         {/* ===== Banner img =====  */}
         <div className="py-3 md:py-5">
            <motion.img
              variants={topSideVariants}
              initial="initial"
              animate="animate"
              className="rounded-xl w-full lg:rounded-3xl"
              src={banner}
              alt=""
            />
          </div>
        </>
    )
};
export default Banner;