import React, { useState } from 'react'
import Logo from '../assests/Logo.png'
import {Menu , X} from 'lucide-react'
import ResponsiveMenu from './Responsive-Menu'
function Navbar() {
    const [open , setOpen] = useState(false)
  return (
    <div className='bg-amber-950 w-full top-0 h-15 py-4 px-8 mx-auto sticky z-10 scroll-smooth'>
        <div className='flex justify-between items-center '>
        <div className='flex items-center justify-center text-center'>
     <img src={Logo}  alt='imge'className='w-14' />
    <h1 className='p-2 text-2xl text-white  text-center font-cursive'>Coffe shop</h1>
</div>
<nav className='hidden md:flex gap-6 items-center'> 
    <ul className='flex justify-between items-center gap-6 text-white font-medium text-lg '>
        <a href='/'><li>Home</li></a>
        <a href='#menu'><li>Menu</li></a>
        <a href='#about'><li>About</li></a>
        <a href='#testimonial'><li>Testimonial</li></a>
    </ul>
   <a href='#contact'> <button className='text-white text-md font-medium
    bg-amber-900 hover:bg-amber-700 px-4 py-2 rounded-md '>Contact</button></a>
</nav>
    {
        open? <X onClick={()=>setOpen(false)} className='text-white w-8 h-8 md:hidden'/> : <Menu onClick={()=> setOpen(true)}
        className='text-white w-8 h-8 md:hidden '/>
    }
        </div>
        <ResponsiveMenu open={open} setOpen={setOpen}/>
    </div>
    
  )
}

export default Navbar
