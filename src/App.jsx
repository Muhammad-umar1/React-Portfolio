import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {GiCrossedBones} from "react-icons/gi"
import "./App.css";
import { Main, Navbar } from "./components/Molecules";
import { useState } from "react";
import Home from "./components/Molecules/Home";

function App() {
  const [show, setShow] = useState(false)
  const [navShow, setNavShow] = useState(false)
  
  return (
    <div className="flex justify-end overflow-hidden relative">
      <Navbar className={`navbar w-72 h-screen flex-[0.2] fixed top-0 lg:left-0 left-[-300px] z-[9997] transition-all ease-in-out duration-500 flex justify-start flex-col items-center overflow-y-auto bg-[#040b14] rounded-md text-white font-['poppins','sans']`}  />
      <div className="flex lg:hidden justify-end absolute top-1 right-1 sm:top-3 sm:right-3">
      <div className="border p-2 bg-[#149ddd] rounded-full ">
        {show ? 
          <div>
            <GiCrossedBones className="w-6 h-6 z-50" onClick={() =>[ setShow(!show) , console.log("i was clicked by close", show)]} />
          </div> : 
          <AiOutlineMenu onClick={() =>[ setShow(!show) , console.log("i was clicked by close", show)]} className="w-6 h-6 z-50" /> }
      </div>
      <Navbar id="header" className={`w-72 h-screen z-[10]  transition-all ease-in-out duration-500 overflow-auto fixed top-0 ${show ? "left-0": "left-[-300px]"} flex justify-start flex-col items-center rounded-md bg-[#040b14] text-white font-['poppins','sans']`} />
      </div>
      <Main />
    </div>
  );
}

export default App;