import React from "react";
import { FaPinterestP } from "react-icons/fa";
import { LuMapPin,LuPhone, LuMail,LuTwitter,LuLinkedin,LuInstagram} from "react-icons/lu";
const title = "درباره فروشگاه";
const desc =
  "با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید.";
const ItemTitle = "دسته بندی ها";
const quickTitle = "لینک های سریع";
const tweetTitle = "توییت های اخیر";

const addressList = [
  { iconName: <LuMapPin/> , text: "New York, USA." },
  { iconName: <LuPhone />, text: "+880 123 456 789" },
  { iconName: < LuMail/>, text: "info@shopcart.com" },
];

const socialList = [
  { iconName: <LuFacebook/>, siteLink: "#", className: "facebook" },
  { iconName: <LuTwitter/>, siteLink: "#", className: "twitter" },
  { iconName: <LuLinkedin/>, siteLink: "#", className: "linkedin" },
  { iconName: <LuInstagram/>, siteLink: "#", className: "instagram" },
  { iconName: <FaPinterestP/>, siteLink: "#", className: "pinterest" },
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
    iconName: <LuTwitter/>,
    desc: "@ShopCart Greetings! #HTML_Template Grab your item, 50% Big Sale Offer !!",
  },
  {
    iconName: <LuTwitter/>,
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
  return <div>Footer</div>;
};

export default Footer;
