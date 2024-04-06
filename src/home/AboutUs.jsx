import React from "react";
import CountUp from "react-countup";
import { FaUserFriends, FaUserGraduate, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const countList = [
  {
    iconName: <FaUserFriends />,
    count: "12600",
    text: "ثبت نام این ماه",
  },
  {
    iconName: <FaUserGraduate />,
    count: "30",
    text: "دوره های گواهی شده",
  },
  {
    iconName: <FaBell />,
    count: "100",
    text: "جوایز و کارت های هدیه",
  },
];

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container flex-row-reverse">
        <div className="section-wrapper bg-transparent ">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
              <div className="instructor-content">
                <span className="subtitle">چرا مارو انتخاب میکنید</span>
                <h2 className="title">سریع دقیق و بصرفه</h2>
                <p className="subtitle">با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید.</p>
                <Link to="/sing-up" className="lab-btn">به ما بپیوندید</Link>
              </div>
            </div>
            <div className="col">
              {countList.map((item, index) => {
                return (
                  <div key={index} className="count-item">
                    <div className="count-inner">
                      
                      <div className="count-icon">
                        <i>{item.iconName}</i>
                      </div>
                      <div className="count-content">
                        <h2>
                          <span className="count number">
                            <CountUp end={item.count} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col">
              <div className="instructor-thumb">
                <img src="src/assets/images/instructor/01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
