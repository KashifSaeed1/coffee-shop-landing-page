import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {TestimonialDetails} from './TestmoinalsDetails'
import TestmoinalsData from './TestmoinalsData';
import { motion } from 'framer-motion';


export default function Testmoinals() {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite: true,
                }
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                
                }
            },
        ]
      };
  return (
    <div id='testimonial' className='py-20'>
<div className='max-w-7xl mx-auto'>
    <div className='mb-10'>
            <motion.h1
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, delay:0.5}}
            className='text-amber-900 font-cursive text-4xl text-center font-bold'> Testimonials</motion.h1>
    </div>
<motion.div
initial={{opacity:0, scale:0.5}}
whileInView={{opacity:1, scale:1}}
transition={{duration:1.5, delay:0.5}}
>

<Slider {...settings}>
     {TestimonialDetails.map((data)=>(
        <TestmoinalsData key={data.id} data={data}/>
     ))}
</Slider>
</motion.div>
</div>
    </div>
  )
}
