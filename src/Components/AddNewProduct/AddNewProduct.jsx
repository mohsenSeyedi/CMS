import { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { BsBag, BsCurrencyDollar } from "react-icons/bs";


function AddNewProduct() {

  const [newPorductTitle , setNewProductTitle] = useState("")
  const [newPorductPrice , setNewProductPrice] = useState("")
  const [newPorductCount , setNewProductCount] = useState("")
  const [newPorductImg , setNewProductImg] = useState("")
  const [newPorductPopularity , setNewProductPopularity] = useState("")
  const [newPorductSale , setNewProductSale] = useState("3000")
  const [newPorductColors , setNewProductColors] = useState("")

  const createNewProduct = async (e) => {
    e.preventDefault()
    alert("as")
    const newPorduct = {
      title: newPorductTitle,
      price: newPorductPrice,
      count: newPorductCount,
      img: newPorductImg,
      popularity: newPorductPopularity,
      sale: newPorductSale,
      colors: newPorductColors
    };
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPorduct),
    });
    console.log(res);
  };

  return (
    <div className="products-container mb-20">
      <div className="product-head">
        <h2 className="text-4xl font-bold">افزودن محصول جدید</h2>
      </div>
      <div className="products-add-form mt-8 rounded-2xl p-10 bg-white-color shadow-xl">
        <form action="#" className="w-full grid grid-cols-2 gap-4">
          <div className="relative w-full">
            <input
            value={newPorductTitle}
            onChange={e => setNewProductTitle(e.target.value)}
              type="text"
              className="w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
              placeholder="اسم محصول را بنویسید"
            />
            <MdDriveFileRenameOutline className="absolute top-4 right-2" />
          </div>
          <div className="relative w-full">
            <input
            value={newPorductCount}
             onChange={e => setNewProductCount(e.target.value)}
              type="text"
              className=" w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
              placeholder="موجودی محصول را بنویسید"
            />
            <BsBag className="absolute top-4 right-2" />
          </div>
          <div className="relative w-full">
            <input
            value={newPorductPrice}
             onChange={e => setNewProductPrice(e.target.value)}
              type="text"
              className=" w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
              placeholder="قیمت محصول را بنویسید"
            />
            <BsCurrencyDollar className="absolute top-4 right-2" />
          </div>
          <div className="relative w-full">
            <input
            value={newPorductPopularity}
             onChange={e => setNewProductPopularity(e.target.value)}
              type="text"
              className=" w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
              placeholder="میزان محبوبیت محصول را بنویسید"
            />
            <BsCurrencyDollar className="absolute top-4 right-2" />
          </div>
          <div className="relative w-full">
            <input
            value={newPorductColors}
             onChange={e => setNewProductColors(e.target.value)}
              type="text"
              className=" w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
              placeholder="رنگ محصول را بنویسید"
            />
            <BsCurrencyDollar className="absolute top-4 right-2" />
          </div>
          <div className="relative w-full">
            <input
            value={newPorductImg}
             onChange={e => setNewProductImg(e.target.value)}
              type="text"
              placeholder="src"
              className=" w-full outline-none pr-10 py-3 rounded-lg bg-gray-100"
            />
            <GrGallery className="absolute top-4 right-2" />
          </div>
          <div className="">
            <button className="btn" onClick={AddNewProduct}>
              افزودن
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewProduct;
