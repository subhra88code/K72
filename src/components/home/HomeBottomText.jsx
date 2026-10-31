import React from 'react'
import { Link } from 'react-router'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <Link to={"/projects"} className='text-[6.5vw] leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50]  px-10 pt-5 pb-0  border-3 rounded-full uppercase border-white'>
        <div className='relative top-1.5'>Projects</div></Link>
        <Link to={"/agence"} className='text-[6.5vw] leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] px-10 pt-5 pb-0 border-3 rounded-full uppercase border-white'>
        <div className='relative top-1.5'>Agence</div></Link>
    </div>
  )
}

export default HomeBottomText