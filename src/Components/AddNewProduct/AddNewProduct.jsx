import React from 'react'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { BsBag , BsCurrencyDollar } from "react-icons/bs";

function AddNewProduct() {
  return (
    <div className="products-container mb-20">
        <div className="product-head">
          <h2 className="text-4xl font-bold">افزودن محصول جدید</h2>
        </div>
        <div className="products-add-form mt-8 rounded-2xl p-10 bg-white-color shadow-xl">
          <form action="#" className="w-full grid grid-cols-2 gap-4">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
                placeholder="اسم محصول را بنویسید"
              />
              <MdDriveFileRenameOutline className="absolute top-4 right-2" />
            </div>
            <div className="relative w-full">
              <input
                type="text"
                className=" w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
                placeholder="موجودی محصول را بنویسید"
              />
              <BsBag className="absolute top-4 right-2" />
            </div>
            <div className="relative w-full">
              <input
                type="text"
                className=" w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
                placeholder="قیمت محصول را بنویسید"
              />
              <BsCurrencyDollar className="absolute top-4 right-2" />
            </div>
            <div className="relative w-full">
              <input
                type="file"
                className=" w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
              />
              <GrGallery className="absolute top-4 right-2" />
            </div>
            <div className="">
              <button className="btn">افزودن</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddNewProduct
