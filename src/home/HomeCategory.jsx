import React from "react";
import { Link } from "react-router-dom";
import { FaWindows } from "react-icons/fa";

const subTitle = "محصول خود را انتخاب کنید";
const title = "هر چیزی که شما نیاز دارید موجود است";
const btnText = "دکمه شروع خرید";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <FaWindows />,
    title: "DSLR دوربین",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <FaWindows />,
    title: "کفش",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <FaWindows />,
    title: "لوازم عکاسی",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <FaWindows />,
    title: "لباس فرم",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <FaWindows />,
    title: "کیف های رنگارنگ",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <FaWindows />,
    title: "دکور داخلی",
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((item, index) => {
              return (
                <div key={index} className="col">
                  <Link to="/shop" className="category-item">
                    <div className="category-inner">
                      <div className="category-thumb">
                        <img src={item.imgUrl} alt="" />
                      </div>
                      <div className="category-content">
                        <Link to="/shop"><h6>{item.title}</h6></Link>
                        <div className="cate-icon">
                          <FaWindows size={20}/>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-5">
            <Link to="/shop"><span className="lab-btn">{btnText}</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
