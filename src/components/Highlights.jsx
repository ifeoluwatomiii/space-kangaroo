import React from 'react'
import teamphoto from '../assets/teamphoto.jpg'

const Highlights = () => {
  return (
    <div className='bg-[#090B1A] py-14 px-4'>
        <div>
            <h3 className='font-bold text-white text-3xl text-center'> <span className='text-[#0dd71491]'>BEST</span>  HIGHLIGHTS OF <br />THE SEASON</h3>
        </div>
        <div className='flex items-center justify-center py-12 text-white flex-col'>
            <img className='border-4 border-[#0dd71491]' src={teamphoto} alt="" />
            <p className='mt-2'>Our Team at Australia for the World Glazer tournament. (2023)</p>
        </div>
    </div>
  )
}

export default Highlights