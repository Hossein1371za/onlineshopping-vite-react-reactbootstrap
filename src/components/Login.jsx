import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const title="ورود"
const socialTitle = "ورود با شبکه مجازی"
const btnText = "وارد شوید"

// const socialList = [
//   { iconName: <LuFacebook />, siteLink: "#", className: "facebook" },
//   { iconName: <LuTwitter />, siteLink: "#", className: "twitter" },
//   { iconName: <LuLinkedin />, siteLink: "#", className: "linkedin" },
//   { iconName: <LuInstagram />, siteLink: "#", className: "instagram" },
//   { iconName: <FaPinterestP />, siteLink: "#", className: "pinterest" },
// ];

const Login = () => {
  const [error,setError] = useState("")
  const {signUpWithGmail,login} = useContext(AuthContext)
  const location = useLocation()
  const navigat = useNavigate()

  const from = location.state?.form?.pathname || "/"

  const handlelogin =(e)=>{
    e.priventDefault()
  }

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className='account-wrapper'>
            <h3 className='title'>{title}</h3>
            <form className='account-form' onSubmit={handlelogin}>
              <div className="form-group">
                <input type='email' name='email' id='email' placeholder='ایمیل...' required/>
              </div>
              <div className="form-group">
                <input type='password' name='password' id='password' placeholder='پسوورد' required/>
              </div>
              <div className='form-group'>
                <div className="checkgroup">
                  <input type="checkbox" id="number" name="number"/>
                  <lable htmlFor="remember">منو به خاطر بسپار</lable>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login