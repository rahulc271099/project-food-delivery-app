import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Restaurant from "./Pages/RestaurantsPage/Restaurant";
import PopularProduct from "./Pages/ProductsPage/PopularProduct";
import CartPage from "./Pages/CartPage/CartPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";

function App() {
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
