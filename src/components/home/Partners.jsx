import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Partner1 from '../../assets/partner-1.png';
import Partner2 from '../../assets/partner-2.png';
import Partner3 from '../../assets/partner-3.png';
import Partner4 from '../../assets/partner-4.png';
import Partner5 from '../../assets/partner-5.png';
import Slider from 'react-slick';

const Partners = () => {
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };
  return (
    <section>
      <h1 className='text-center text-[2.25rem] my-10'>PARTNERS</h1>
      <Slider {...settings} className='border-b-[1px] pb-10 mx-auto'>
        <div>
          <img src={Partner1} alt='' className='grayscale w-auto'/>
        </div>
        <div>
          <img src={Partner2} alt='' className='grayscale'/>
        </div>
        <div>
          <img src={Partner3} alt='' className='grayscale'/>
        </div>
        <div>
          <img src={Partner4} alt='' className='grayscale'/>
        </div>
        <div>
          <img src={Partner5} alt='' className='grayscale'/>
        </div>
      </Slider>
    </section>
  )
}

export default Partners
