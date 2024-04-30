import React from "react";
import PageHeader from "../components/PageHeader";
import GoogleMap from "../components/GoogleMap";

const subTitle = "با ما در تماس باشید";
const title = "ما همیشه مشتاق شنیدن پیشنهادات شما هستیم!";
const conSubTitle = "با ما در تماس باشید";
const conTitle =
  "فرم زیر را پر کنید تا بتوانیم شما و نیازهایتان را بهتر بشناسیم.";
const btnText = "پیامتان را برایمان ارسال کنید";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "آدرس دفتر",
    desc: "میدان مادر ...........",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "شماره تماس",
    desc: "9891212345678+",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "ایمیل",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "وب سایت ما",
    desc: "www.shopcart.com",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader title={"با ما در تماس باشید"} curPage={"ارتباط با ما"} />
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
          <div className="section-wrapper">
            <div className="row flex-row">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((item, i) => (
                    <div key={i} className="contact-item">
                      <div className="contact-thumb">
                        <img src={item.imgUrl} alt="" />
                      </div>
                      <div className="contact-content">
                        <h6 className="me-3 title">{item.title}</h6>
                        <p className="me-3">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
