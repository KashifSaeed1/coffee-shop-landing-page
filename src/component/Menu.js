import React from 'react'
import { MenuDetails } from './MenuDetails'
import MenuData from './MenuData'
import {motion} from 'framer-motion'
export default function Menu() {
  return (
    <div id='menu' className=' py-20 scroll-smooth '>
        <div className='max-w-7xl mx-auto '>
            {/* heading sectin */}
            <div className='text-center mb-20'>
                <motion.h1
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:1.5, delay:0.5}}
                className='text-amber-900 text-4xl font-cursive font-bold'>Best coffe for you</motion.h1>
            </div>
{/* menu card */}
<motion.div
initial={{opacity:0, y:100}}
whileInView={{opacity:1 , y:0}}
transition={{duration:1.5, delay:0.5}}

className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
    {MenuDetails.map((menu)=>(
        <MenuData key={menu.id} menu={menu}/>
    ))}

</motion.div>
        </div>
    
    </div>
  )
}
