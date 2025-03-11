import React from 'react'

export default function ResponsiveMenu({open, setOpen}) {
  return (
    <div className={`${open ? 'left-0' : '-left-[100%]'} bg-amber-950 fixed  top-15 bottom-15 x-30 h-[100%] w-[75%] 
    flex-col justify-between text-white pt-10 px-8 pb-6 transition-all duration-300 rounded-r-xl shadow-md md:hidden z-20`}  >
     <div>
        <nav className='mt-10'>
<ul className='flex flex-col gap-8 text-lg items-center font-medium '>
<a href='/'><li onClick={()=> setOpen(false)}  className='cursor-pointer'>Home</li></a>
        <a href='#menu'><li onClick={()=> setOpen(false)} className='cursor-pointer' >Menu</li></a>
        <a href='#about'><li onClick={()=> setOpen(false)} className='cursor-pointer'>About</li></a>
        <a href='#testimonial'><li onClick={()=> setOpen(false)} className='cursor-pointer'>Testimonial</li></a>
        <a href='#contact'> <button onClick={()=> setOpen(false)} className='text-white text-md font-medium bg-amber-900 hover:bg-amber-700 px-4 py-2 rounded-md '>Contact</button> </a>
</ul>
        </nav>
     </div>
    
    </div>
  )
}
