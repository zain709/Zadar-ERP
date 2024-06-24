import React, { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Header = ({ setShowLogin }) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // This effect runs when the location changes

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/#top">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/#contact">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/#contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="">
                {!token ? (
                  <button onClick={() => setShowLogin(true)}>Login</button>
                ) : (
                  <div className="navbar-profile">
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-dropdown">
                      <Nav.Link as={Link} to="/myorders">
                        <li onClick={() => navigate("/myorder")}>
                          <img src={assets.bag_icon} alt="" />
                          <p>Orders</p>
                        </li>
                      </Nav.Link>
                      <hr />
                      <Nav.Link as={Link} to="/">
                        {" "}
                        <li onClick={logout}>
                          <img src={assets.logout_icon} alt="" />
                          <p>Logout</p>
                        </li>
                      </Nav.Link>
                    </ul>
                  </div>
                )}
              </Nav.Link>

              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint"></em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
