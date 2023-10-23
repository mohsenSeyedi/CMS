import { useState } from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <div className="w-full flex">
        <SideBar />
        <div className="main w-10/12 bg-white-50-color">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default App;
