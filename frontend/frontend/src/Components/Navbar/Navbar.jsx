/* eslint-disable react/prop-types */
// import React from 'react'
import "./Navbar.css";
import { assets_list } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setlogin }) => {
  const [menu, setmenu] = useState("menu");
  const { cartTotalCartAmt, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="Navbar">
      <Link to="/">
        <img className="Logo" src={assets_list.logo} alt="company-logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setmenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets_list.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <NavLink to="/cart">
            <img src={assets_list.basket_icon} />
          </NavLink>

          <div className={cartTotalCartAmt() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button
            onClick={() => {
              setlogin(true);
            }}
          >
            Sign in
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets_list.profile_icon} />
            <ul className="nav-profile-dropDown">
              <li>
                <img src={assets_list.bag_icon} />
                <p>Orders</p>
              </li>
              <hr />
              <li>
                <img src={assets_list.logout_icon} />
                <p onClick={logout}>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
