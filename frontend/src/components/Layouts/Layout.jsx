import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginPopup from "../LoginPopup/LoginPopup";
import { useState } from "react";

function Layout({ children, showHeader = true, showFooter = true }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {showHeader && <Header setShowLogin={setShowLogin} />}
      <div>{children}</div>
      {showFooter && <Footer />}
    </>
  );
}

export default Layout;
