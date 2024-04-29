import React from "react";
import PageHeader from "../components/PageHeader";

const subTitle = "درباره شرکت ما";
const title = "خدمات و تجربیات ما";
const desc =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.";

const year = "30+";
const expareance = "سالهای تجربه";

const aboutList = [
  {
    imgUrl: "/src/assets/images/about/icon/01.jpg",
    imgAlt: "about",
    title: "مربیان ما",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ",
  },
  {
    imgUrl: "/src/assets/images/about/icon/02.jpg",
    imgAlt: "about",
    title: "دریافت گواهی نامه",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ",
  },
  {
    imgUrl: "/src/assets/images/about/icon/03.jpg",
    imgAlt: "about",
    title: "کلاس های آنلاین",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ",
  },
];

const About = () => {
  return (
    <div>
      <PageHeader title={subTitle} curPage={"درباره ما"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
          <div className="col">
                <div className="about-right">
                    <div className="section-header">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section-wrapper">
                        <ul className="lab-ul">
                            {
                                aboutList.map((item,i)=>(
                                    <li key={i}>
                                        <div className="sr-left">
                                            <img src={item.imgUrl} alt=""/>
                                        </div>
                                        <div className="sr-right">
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/src/assets/images/about/01.jpg" alt="" />
                </div>
                <div className="abs-thumb">
                  <img src="/src/assets/images/about/02.jpg" alt="" />
                </div>
                <div className="about-left-content">
                  <h3 className="number">{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
