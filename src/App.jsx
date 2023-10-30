import { useState } from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import "./App.css";


function App() {
   const elem = useRoutes(routes)
  return (
    <>
      <div className="w-full ">
        <SideBar />
        <div className="main w-10/12 px-14 bg-white-50-color relative right-[16.5rem]">
          <NavBar />
          {elem}
        </div>
      </div>
    </>
  );
}

export default App;
