import React, { useState } from 'react'
import blogList from '../utilis/blogData'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const SingleBlog = () => {
  const [blogs,setBlogs] = useState(blogList)
  const {id} = useParams()
  const blog = blogs.filter((item)=> item.id === Number(id))
  
  return (
    <div>
      <PageHeader title={"اطلاعات بلاگ"} curPage={"بلاگ / اطلاعات بلاگ انتخابی"}/>
      <div className='blog-section blog-single padding-tb section-bg'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              سمت راست
            </div>
            <div className="col-lg-4 col-12">
              سمت چپ
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog