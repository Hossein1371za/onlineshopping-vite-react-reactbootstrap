import React from "react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="sing-up" className="lab-btn mb-4">
            ثبت نام رایگان
          </Link>
          <h2 className="title">خرید در هر مکان و هر زمان</h2>
          <p>
            با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه
            جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید.
          </p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li className="mx-3">
              <a href="#">
                <img src="/src/assets/images/app/01.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/app/02.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Application;
