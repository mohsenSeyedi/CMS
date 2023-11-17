import React,{useEffect, useState} from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import swal from 'sweetalert';

export default function Users() {

  const [users , setUsers] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/api/users/")
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      console.log(data);
    })
  },[])

  const removeUser = async (userId) => {
    console.log(userId);
    swal({
      title: "آیا از حذف کاربر مورد نظر مطمئن هستید ؟",
      icon: "error",
      buttons: ["خیر", "بله"],
    }).then(async res => {
      if(res) {
        const res = await fetch(`http://localhost:3000/api/users/${userId}` , {
          method : "DELETE"
        })
        console.log(res);
      }
    })
  }
  return (
    <div>
        <table className="products-table bg-white-color w-full px-12 py-10 rounded-2xl">
          <thead>
            <tr className="text-center flex justify-between pt-4 pr-[50px] pl-[240px] border-b">
              <th className="p-5">اسم</th>
              <th className="p-5">آدرس</th>
              <th className="p-5">شماره تماس</th>
              <th className="p-5">امتیاز</th>
            </tr>
          </thead>
          <tbody>
           
          {
            !users.length ? (
              <ErrorBox msg={"هیچ کاربری یافت نشد"} />
            ): 
            users.map(user => (
              <tr
              key={user.id}
              className="text-center flex justify-between pr-[15px] pl-[20px] border-b"
            >
              <td className="p-5">{user.firsname} {user.lastname}</td>
              <td className="p-5">{user.address}</td>
              <td className="p-5">{user.phone}</td>
              <td className="p-5">{user.score}</td>
              <td className="p-5">
                <button className="btn mr-1">جزییات</button>
                <button onClick={() => removeUser(user.id)} className="btn mr-1"> حذف</button>
                <button className="btn mr-1">ویرایش</button>
              </td>
            </tr>
            ))
          }
         
          </tbody>
        </table>
    </div>
  )
}
