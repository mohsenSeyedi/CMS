import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGTH
    });
  }
  
  useEffect(() => {
    fetch("http://localhost:3000/api/products/")
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        setProducts(datas);
      });
  }, []);

  const removeProductFunc = async (productId) => {
    
    swal({
      title: "آیا از حذف محصول مطمئن هستید ؟",
      icon: "error",
      buttons: ["خیر", "بله"],
    }).then(async (res) => {
      if (res) {
        const res = await fetch(`http://localhost:3000/api/products/${productId}`,
          {
            method: "DELETE",
          }
        );
        const removeProduct = await res.json();
        console.log(removeProduct);
        if(res.status === 200) {
          notify()
        }
      }
    });
  };


  return (
    <>
      {products.length < 1 ? (
        <ErrorBox msg={"هیج محصولی یافت نشد !"} />
      ) : (
        <table className="products-table bg-white-color w-full px-12 py-10 rounded-2xl">
          <thead>
            <tr className="text-center flex justify-between pt-4 pr-[50px] pl-[240px] border-b">
              <th className="p-5">عکس</th>
              <th className="p-5">اسم</th>
              <th className="p-5">قیمت</th>
              <th className="p-5">موجودی</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="text-center flex justify-between pr-[15px] pl-[20px] border-b"
              >
                <td className="p-5">
                  <img
                    src="./public/images/Products/oil.jpeg"
                    alt="oil image"
                    className="w-28 h-28"
                  />
                </td>
                <td className="p-5">{product.title}</td>
                <td className="p-5">{product.price} تومان</td>
                <td className="p-5">{product.count}</td>
                <td className="p-5">
                  <button className="btn mr-1">جزییات</button>
                  <button
                    onClick={() => removeProductFunc(product.id)}
                    className="btn mr-1"
                  >
                    حذف
                  </button>
                  <button className="btn mr-1">ویرایش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
}
