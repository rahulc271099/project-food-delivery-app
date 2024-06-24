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
import Banner from "../../Assets/banner.jpg";

const HomePage = () => {
  const {
    TextAnimateVariants,
    gridAnimateVariants,
    itemAnimateVariants,
    topSideVariants,
    scaleAnimateVariant,
  } = useFarmerMotion();

  const pincode = "673602";

  return (
    <Layout title={"Home"}>
      <div className="HomePage p-2 lg:w-4/5 lg:mx-auto">
        {/* ===== Header section =====  */}
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
              <div className="flex items-center gap-1 ">
                {"Home".split(" ").map((el, i) => (
                  <motion.span
                    className="text-2xl font-semibold"
                    initial="initial"
                    animate="animate"
                    variants={TextAnimateVariants(i)}
                    key={i}
                  >
                    {el}
                  </motion.span>
                ))}
                <IoChevronDown className="text-2xl hover:cursor-pointer" />
              </div>
              <div>{pincode.split(" ").map((el, i) => (
                  <motion.span
                    initial="initial"
                    animate="animate"
                    variants={TextAnimateVariants(i)}
                    key={i}
                  >
                    {el}
                  </motion.span>
                ))}</div>
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
            />

            {/* <IoNotificationsOutline className="text-2xl ml-auto hover:scale-95" /> */}
          </div>
        </div>
        <motion.div
          variants={topSideVariants}
          initial="initial"
          animate="animate"
          className="px-3"
        >
          {/* ===== Search =====  */}
          <div className="grid gap-2 items-center grid-cols-[1fr,max-content] py-1">
            <div className="flex items-center gap-2 bg-white py-1 px-3 border rounded-3xl">
              <FiSearch className="text-xl md:text-2xl" />
              <input
                className="placeholder:text-slate-700 outline-none p-1 md:p-2 text-sm w-full"
                type="text"
                placeholder="Search for food"
              />
            </div>
            <div className="bg-green-800 rounded-full w-8 h-8 p-1.5 md:w-10 md:h-10  grid justify-center items-center transition-all hover:bg-green-600">
              <BiSort className="text-xl md:text-2xl text-white transition-all hover:scale-90" />
            </div>
          </div>
          {/* ===== Banner img =====  */}
          <div className="py-3 md:py-5">
            <motion.img
              variants={topSideVariants}
              initial="initial"
              animate="animate"
              className="rounded-xl w-full lg:rounded-3xl"
              src={Banner}
              alt=""
            />
          </div>
          {/* ===== Category list =====  */}
          <div className="py-3">
            <h1 className="text-lg font-semibold">What&apos;s on your mind?</h1>
            <ul className="flex gap-3 overflow-scroll pt-2 transition-all">
              {CategoryData.map((item, i) => (
                <li className="block hover:scale-95 transition-all" key={i}>
                  <img
                    className="min-w-20 mix-blend-multiply rounded-lg"
                    src={item.image}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* ===== Popular section =====  */}
          <div className="py-3">
            <div className="flex justify-between items-center pb-2">
              <h1 className="text-lg font-semibold">Popular Food</h1>
              <span className="text-slate-700 text-xs">See All</span>
            </div>
            <motion.div
              variants={gridAnimateVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-5 py-2"
            >
              {FoodData.map((item, i) => (
                <motion.div variants={itemAnimateVariants} key={i}>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-95 transition-all">
                    <Link to={"/popular-food/123"}>
                      <img
                        className="rounded-t-2xl object-cover aspect-square "
                        src={item.image}
                        alt=""
                      />
                      <div className="p-3">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-nowrap">
                          {item.name}
                        </h5>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            ${item.price}
                          </span>
                          <span className="flex items-center gap-2 text-sm">
                            <FaStar className="text-yellow-300 text-lg" />
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* ===== Restaurant Section =====  */}
          <div className="py-3 pb-14">
            <h1 className="font-semibold text-lg flex items-center gap-1">
              <FaLocationDot className="text-green-800" />
              All Restaurants Nearby
            </h1>
            <p className="text-xs text-slate-500">
              Discover unique tastes near you
            </p>
            <ul className="py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
              {RestaurantData.map((item, i) => (
                <li key={i}>
                  <Link
                    to={"/restaurant/123"}
                    className="grid gap-1 grid-cols-4 items-center bg-white rounded-2xl shadow-md hover:scale-95 transition-all"
                  >
                    <img
                      className="col-span-1 aspect-square object-cover rounded-2xl p-2"
                      src={item.image}
                      alt=""
                    />
                    <div className="p-2 col-span-3">
                      <h1 className="text-sm font-semibold">{item.name}</h1>
                      <p className="text-xs font-medium text-slate-500 flex items-center gap-1 justify-between">
                        <span className="flex items-center gap-0.5">
                          <MdOutlineStar className="text-xs" /> {item.rating}{" "}
                        </span>
                        <span>35-40 mins</span>
                      </p>
                      <p className="text-xs font-light text-slate-400">
                        {item.place}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <button className="bg-green-800 text-white font-medium p-3 w-full rounded-lg transition-all hover:bg-green-600">
                See all restaurants
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default HomePage;
