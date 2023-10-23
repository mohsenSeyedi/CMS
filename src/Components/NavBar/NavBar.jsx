import React from "react";
import { BsBrightnessHigh } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';

export default function NavBar() {
  return (
    <div className="header text-xl pt-4 w-full flex justify-between items-center px-8">
      <div className="flex items-center">
        <img className="w-16 h-16 pb-2 object-contain" src="./public/images/Avatar/msg317320486-21967_prev_ui.png" alt=""/>
        <div className="pr-1">
          <h1 className="font-bold text-2xl">محسن سیدی</h1>
          <h3 className="opacity-70 pt-2 font-bold">برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <div className="mx-4 relative w-[350px]">
          <input className="p-4 w-full outline-none rounded-xl bg-white-color shadow-xl" type="text" placeholder="جست و جو بکنید ..." />
          <button className="bg-blue-color py-2 px-4 rounded-xl text-white-50-color absolute left-2 top-2">جست و جو</button>
        </div>
 
        <button className="bg-blue-color p-4 text-3xl text-white-50-color mx-4 rounded-xl">
          <AiOutlineBell className=""/>
        </button>
        <button className="bg-blue-color p-4 text-3xl text-white-50-color mx-4 rounded-xl">
          <BsBrightnessHigh className=""/>
        </button>
      </div>
    </div>
  );
}
