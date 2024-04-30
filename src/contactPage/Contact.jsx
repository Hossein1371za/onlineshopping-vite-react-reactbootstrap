import React from "react";
import PageHeader from "../components/PageHeader";

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
    desc: "+22698 745 632,02 982 745",
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
    </div>
  );
};

export default Contact;
