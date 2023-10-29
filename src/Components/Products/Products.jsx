import React, { useEffect,useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductTable/ProductTable";
import ErrorBox from "../ErrorBox/ErrorBox";


export default function Products() {

  
  return (
    <div className="section-products w-full text-2xl mt-20 ">
      <AddNewProduct/>
      {/* <ErrorBox msg={"هیچ محصولی یافت نشد"} /> */}
        <ProductsTable/>
    </div>
  );
}
