import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { FaInfo } from "react-icons/fa";

const NavItems = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "deader-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="signup" className="lab-btn">
              <span>ثبت نام</span>
            </Link>
            <Link to="/login">وارد شوید</Link>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper flex-row-reverse flex-lg-row">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="ellepsis-bar d-md-none text-warning"
            onClick={()=>setSocialToggle(!socialToggle)}>
                <FaInfo size={25}/>
              </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${toggleMenu ? "active" : ""}`}>
                  <li>
                    <Link to="/">خانه</Link>
                  </li>
                  <li>
                    <Link to="/shop">فروشگاه</Link>
                  </li>
                  <li>
                    <Link to="/blog">بلاگ</Link>
                  </li>
                  <li>
                    <Link to="/about">درباره ما</Link>
                  </li>
                  <li>
                    <Link to="/contact">ارتباط با ما</Link>
                  </li>
                </ul>
              </div>
              <Link className="lab-btn ms-3 d-none d-lg-block" to="/sign-up">
                ثبت نام
              </Link>
              <Link className="d-none d-lg-block" to="/login">
                وارد شوید
              </Link>
              
              <div
                onClick={() => setToggleMenu(!toggleMenu)}
                className="header-bar d-lg-none text-warning"
              >
                {toggleMenu ? (
                  <RiCloseFill size={30} />
                ) : (
                  <RiMenu4Fill size={30} />
                )}
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
