import React from "react";
import CountUp from "react-countup";
import { FaUserFriends, FaUserGraduate, FaBell } from "react-icons/fa";

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
        <div className="section-wrapper">
          <div className="row">
            
            <div className="col">
              {countList.map((item, index) => {
                return (
                  <div key={index} className="count-item">
                    <div className="count-inner align-items-center">
                    <div className="count-content">
                        <h2>
                          <span className="count number">
                            <CountUp end={item.count} />
                          </span>
                          <span>+</span>
                        </h2>
                      </div>
                      <div className="count-icon">
                        <i>{item.iconName}</i>
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>     
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
