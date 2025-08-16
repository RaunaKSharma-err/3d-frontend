import Robot_model from "./components/Robot_model";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [paddingClass, setPaddingClass] = useState("p-10");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPaddingClass("p-3");
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className={`h-[100vh] w-[100%] bg-black flex justify-center items-center transition-all duration-3000 ease-in-out ${paddingClass}`}
      >
        <div className="h-[100%] relative flex justify-center items-center bg-[#ebebeb] rounded-2xl">
          <Navbar />
          <div className="absolute flex top-[30%] ml-24 text-8xl text-gray-300 z-0 tracking-[60px] text-shadow-2xs font-bold orbitron-text">
            FUTURISTIC
          </div>
          <div className="absolute flex top-[50%] ml-16 text-3xl text-gray-300 z-0 tracking-[15px] text-shadow-2xs font-bold orbitron-text">
            Redefining Intelligence with Design
          </div>

          <Robot_model />
        </div>
      </div>
    </>
  );
}

export default App;
