import { BiSort } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoLocationSharp, IoChevronDown } from "react-icons/io5";

import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useFarmerMotion from "../../Hooks/useFarmerMotion";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";
import Layout from "../../Components/Layout/Layout";
import { CategoryData, FoodData, RestaurantData } from "../../Assets/Data";
import banner from "../../Assets/banner.jpg";
import Header from "../../Components/Sections/Header/Header";
import Search from "../../Components/Sections/Search/Search";
import PopularSection from "../../Components/Sections/PopularSections/PopularSection";
import RestaurentSection from "../../Components/Sections/RestaurentSection/RestaurentSection";
import Category from "../../Components/Sections/CategoryList/Category";
import Banner from "../../Components/Sections/Banner/Banner";


const HomePage = () => {
  const {
    TextAnimateVariants,
    gridAnimateVariants,
    itemAnimateVariants,
    topSideVariants,
    scaleAnimateVariant,
  } = useFarmerMotion();

 

  return (
    <Layout title={"Home"}>
      <div className="HomePage p-2 lg:w-4/5 lg:mx-auto">
     
        <motion.div
          variants={topSideVariants}
          initial="initial"
          animate="animate"
          className="px-3"
        >
         
         <Header></Header>
         <Search></Search>
         <Banner banner={banner}></Banner>
         <Category categoryData={CategoryData}></Category>
        <PopularSection foodData={FoodData}></PopularSection>
        <RestaurentSection restaurantData={RestaurantData}></RestaurentSection>
        
          
        </motion.div>
      </div>
    </Layout>
  );
};

export default HomePage;
