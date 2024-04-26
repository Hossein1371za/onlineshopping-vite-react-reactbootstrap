import React from 'react'
import PageHeader from '../components/PageHeader'
import blogList from '../utilis/blogData'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <PageHeader title="صفحه وبلاگ" curPage="بلاگ ها" />
      <div className="blog-section padding-tb section-bg">
        <div className='container'>
          <div className='section-wrapper'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4'>
              {
                blogList.map((blog,i)=>(
                  <div className='col' key={i}>
                    <div className='post-item'>
                      <div className='post-inner'>
                        <div className='post-thumb'>
                          <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt=''/></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog