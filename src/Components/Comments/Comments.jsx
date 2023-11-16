import React from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from "sweetalert2";
import swal from 'sweetalert';
export default function Comments() {

  const [comments , setComments] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/comments/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setComments(data)
    })
  },[])

  const getShowDetailsComments = (commentMess) => {
    swal({
      title: commentMess,
      buttons: "دیدم",
    })
  }

  const removeCommentUser = async (commentId) => {
    swal({
      title: "آیا از حذف محصول مطمئن هستید ؟",
      icon: "error",
      buttons: ["خیر", "بله"],
    }).then(async (res)  =>  {
      if(res) {
        const res = await fetch(`http://localhost:3000/api/comments/${commentId}` , {
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
              <th className="p-5">آیدی</th>
              <th className="p-5">اسم</th>
              <th className="p-5">تاریخ</th>
              <th className="p-5">وضیعیت</th>
            </tr>
          </thead>
          <tbody>
           
              {
               !comments.length ? (
                   <ErrorBox msg={"هیچ نظری یافت نشد"} />
                
               ) : comments.map(comment => (
               <tr
               key={comment.id}
                className="text-center flex justify-between pr-[15px] pl-[20px] border-b"
              >
                <td className="p-5">{comment.id}</td>
                <td className="p-5">{comment.userID}</td>
                <td className="p-5">{comment.date}</td>
                <td className="p-5">{comment.isAccept ? "پاسخ داده شده" : "پاسخ داده"}</td>
                <td className="p-5">
                  <button className="btn mr-1" onClick={() => getShowDetailsComments(comment.body)}>جزییات</button>
                  <button
                  onClick={() => removeCommentUser(comment.id)}
                    className="btn mr-1"
                  >
                    حذف
                  </button>
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
