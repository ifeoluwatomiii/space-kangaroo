import React from 'react'
import Matches from './Matches'

const Recent = () => {
  return (
    <div className='bg-[#090B1A] py-20 '>
      <div className=' container max-w-[1280px] mx-auto px-8'>
        <div className='text-center'>
        <h3 className='font-bold text-3xl text-white'>RECENT <span className='text-[#0dd71491]'>MATCHES</span></h3>
        </div>
        <div className='flex justify-between flex-col xl:flex-row'>
        <h3 className='text-[#0dd71491] border-b-2 w-[70%] xl:w-[25%] mb-4 mt-4 py-4 border-[#0dd71491] font-bold text-2xl'>FINISHED MATCHES</h3>
        <button className="bg-[#0dd71491] px-4 xl:px-8 py-2 font-bold rounded-sm text-white mb-4 hover:bg-[#0dd71446]">VIEW ALL</button>
        </div>
      </div>
      <div className='px-4 '>
        <Matches/>
      </div>
     
    </div>
  )
}

export default Recent