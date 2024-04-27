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
    </div>
  )
}

export default SingleBlog