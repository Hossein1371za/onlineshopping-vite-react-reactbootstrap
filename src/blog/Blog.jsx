import React from "react";
import PageHeader from "../components/PageHeader";
import blogList from "../utilis/blogData";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt,FaCommentDots } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <PageHeader title="صفحه وبلاگ" curPage="بلاگ ها" />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {blogList.map((blog, i) => (
                <div className="col" key={i}>
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to={`/blog/${blog.id}`}>
                          <img src={blog.imgUrl} alt="" />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link to={`/blog/${blog.id}`}><h4>{blog.title}</h4></Link>
                        <div className="meta-post">
                          <ul className="lab-ul">
                            {
                              blog.metaList.map((val,i)=>(
                                <li key={i}>{val.text}</li>
                              ))
                            }
                          </ul>
                        </div>
                        <p>{blog.desc}</p>
                      </div>
                      <div className="post-footer">
                        <div className="pf-left">
                          <Link className="lab-btn-text" to={`/blog/${blog.id}`}>{blog.btnText} <i><FaExternalLinkAlt/></i></Link>
                        </div>
                        <div className="pf-right">
                            <i><FaCommentDots/></i>
                            <span className="comment-count">{blog.commentCount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
