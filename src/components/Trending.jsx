import React from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card5.png'

const Trending = () => {
  return (
    <div className='bg-[#090B1A] py-20'>
        <div className=' px-4 container max-w-[1280px] mx-auto'>
        <div>
            <h4 className='text-[#0dd71491] font-bold mb-8 text py-4 px-2'>TRENDING</h4>
        </div>
        <div className='flex justify-between items-start flex-col xl:flex-row px-2'>
            <h2 className='font-bold text-3xl mb-8 text-white'>Trending Now</h2>
            <p className='mb-8 text-white'>Check out our latest collection of games</p>
            <button className="bg-[#0dd71491]  hover:bg-[#0dd71446] hover:scale-110 transform transition duration-500 px-10 py-2 font-bold rounded-sm mb-4 text-white">View All</button>
        </div>
        <div className='grid xl:grid-cols-4 xl:gap-5 px-4 grid-cols-2 gap-4 py-6'>
            <img className='hover:scale-110 transform transition duration-500' src={card1} alt="" />
            <img className='hover:scale-110 transform transition duration-500' src={card2} alt="" />
            <img className='hover:scale-110 transform transition duration-500' src={card4} alt="" />
            <img className='hover:scale-110 transform transition duration-500' src={card3} alt="" />
        </div>
    </div>
    </div>
    
  )
}

export default Trending