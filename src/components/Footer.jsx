import React from "react";
import { FaPinterestP } from "react-icons/fa";
import {
  LuMapPin,
  LuPhone,
  LuFacebook,
  LuMail,
  LuTwitter,
  LuLinkedin,
  LuInstagram,
} from "react-icons/lu";
import { Link } from "react-router-dom";
const title = "درباره فروشگاه";
const desc =
  "با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید.";
const ItemTitle = "دسته بندی ها";
const quickTitle = "لینک های سریع";
const tweetTitle = "توییت های اخیر";

const addressList = [
  { iconName: <LuMapPin />, text: "تهران میر داماد ..." },
  { iconName: <LuPhone />, text: "+880 123 456 789" },
  { iconName: <LuMail />, text: "info@shopcart.com" },
];

const socialList = [
  { iconName: <LuFacebook />, siteLink: "#", className: "facebook" },
  { iconName: <LuTwitter />, siteLink: "#", className: "twitter" },
  { iconName: <LuLinkedin />, siteLink: "#", className: "linkedin" },
  { iconName: <LuInstagram />, siteLink: "#", className: "instagram" },
  { iconName: <FaPinterestP />, siteLink: "#", className: "pinterest" },
];

const ItemList = [
  { text: "محصولات", link: "/shop" },
  { text: "فروشگاه", link: "/shop" },
  { text: "بلاگ", link: "/blog" },
  { text: "درباره ما", link: "/about" },
  { text: "امنیت", link: "#" },
  { text: "سوالات متداول", link: "/about" },
];

const quickList = [
  { text: "تابستانه", link: "#" },
  { text: "رویداد", link: "#" },
  { text: "گالری", link: "#" },
  { text: "انجمن ها", link: "#" },
  { text: "سیاست حفظ حریم خصوصی", link: "#" },
  { text: "شرایط استفاده", link: "#" },
];

const tweetList = [
  {
    iconName: <LuTwitter />,
    desc: "@ShopCart Greetings! #HTML_Template Grab your item, 50% Big Sale Offer !!",
  },
  {
    iconName: <LuTwitter />,
    desc: "@ShopCart Hey! #HTML_Template Grab your item, 50% Big Sale Offer !!",
  },
];
const footerbottomList = [
  { text: "دانشکده", link: "#" },
  { text: "کارکنان", link: "#" },
  { text: "دانش آموزان", link: "#" },
  { text: "فارغ التحصیلان", link: "#" },
];

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="content">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((item, index) => {
                          return (
                            <li key={index} className="h5">
                              {item.iconName}
                              <span className="mx-2">{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((item, index) => {
                          return (
                            <li key={index} className="h5">
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
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="content">
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {quickList.map((item, index) => {
                          return (
                            <li key={index} className="h5">
                              <a href="#">{item.text}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="content">
                      <h4>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {ItemList.map((item, index) => {
                          return (
                            <li key={index} className="h5">
                              <a href="#">{item.text}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="content">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {tweetList.map((item, index) => {
                          return (
                            <li key={index} className="h5">
                              {item.iconName}
                              <span className="h6 mx-2">{item.desc}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="section-wrapper">
            <p className="number">
              &copy; 1403<Link to="/">آنلاین شاپ</Link>طراحی توسط
              <a href="#" target="_blank">
                H Z
              </a>
            </p>
            <div className="footer-bottom-list">
              {
                footerbottomList.map((item,index)=>{
                  return(
                    <a href="#" className="mx-4" key={index}>{item.text}</a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
