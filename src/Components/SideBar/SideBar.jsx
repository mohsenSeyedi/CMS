import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { BiMessageAltDetail , BiDollar } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="side-bar w-2/12 fixed text-white-color font-bold h-screen bg-blue-color">
        <div className='side-bar-container'>
            <div>
                <h3 className="text-xl px-2 py-4 border-b border-gray-500">به داشبورد خود خوش آمدید</h3>
            </div>
            <div className="mt-8 text-2xl">
                <ul>
                    <li className="mb-1 active transition-all hover:bg-[#310f7a]">
                        <Link to={"./products"} className='flex py-4'>
                            <AiOutlineHome className='mx-2'/>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <Link to={"./products"} className='flex py-4'>
                            <BsHandbag className='mx-2'/>
                            محصولات
                        </Link>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <Link to={"./comments"}  className='flex py-4'>                      
                            <BiMessageAltDetail className='mx-2'/>
                            کامنت ها
                        </Link>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <Link to={"./users"} className='flex py-4'>
                            <FiUsers className='mx-2'/>
                            کاربران
                        </Link>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <Link to={"./orders"} className='flex py-4'> 
                            <HiOutlineShoppingBag className='mx-2'/>
                            سفارشات
                        </Link>
                    </li>
                    <li className="mb-1 transition-all hover:bg-[#310f7a]">
                        <Link to={"./oofs"} className='flex py-4'>
                            <BiDollar className='mx-2'/>
                            تخفیف ها
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
