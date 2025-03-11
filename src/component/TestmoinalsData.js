import React from 'react'

export default function TestmoinalsData(props) {
    const{id, name, text, img} = props.data
  return (
    <div className='my-6'>
        <div key={id} className='flex flex-col gap-4 bg-amber-900/10 py-8 px-6 rounded-xl mx-4 shadow-lg relative ' >  
    <div className=' mb-4'>
        <img src={img} alt='' className='rounded-full w-20 h-20'/>
    </div>
    <div className='flex flex-col items-center gap-6'>
        <div className='space-y-3'>
            <p className='text-gray-500 text-xs '>{text}</p>
            <h1 className='text-black/80 text-lg font-cursive2 font-bold'>{name}</h1>
        </div>
    </div>
    <p className='absolute top-0 right-0 text-9xl text-amber-900/20 font-serif'>''</p>
     </div>
   </div>
    )
}
