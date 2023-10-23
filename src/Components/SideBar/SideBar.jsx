import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { BiMessageAltDetail , BiDollar } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export default function SideBar() {
  return (
    <div className="side-bar w-2/12 text-white-color font-bold h-screen bg-blue-color">
        <div className='side-bar-container'>
            <div>
                <h3 className="text-xl px-2 py-4 border-b border-gray-500">به داشبورد خود خوش آمدید</h3>
            </div>
            <div className="mt-8 text-2xl">
                <ul>
                    <li className="mb-1 active transition-all hover:bg-[#310f7a]">
                        <a href="#" className='flex py-4'> 
                            <AiOutlineHome className='mx-2'/>
                            صفحه اصلی
                        </a>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <a href="#" className='flex py-4'> 
                            <BsHandbag className='mx-2'/>
                            محصولات
                        </a>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <a href="#" className='flex py-4'> 
                            <BiMessageAltDetail className='mx-2'/>
                            کامنت ها
                        </a>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">

                        <a href="#" className='flex py-4'> 
                            <FiUsers className='mx-2'/>
                            کاربران
                        </a>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <a href="#" className='flex py-4'> 
                            <HiOutlineShoppingBag className='mx-2'/>
                            سفارشات
                        </a>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <a href="#" className='flex py-4'> 
                            <BiDollar className='mx-2'/>
                            تخفیف ها
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
