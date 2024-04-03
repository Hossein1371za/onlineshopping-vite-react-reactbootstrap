import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const title = "محصولات ما";

const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01.jpg",
    cate: "کفش",
    title: "نایک پرمیر",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "2345000",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02.jpg",
    cate: "کیف",
    title: "کیف آرایشی",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J کیف",
    price: "1200000",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03.jpg",
    cate: "تلفن همراه",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "50000000",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04.jpg",
    cate: "کیف",
    title: "کیف پیاده روی",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "1300000",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05.jpg",
    cate: "کفش",
    title: "کفش اسپرت ",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "5000000",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06.jpg",
    cate: "زیبایی",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "3000000",
    id: 6,
  },
  {
    imgUrl: "src/assets/images/categoryTab/07.jpg",
    cate: "کیف",
    title: " کیف شنل",
    author: "assets/images/course/author/01.jpg",
    brand: "chanel",
    price: "20000000",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08.jpg",
    cate: "کتونی",
    title: "Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "3500000",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (cateItem) => {
    const updateItem = ProductData.filter((element)=>{
        return element.cate === cateItem
    })
    setItems(updateItem)
  };

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>همه</li>
              <li onClick={() => filterItem("کفش")}>کفش</li>
              <li onClick={() => filterItem("کیف")}>کیف</li>
              <li onClick={() => filterItem("کتونی")}>کتونی</li>
              <li onClick={() => filterItem("زیبایی")}>زیبایی</li>
              <li onClick={() => filterItem("تلفن همراه")}>تلفن همراه</li>
            </ul>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <div className="course-item style-4">
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={item.imgUrl} alt="" />
                        <div className="course-category">
                          <div className="course-cate">
                            <a href="#">{item.cate}</a>
                          </div>
                          <div className="course-reiew">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                      </div>
                      <div className="course-content">
                        <Link to={`/shop${item.id}`}>
                          <h6>{item.title}</h6>
                        </Link>
                        <div className="course-footer">
                          <div className="course-author">
                            <Link to="/" className="ca-name">
                              {item.brand}
                            </Link>
                          </div>
                          <div className="course-price">{item.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
