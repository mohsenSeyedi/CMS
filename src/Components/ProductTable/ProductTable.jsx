import React from 'react'


export default function ProductsTable() {
  return (
      <table className='products-table bg-white-color w-full px-12 py-10 rounded-2xl'>
          <tr className='text-center flex justify-between pt-4 pr-[50px] pl-[240px] border-b'>
              <th className="p-5">عکس</th>
              <th className="p-5">اسم</th>
              <th className="p-5">قیمت</th>
              <th className="p-5">موجودی</th>
          </tr>

          <tr className='text-center flex justify-between pr-[15px] pl-[20px] border-b'>
              <td className="p-5">
                  <img src="./public/images/Products/oil.jpeg" alt="oil image" className='w-28 h-28' />
              </td>
              <td className="p-5">روغن سرخ کردنی</td>
              <td className="p-5">92000 تومان</td>
              <td className="p-5">82</td>
              <td className="p-5">
                  <button className='btn mr-1'>جزییات</button>
                  <button className='btn mr-1'>حذف</button>
                  <button className='btn mr-1'>ویرایش</button>
              </td>
          </tr>
          
      </table>
  )
}