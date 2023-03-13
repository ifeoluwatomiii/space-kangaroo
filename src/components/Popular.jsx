import React from 'react'
import pop11 from '../assets/pop11.png'
import pop2 from '../assets/pop2.png'
import pop3 from '../assets/pop3.png'
import pop4 from '../assets/pop4.png'
import pop5 from '../assets/pop5.png'
import pop6 from '../assets/pop6.png'
import Cards from './Cards'

const Popular = () => {
  return (
    <div className='bg-[#1E0E22] py-12'>
        <div className='py-4 px-4 container max-w-[1280px] mx-auto'>
        <div>
            <h4 className='text-[#0dd71491] font-bold mb-8 text px-2 py-4'>TOP GAMES</h4>
        </div>
        <div className='flex justify-between items-start flex-col xl:flex-row px-2'>
            <h2 className='font-bold text-3xl mb-8 text-white'>Most Popular</h2>
            <p className='mb-8 text-white'>Check out our latest collection of games</p>
            <button className="bg-[#0dd71491] hover:bg-[#0dd71446] hover:scale-110 transform transition duration-500 px-10 py-2 font-bold rounded-sm text-white mb-4">View All</button>
        </div>
        <div>
           <Cards/>
        </div>
        </div>
    </div>
  )
}

export default Popular