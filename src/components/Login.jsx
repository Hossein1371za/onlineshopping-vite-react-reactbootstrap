import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {LuFacebook ,LuTwitter ,LuLinkedin,LuInstagram,LuGithub } from "react-icons/lu"

const title = "ورود";
const socialTitle = "ورود با شبکه مجازی";
const btnText = "وارد شوید";

const socialList = [
  { iconName: <LuFacebook />, siteLink: "#", className: "facebook" },
  { iconName: <LuTwitter />, siteLink: "#", className: "twitter" },
  { iconName: <LuLinkedin />, siteLink: "#", className: "linkedin" },
  { iconName: <LuInstagram />, siteLink: "#", className: "instagram" },
  { iconName: <LuGithub />, siteLink: "#", className: "pinterest" },
];

const Login = () => {
  const [error, setError] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigat = useNavigate();

  const from = location.state?.form?.pathname || "/";

  const handlelogin = (e) => {
    e.priventDefault();
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handlelogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ایمیل..."
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="پسوورد"
                  required
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" id="number" name="number" />
                    <lable className="mx-3 " htmlFor="remember">منو به خاطر بسپار</lable>
                  </div>
                  <Link to="/forgetpass">پسوورد ذخیره شود؟</Link>
                </div>
              </div>
              <div className="form-group">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                حساب کاربری نداری؟ <Link to="/sign-up">ثبت نام</Link>
              </span>
              <span className="or">
                <span>یا</span>
              </span>
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons d-flex justify-content-between ">
                        {socialList.map((item, index) => {
                          return (
                            <li key={index} className="h5" >
                              <a href="#" className={item.className}>
                                {item.iconName}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
