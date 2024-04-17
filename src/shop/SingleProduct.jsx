import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import PageHeader from '../components/PageHeader';

const SingleProduct = () => {
    const [product,setProduct] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        fetch("/src/product.json").then(res => res.json()).then(data => setProduct(data))
        // with axios
        // axios.get("/src/product.json")
        // .then(response => {
        //     setProduct(response.data);
        // })
        // .catch(error => {
        //     console.error("Error fetching data:", error);
        // });
    },[])
    const result = product.filter((p) => p.id === id)
  return (
    <div>
        <PageHeader title={"محصول مورد نظر شما"} curPage={" فروشگاه/ محصول "}/>
        <div className="shop-single padding-tb aside-bg">
          <div className='container'>
            <div className="row justify-content-center">
              <div className='col-lg-8 col-12'>
                <article>
                  <div className="product-details">
                    <div className="row align-items-center">
                      <div className='col-md-6 col-12'>image</div>
                      <div className='col-md-6 col-12'>detailes</div>
                    </div>
                  </div>
                  <div className='review'>
                    بازدید
                  </div>
                </article>
              </div>
              <div className='col-lg-4 col-12'>سمت چپ</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct 