import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';

export default function SideBar() {
  return (
    <div className="side-bar w-72 text-white-color font-bold h-screen bg-blue-color">
        <div className='side-bar-container'>
            <div>
                <h3 className="text-2xl px-2 py-4 border-b border-gray-500">به داشبورد خود خوش آمدید</h3>
            </div>
            <div className="mt-8 text-2xl">
                <ul>
                    <li className="mb-2">
                        <a href="#" className='flex py-4'> 
                            <AiOutlineHome className='mx-2'/>
                            صفحه اصلی
                        </a>
                    </li>
                    <li className=" mb-2">
                        <a href="#" className='flex py-4'> 
                            <AiOutlineHome className='mx-2'/>
                            محصولات
                        </a>
                    </li>
                    <li className=" mb-2">
                        <a href="#" className='flex py-4'> 
                            <AiOutlineHome className='mx-2'/>
                            کامند ها
                        </a>
                    </li>
                    <li className=" mb-2">
                        
                        <a href="#" className='flex py-4'> 
                            <AiOutlineHome className='mx-2'/>
                            کاربران
                        </a>
                    </li>
                    <li className=" mb-2">
                        <a href="#" className='flex py-4'> 
                            <AiOutlineHome className='mx-2'/>
                            سفارشات
                        </a>
                    </li>
                    <li className=" mb-2">
                        <a href="#" className='flex py-4'> 
                            <AiOutlineHome className='mx-2'/>
                            تخفیف ها
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
