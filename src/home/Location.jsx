import React from 'react'
import { Link } from 'react-router-dom';
const title = "بیشتر از 60000 مشتری در جهان";

const desc = "با نصب اپلیکیشن ما روی دستگاه خود از خرید لذت ببرید و در زمان صرفه جویی کنید فقط کافیست نصب کنید و شروع به خریدن کنید.";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'به ما بپیوندید',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'به ما بپیوندید',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'به ما بپیوندید',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'به ما بپیوندید',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'به ما بپیوندید',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'به ما بپیوندید',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'به ما بپیوندید',
},
]

const Location = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <h2 className='number title'>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className='section-wrapper'>
          <div className='clients'>
            {
              clientsList.map((item,index)=>{
                return (
                  <div key={index} className='client-list'>
                    <Link to="/sing-up" className='client-content'>
                      <span>{item.text}</span>
                    </Link>
                    <div className='client-thumb'>
                      <img src={item.imgUrl} alt=''/>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Location