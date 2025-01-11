import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Pages/Home";
import WhatWeDo from "./components/WhatWeDo";
import Profile from "./Pages/Profile";
import CartPage from "./Pages/CartPage";
import OrderSuccess from "./Pages/OrderSuccess";
import Orders from "./Pages/Orders";
import Review from "./Pages/Review";
import Wishlist from "./Pages/Wishlist";
import Wallet from "./Pages/Wallet";
import Address from "./Pages/Address";
import ManageAddress from "./Pages/ManageAddress";
import CakeList from "./Pages/CakeList";
import SProduct from "./Pages/SProduct";
import About from "./Pages/About";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import ShippingPolicy from "./Pages/ShippingPolicy";
import Cancellation from "./Pages/Cancellation";
import Faq from "./Pages/Faq";
import Career from "./Pages/Career";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/review" element={<Review />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/address" element={<Address />} />
          <Route path="/manage-address" element={<ManageAddress />} />
          <Route path="/cakelist" element={<CakeList />} />
          <Route path="/SProduct/:id" element={<SProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shippingpolicy" element={<ShippingPolicy />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
