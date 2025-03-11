import React from 'react'
import coffee5 from '../assests/coffee5.png'
import bean1 from'../assests/bean1.png';
import bean2 from'../assests/bean1.png';
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div className="from-slate-100 to-amber-900 bg-gradient-to-r ">
      <div
        className="mx-auto grid md:grid-cols-2 place-items-center
        h-[800px] max-w-7xl pt-10 md:pt-0 relative"
      >
        <div className=" space-y-5 px-5  md:px-3">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-amber-900 font-semibold font-cursive text-xl"
          >
            Welcom to coffe shop___
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl text-black font-bold font-cursive2 leading-tight"
          >
            Experience Artisanal
            <span className="text-amber-900 text-4xl md:text-5xl font-cursive">
              {" "}
              Coffe{" "}
            </span>{" "}
            at coffe shop
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-black font-cursive2 text-lg"
          >
            Whether you're starting your day or taking a well-deserved break,
            let our handcrafted brews awaken your senses and uplift your spirit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex gap-5 pt-4"
          >
            <a href="#menu">
              {" "}
              <button className="bg-amber-900 text-white text-lg px-3 py-2 rounded-md hover:bg-amber-700">
                View Menu
              </button>{" "}
            </a>
            <a href="#menu">
              {" "}
              <button
                className="bg-transparent border border-amber-900 text-amber-900
   text-lg px-3 py-2 rounded-md hover:bg-amber-700 hover:text-white"
              >
                Our Story
              </button>{" "}
            </a>
          </motion.div>
        </div>
        <div className="">
          <motion.img
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            src={coffee5}
            alt=""
            className=" w-[380px] md:w-[500px]"
          />
        </div>
        <div className="">
          <motion.img
            initial={{ opacity: 0, x: 400, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.7, delay: 0.8 }}
            src={bean2}
            alt=""
            className="absolute hidden md:block w-20 bottom-[170px] left-36 x-10 rotate-45"
          />

          <motion.img
            initial={{ opacity: 0, x: 600, y: 200, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 2, scale: 1, rotate: 45 }}
            transition={{ duration: 1.7, delay: 0.8 }}
            src={bean1}
            alt=""
            className="absolute w-20 top-14 left-0  hidden md:block"
          />

          <motion.img
            initial={{ opacity: 0, x: -100, y: 100, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 60 }}
            transition={{ duration: 1.7, delay: 0.8 }}
            src={bean2}
            alt=""
            className="absolute w-20 top-2 right-1 hidden md:block rotate-45"
          />
        </div>
      </div>
    </div>
  );
}
