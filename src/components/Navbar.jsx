import React from 'react'
import logo from '../assets/background.png'
import {MdGamepad} from 'react-icons/md'
import { useState } from 'react'
import {VscClose} from 'react-icons/vsc'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='flex justify-between items-center py-4 px-8 min-h-[120px] mb-[-120px] absolute w-full z-30'>
        <div>
            <img className='w-[50%]' src={logo} alt="" />
        </div>
        <div className=' gap-6 text-white hidden xl:flex grow xl:justify-end'>
            <a className='hover:text-[#0dd71491]' href="">Homepage</a>
            <a className='hover:text-[#0dd71491]' href="">Team</a>
            <a className='hover:text-[#0dd71491]' href="">Matches</a>
            <a className='hover:text-[#0dd71491]' href="">Membership</a>
            <a className='hover:text-[#0dd71491]' href="">Contact Us</a>
            
        </div>

        {/*mobile Navbar*/}
        <div className={isOpen ?'bg-[#0dd71491] flex flex-col gap-4 w-[50%] xl:hidden h-[30%] px-4 py-8 text-white mt-8 cursor-pointer  transition-all ease-in duration-500 shadow-lg fixed top-9 left-[43%] items-center':' text-white transition-all ease-out duration-500 hidden'}>
            <a className='transition transform hover:translate-x-3' href="">Homepage</a>
            <a className='transition transform hover:translate-x-3' href="">Team</a>
            <a className='transition transform hover:translate-x-3' href="">Matches</a>
            <a className='transition transform hover:translate-x-3' href="">Membership</a>
            <a className='transition transform hover:translate-x-3' href="">Contact Us</a>
        </div>

        <div>
        {isOpen ?
         (<VscClose
        className='w-[30px] h-[40px] text-white'
        title='Close'
        onClick={()=>setIsOpen(!isOpen)}/>):
        <MdGamepad  className='text-white w-6 h-6 xl:hidden cursor-pointer'
        title='Menu'
        onClick={()=> setIsOpen(!isOpen)}/>}
           
        </div>
    </div>
  )
}

export default Navbar