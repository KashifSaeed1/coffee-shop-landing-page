import React from 'react'
export default function MenuData(props){
const { name, description, img} = props.menu

  return (
    <div className='bg-white hover:bg-amber-900 rounded-md text-center transition-all relative
    duration-high group  mt-8 shadow-2xl max-w-[300px] hover:text-white'>
    <div className='h-[122px]'>
        <img src={img} alt='' className='max-w-[180px] mx-auto absolute pt-4 top-[-140px] left-12 right-12
          transform translate-y-14  group-hover:scale-95 group-hover:rotate-6 duration-300'/>
    </div>
    <div className='text-center'>
    <h1 className='text-xl '>{name}</h1>
    <p className='text-gray-500 group-hover:text-white text-md px-4 text-sm py-2'>{description}</p>
    <div className='flex justify-between items-center px-4 py-4 '>
        <p className='text-lg '>$10.00</p>
        <button className='bg-amber-800 text-white text-md px-2 py-3 rounded-md
        hover:bg-white hover:text-amber-800'>Order Now</button>
    </div>
      </div>
    </div>
  )
}
