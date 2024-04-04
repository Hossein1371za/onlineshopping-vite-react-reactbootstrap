import React from "react";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">تو وقت صرفه جویی کن</span>
              <h2 className="title">
                برای صرفه جویی در وقت و
                <b>
                  خرید فروشگاه <span>به ما بپیوندید</span>
                </b>
              </h2>
              <p>کلی زمان اضافه دیگه نیازی به عجله نیست</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
                <h4>ثبت نام کنید</h4>
                <form className="register-form">
                    <input type="text" name="name" placeholder="نام..." className="reg-input"/>
                    <input type="email" name="emaile" placeholder="ایمیل..." className="reg-input"/>
                    <input type="number" name="number" placeholder="شماره موبایل..." className="reg-input"/>
                    <button type="submit" className="lab-btn">
                        ثبت نام
                    </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
