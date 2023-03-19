import React from 'react'
import team from '../assets/boys2.jpg'
import rod from '../assets/rodney.jpg'
import sarah from '../assets/sarah.jpg'
import zach from '../assets/zach.jpg'
import zick from '../assets/zick.jpg'
import foxy from '../assets/fox.png'
import knight from '../assets/knight.png'

const Team = () => {
  return (
    <div className='bg-[#090B1A] px-2 py-2'>
        
        <div className='w-full'>
            <img src={team} alt="" />
        </div>
        <div className='text-center py-20 px-2'>
            <h3 className='font-bold text-3xl text-white mb-4'>Meet the <span className='text-[#0dd71491]'>Space Kangaroo</span> team!</h3>
            <p className='text-white'>Our online gaming platform is powered by a passionate and talented group of individuals who share a love for gaming and a mission to create amazing gaming experiences for players worldwide. Get to know us below:</p>
        </div>
        <div className='container max-w-[1260px] mx-auto'>
            <div className='flex justify-between items-center gap-4 mb-12 flex-col px-4 xl:flex-row xl:items-end'>
                <div className='xl:w-[40%]'>
                    <img className='' src={rod} alt="" />
                </div>
                <div className=' text-white xl:w-[60%]'>
                <h3 className='font-bold font-xl mb-2 '>Rodney</h3>
                <p>Meet our fearless leader, Rodney. Rodney is the founder and CEO <br /> of Space Kangaroo. He's been in the gaming industry for over a <br /> decade and has a deep understanding of what makes a great game. <br /> His leadership and vision have helped Space Kangaroo become <br /> the thriving gaming platform it is today.</p>
                </div>
            </div>
            
            <div className='text-white flex justify-between items-center gap-4 mb-12 flex-col px-4 xl:flex-row xl:items-end'>
                <div className='xl:w-[40%]'>
                    <img className='w-[100%]' src={sarah} alt="" />  
                </div>
                <div className='text-white xl:w-[60%]'> 
                    <h3 className='font-bold font-xl mb-2 '>Sarah</h3>
                    <p>Next up is Sarah, our lead developer. Sarah is a coding whiz who has <br /> worked on some of the   most popular games in the industry. <br /> She's responsible for ensuring that our platform runs smoothly <br /> and that all of our games are top-notch.</p>
                </div>
            </div>
            
            <div className='text-white flex justify-between items-center gap-4 flex-col px-4 xl:flex-row xl:items-end'>
                <div className='xl:w-[40%]'>
                    <img className='w-[100%]' src={zach} alt="" />
                </div>
                <div className='xl:w-[60%]'>
                    <h3 className='font-bold font-xl mb-2'>Mike</h3>
                    <p>Meet Mike, our creative director. He is an artist at heart and has <br /> a keen eye for design. He's responsible for making sure that our <br /> games look as good as they play. Mike's creativity and attention to <br /> detail have helped make our platform stand out in a crowded market.</p>
                </div>
                
            </div>
            <div className='px-4 flex justify-between items-center gap-4 flex-col xl:flex-row py-12 xl:items-end'>
                <div className='xl:w-[40%]'>
                    <img src={zick} alt="" />
                </div>
                <div className='text-white xl:w-[60%]'>
                    <h3 className='font-bold font-xl mb-2'>Zick</h3>
                    <p>Last but not least, we have Zick, our community manager. Zick is the voice <br /> of Space Kangaroo on social media and in our forums. <br /> He's responsible for engaging with our players and making sure that everyone feels heard and appreciated. <br /> Zick's dedication to our community is a big reason why <br /> we have such a loyal following.</p>
                </div>
            </div>

            <div className='text-white px-4 text-center py-12'>
            <p>Together, our team works tirelessly to create and deliver amazing gaming experiences to players around the world. We're proud of what we've accomplished so far, and we're excited for what's to come.  Thank you for choosing Space Kangaroo!</p>
            </div>
        </div>

        <div className='flex justify-evenly items-center container max-w-[1260px] mx-auto py-20 px-4'>
            <div className='text-white/40 text-center'>
                <h4 className='text-4xl'>#2</h4>
                <img className='w-[300px] transition transform hover:hover:scale-110 duration-500 ease-in-out' src={foxy} alt="" />
            </div>
            <div className='text-white/40 text-center'>
                <h4 className='text-4xl'>#1</h4>
                <img className='w-[400px] transition transform hover:hover:scale-110 duration-500 ease-in-out' src={knight} alt="" />
            </div>
            <div className='text-white/40 text-center'>
                <h4 className='text-4xl'>#3</h4>
                <img className='w-[300px] transition transform hover:hover:scale-110 duration-500 ease-in-out' src={foxy} alt="" />
            </div>
        </div>
        <div className='text-white text-3xl font-bold text-center py-4 px-6 border bg-[#0dd71491] border-transparent container max-w-[1260px] mx-auto'>
            <h3>The Top Team of The Month</h3>
        </div>
        
    </div>
  )
}

export default Team