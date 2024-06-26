import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import {LuFacebook ,LuTwitter ,LuLinkedin,LuInstagram,LuGithub } from "react-icons/lu"
import { AuthContext } from '../contexts/AuthProvider';

const title = "ثبت نام";
const socialTitle = "ورود با شبکه مجازی";
const btnText = "ثبت نام کنید";



const socialList = [
    { iconName: <LuFacebook />, siteLink: "#", className: "facebook" },
    { iconName: <LuTwitter />, siteLink: "#", className: "twitter" },
    { iconName: <LuLinkedin />, siteLink: "#", className: "linkedin" },
    { iconName: <LuInstagram />, siteLink: "#", className: "instagram" },
    { iconName: <LuGithub />, siteLink: "#", className: "github" },
  ];

const Signup = () => {
    const [error, setError] = useState("");
    const { signUpWithGmail,createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.form?.pathname || "/";
    const handleRegister=()=>{
        signUpWithGmail().then((res)=>{
          const user = res.user
          navigate(from,{replace:true})
        }).catch((err)=>{
          const errorMsg = err.message
          setError("لطفا ایمیل و پسورد رو بررسی کنید")
        })
      }
    const handleSignup = (e)=>{
        e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value
    if(password !== confirmPassword){
        setError("پسورد یکسان نیست لطفا بررسی و دوباره امتحان کنید!")
    }else{
        setError("")
        createUser(email,password).then((userCredential)=>{
            const user = userCredential.user
            alert("حساب شما با موفقیت ساخته شد!")
            navigate(from,{replace:true})
        }).catch((err)=>{
            alert(`${err.message}`)
        })
    }
    }
  return (
    <div className="login-section padding-tb section-bg">
    <div className="container">
      <div className="account-wrapper">
        <h3 className="title">{title}</h3>
        <form className="account-form" onSubmit={handleSignup}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="نام و نام خانوادکی..."
              required
            />
          </div>
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
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="تکرار پسوورد"
              required
            />
          </div>
          <div>
            {
              error && (
                <div className="error-message text-danger mb-1">
                  {error}
                </div>
              )
            }
          </div>
          <div className="form-group">
            <button className="d-block lab-btn">
              <span>{btnText}</span>
            </button>
          </div>
        </form>
        <div className="account-bottom">
          <span className="d-block cate pt-10">
            حساب کاربری داری؟ <Link to="/login">ورود</Link>
          </span>
          <span className="or">
            <span>یا</span>
          </span>
          <h5 className="subtitle">{socialTitle}</h5>
          <ul className="lab-ul social-icons d-flex justify-content-between ">
                    {socialList.map((item, index) => {
                      return (
                        <li key={index} className="h5" >
                          <a href="#" onClick={handleRegister} className={item.className}>
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
  )
}

export default Signup