import React, { useState } from "react";
import blogList from "../utilis/blogData";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags"
import PopularPost from "../shop/PopularPost"

import {
  FaPlay,
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const socialList = [
  { iconName: <FaFacebook />, siteLink: "#", className: "facebook" },
  { iconName: <FaTwitterSquare />, siteLink: "#", className: "twitter" },
  { iconName: <FaLinkedin />, siteLink: "#", className: "linkedin" },
  { iconName: <FaInstagram />, siteLink: "#", className: "instagram" },
  { iconName: <FaTelegram />, siteLink: "#", className: "pinterest" },
];

const SingleBlog = () => {
  const [blogs, setBlogs] = useState(blogList);
  console.log(blogs);
  const { id } = useParams();
  const blog = blogs.filter((item) => item.id === Number(id));

  return (
    <div>
      <PageHeader
        title={"اطلاعات بلاگ"}
        curPage={"بلاگ / اطلاعات بلاگ انتخابی"}
      />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {blog.map((item) => {
                            return (
                              <div key={item.id}>
                                <div className="post-thumb">
                                  <img src={item.imgUrl} alt="" />
                                </div>
                                <div className="post-content">
                                  <h3>{item.title}</h3>
                                  <div className="meta-post">
                                    <ul className="lab-ul">
                                      {item.metaList.map((val, i) => (
                                        <li key={i}>{val.text}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و
                                    مجله در ستون و سطرآنچنان که لازم است و برای
                                    شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                                    متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    کتابهای زیادی در شصت و سه درصد گذشته، حال و
                                    آینده شناخت فراوان جامعه و متخصصان را می
                                    طلبد تا با نرم افزارها شناخت بیشتری را برای
                                    طراحان رایانه ای علی الخصوص طراحان خلاقی و
                                    فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                                    صورت می توان امید داشت که تمام و دشواری
                                    موجود در ارائه راهکارها و شرایط سخت تایپ به
                                    پایان رسد وزمان مورد نیاز شامل حروفچینی
                                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                                    دنیای موجود طراحی اساسا مورد استفاده قرار
                                    گیرد.
                                  </p>
                                  <blockquote>
                                    <p>
                                      لورم ایپسوم متن ساختگی با تولید سادگی
                                      نامفهوم از صنعت چاپ و با استفاده از طراحان
                                      گرافیک است. چاپگرها و متون بلکه روزنامه و
                                      مجله در ستون و سطرآنچنان که لازم است و
                                      برای شرایط فعلی تکنولوژی مورد نیاز و
                                      کاربردهای متنوع با هدف بهبود ابزارهای
                                      کاربردی می باشد. کتابهای زیادی در شصت و سه
                                      درصد گذشته، حال و آینده شناخت
                                    </p>
                                    <cite>
                                      <a href="#">حسین زحمتکشان ...</a>
                                    </cite>
                                  </blockquote>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و
                                    مجله در ستون و سطرآنچنان که لازم است و برای
                                    شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                                    متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    کتابهای زیادی در شصت و سه درصد گذشته، حال و
                                    آینده شناخت فراوان جامعه و متخصصان را می
                                    طلبد تا با نرم افزارها شناخت بیشتری را برای
                                    طراحان رایانه ای علی الخصوص طراحان خلاقی و
                                    فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                                    صورت می توان امید داشت که تمام و دشواری
                                    موجود در ارائه راهکارها و شرایط سخت تایپ به
                                    پایان رسد وزمان مورد نیاز شامل حروفچینی
                                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                                    دنیای موجود طراحی اساسا مورد استفاده قرار
                                    گیرد.
                                  </p>
                                  <img
                                    src="/src/assets/images/blog/single/01.jpg"
                                    alt=""

                                  />
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و
                                    مجله در ستون و سطرآنچنان که لازم است و برای
                                    شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                                    متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    کتابهای زیادی در شصت و سه درصد گذشته، حال و
                                    آینده شناخت فراوان جامعه و متخصصان را می
                                    طلبد تا با نرم افزارها شناخت بیشتری را برای
                                    طراحان رایانه ای علی الخصوص طراحان خلاقی و
                                    فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                                    صورت می توان امید داشت که تمام و دشواری
                                    موجود در ارائه راهکارها و شرایط سخت تایپ به
                                    پایان رسد وزمان مورد نیاز شامل حروفچینی
                                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                                    دنیای موجود طراحی اساسا مورد استفاده قرار
                                    گیرد.
                                  </p>
                                  <div className="video-thumb">
                                    <img
                                      src="/src/assets/images/blog/single/02.jpg"
                                      alt=""
                                    />
                                    <a
                                      href="https://youtu.be/_W3R2VwRyF4?si=dQrQfEMwVnu01v6x"
                                      className="video-button popup"
                                      target="_blank"
                                    >
                                      <i>
                                        <FaPlay />
                                      </i>
                                    </a>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و
                                    مجله در ستون و سطرآنچنان که لازم است و برای
                                    شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                                    متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    کتابهای زیادی در شصت و سه درصد گذشته، حال و
                                    آینده شناخت فراوان جامعه و متخصصان را می
                                    طلبد تا با نرم افزارها شناخت بیشتری را برای
                                    طراحان رایانه ای علی الخصوص طراحان خلاقی و
                                    فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                                  </p>
                                  <div className="tags-section">
                                    <ul className="tags lab-ul">
                                      <li>
                                        <a href="#">آژانس</a>
                                      </li>
                                      <li>
                                        <a href="#">بیزینس</a>
                                      </li>
                                      <li>
                                        <a href="#">شخصی</a>
                                      </li>
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                      {
                                        socialList.map((social,i)=>(
                                          <li key={i}>
                                            <a href="#" className={social.className}>
                                              <i>{social.iconName}</i>
                                            </a>
                                          </li>
                                        ))
                                      }
                                    </ul>
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
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags/>
                <PopularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
