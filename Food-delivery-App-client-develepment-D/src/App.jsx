import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Restaurant from "./Pages/RestaurantsPage/Restaurant";
import PopularProduct from "./Pages/ProductsPage/PopularProduct";
import CartPage from "./Pages/CartPage/CartPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import LoginModal from "./Components/Modal/Authentication/login";
import { USER_KEY } from "./utils/constants";
function App() {

  const user = window.localStorage.getItem(USER_KEY);
  const isAuth = user ? JSON.parse(user).isAuth : false;
  if(!isAuth){
    
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/popular-food/:id" element={<PopularProduct />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
