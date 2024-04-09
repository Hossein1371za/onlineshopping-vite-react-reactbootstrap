import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = () => {
  return (
    <div className='pageheader-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='pageheader-content text-center'>
                        <h2>صفحه فروشگاه</h2>
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb justify-content-center'>
                                <li className='breadcrumb-item'><Link to="/">خانه</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader