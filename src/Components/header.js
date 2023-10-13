import React, { useState } from 'react'
import {TbEqual} from "react-icons/tb"
import {IoCloseOutline} from "react-icons/io5"

function Header() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
        <div className='lg:hidden flex justify-between px-10 absolute top-4 border' style={{width: "100vw"}}>
            <p className='text-4xl font-extrabold pr-4 mt-2' >micro1<span style={{color: "#3444da"}}>.</span></p>
            {isOpen ? 
                <IoCloseOutline className='mt-3 text-2xl' onClick={() => setIsOpen(!isOpen)} />
            :
                <TbEqual className='mt-3 text-2xl' onClick={() => setIsOpen(!isOpen)} />
            }
        </div>
        <div className={`lg:hidden flex justify-between px-10 top-24 lg:static pb-5 lg:w-auto w-full border ${isOpen ? "left-0" : null} lg:text-black text-white z-50 lg:z-50 transition-all duration-500 absolute ${isOpen ? "left-0": "left-[-1090px]"} bg-blue-300 w-10/12`}>
            <div className=''>
                <p className='font-normal text-base cursor-pointer mr-8 pt-4' >Offerings</p>
                <p className='font-normal text-base cursor-pointer mr-8 pt-4' ting->Vetting Process</p>
                <div smooth to="/#how-it-works">
                    <p className='font-normal text-base cursor-pointer mr-8 pt-4'>How it works</p>
                </div>
                <p className='font-normal text-base cursor-pointer mr-8 pt-4' >Hire a Top Engineer</p>
            </div>
        </div> 
        {isOpen ?
            <div className={`lg:flex hidden justify-between mx-10 lg:static mt-4 lg:w-auto w-full ${isOpen ? "left-0" : null} lg:text-black text-white z-50 lg:z-50 transition-all duration-100 absolute ${isOpen ? "left-0": "left-[-1090px]"}`}>
                <div className='flex'>
                    <p className='text-4xl font-extrabold pr-4 mt-2' >micro1<span style={{color: "#3444da"}}>.</span></p>
                    <p className='font-normal text-base cursor-pointer mr-8 pt-4' >Offerings</p>
                    <p className='font-normal text-base cursor-pointer mr-8 pt-4' ting->Vetting Process</p>
                    <div smooth to="/#how-it-works">
                        <p className='font-normal text-base cursor-pointer mr-8 pt-4'>How it works</p>
                    </div>
                </div>
                <p className='flex mt-2' >
                    <p className='pl-6 rounded-full font-semibold text-base text-white mr-4 py-3 cursor-pointer' style={{backgroundColor: "#3444da"}}>Hire a Top Engineer <span className='px-3 py-2 rounded-full mr-2' style={{backgroundColor: "rgba(255,255,255,.1)"}}>{`>`}</span></p>
                </p>
            </div>
        :
            <div className={`lg:flex justify-between mx-10 lg:static mt-4 lg:w-auto w-full ${isOpen ? "left-0" : null} lg:text-black text-white z-50 lg:z-50 transition-all duration-100 absolute ${isOpen ? "left-0": "left-[-1090px]"}`} style={{width: "100vw"}}>
                <div className='flex'>
                    <p className='text-4xl font-extrabold pr-4 mt-2' >micro1<span style={{color: "#3444da"}}>.</span></p>
                    <p className='font-normal text-base cursor-pointer mr-8 pt-4' >Offerings</p>
                    <p className='font-normal text-base cursor-pointer mr-8 pt-4' ting->Vetting Process</p>
                    <div smooth to="/#how-it-works">
                        <p className='font-normal text-base cursor-pointer mr-8 pt-4'>How it works</p>
                    </div>
                </div>
                <p className='flex mt-2' >
                    <p className='pl-6 rounded-full font-semibold text-base text-white mr-4 py-3 cursor-pointer' style={{backgroundColor: "#3444da"}}>Hire a Top Engineer <span className='px-3 py-2 rounded-full mr-2' style={{backgroundColor: "rgba(255,255,255,.1)"}}>{`>`}</span></p>
                </p>
            </div>
        }
    </div>
  )
}

export default Header