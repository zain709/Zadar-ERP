import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';


function App() {
  const [category, setCategory] = useState("All"); // Correctly initialized state with const



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={
          <>
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
          </>
        } />

        <Route path="/cart" element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
    </Router>
  );
}

export default App;