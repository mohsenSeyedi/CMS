import React, { useEffect, useState } from "react";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products/")
      .then((res) => res.json())
      .then((datas) => {
        setProducts(datas);
        console.log(products);
      });
  }, []);

  return (
    <table className="products-table bg-white-color w-full px-12 py-10 rounded-2xl">
      <tr className="text-center flex justify-between pt-4 pr-[50px] pl-[240px] border-b">
        <th className="p-5">عکس</th>
        <th className="p-5">اسم</th>
        <th className="p-5">قیمت</th>
        <th className="p-5">موجودی</th>
      </tr>

      {products.map((product) => (
        <tr key={product.id} className="text-center flex justify-between pr-[15px] pl-[20px] border-b">
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
            <button className="btn mr-1">حذف</button>
            <button className="btn mr-1">ویرایش</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
