import React from 'react'
import Bg from '../assests/Bg.png'
import Lottie from 'lottie-react';
import Animation from '../assests/Animation.json'
import{motion} from 'framer-motion';

const bgImage ={
  backgroundImage: `url(${Bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  width:"100%",
  height:"100%",
  backgroundPosition:"center"
}

export default function AboutUs() {
  return (
    <div id="about" style={bgImage} className=" md:py-20  py-40">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-amber-900 text-4xl text-center font-cursive font-bold mb-20"
      >
        About Us
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Lottie animationData={Animation} className="md:w-[600px]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="space-y-4 px-4 md:px-0 ">
            <h1 className="text-amber-900 text-2xl font-cursive2 pt-2">
              Crafting Moments, One Cup at a Time
            </h1>
            <p className="font-medium leading-6 font-cursive2">
              At Brew Haven, we believe coffee is more than just a drink—it's an
              experience. What started as a cozy corner café has grown into a
              beloved coffee destination. Our journey is fueled by a passion for
              quality, sourcing the finest beans from sustainable farms
              worldwide. Every cup is a blend of rich flavors, expert roasting,
              and a commitment to creating the perfect brew. Whether you're here
              for your morning pick-me-up or a slow afternoon sip, we’re
              dedicated to making every moment special.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
