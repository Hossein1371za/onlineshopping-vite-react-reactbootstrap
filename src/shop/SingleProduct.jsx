import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PopularPost from "./PopularPost"
import Tags from "./Tags"
// import axios from 'axios';
import PageHeader from "../components/PageHeader";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "./ProductDisplay";
import Reviwe from "./Reviwe";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
    // with axios
    // axios.get("/src/product.json")
    // .then(response => {
    //     setProduct(response.data);
    // })
    // .catch(error => {
    //     console.error("Error fetching data:", error);
    // });
  }, []);
  const result = product.filter((p) => p.id === id);
  return (
    <div>
      <PageHeader title={"محصول مورد نظر شما"} curPage={" فروشگاه/ محصول "} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                          spaceBetween={30}
                          slidesPerView={1}
                          loop={"true"}
                          autoplay={{
                            delay:2000,
                            disableOnInteraction :false
                          }}
                          modules={[Autoplay]}
                          navigation={
                            {
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }
                          }
                          className="mySwiper">
                            {result.map((item, index) => {
                              return (
                                <SwiperSlide key={index}>
                                  <div className="single-thumb">
                                    <img src={item.img} alt="" />
                                  </div>
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                          <div className="pro-single-prev">
                              <FaAngleRight/>
                          </div>
                          <div className="pro-single-next">
                              <FaAngleLeft/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="post-contact">
                          <div>
                            {result.map(item => <ProductDisplay key={item.id} item={item}/>)}
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="review">
                  <Reviwe/>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
