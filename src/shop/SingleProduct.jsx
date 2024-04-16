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
    </div>
  )
}

export default SingleProduct 