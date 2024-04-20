import React from "react";
import { useState } from "react";
const reviwtitle = "اضافه کردن بازدید";
import { FaStar } from "react-icons/fa";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید..",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید.",
  },
];

const Reviwe = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          توضیحات
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          بازدید
        </li>
      </ul>
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => {
              return (
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt={review.imgAlt} />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="نام و نام خانوادگی..."
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ایمیل..."
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="ms-2">امتیاز شما</span>
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="massage"
                    id="massage"
                    rows={8}
                    placeholder="نظر شما ..."
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>ارسال نظر</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </li>
                <li>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </li>
                <li>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </li>
                <li>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </li>
                <li>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </li>
                <li>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با                </li>
                <li>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با                </li>
              </ul>
              <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviwe;
