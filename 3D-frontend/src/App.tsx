import Home from "./components/model";
import { Button } from "./components/ui/button";
import "./App.css";
function App() {
  return (
    <>
      <div className="h-[100vh] relative flex justify-center items-center bg-[#ebebeb]">
        <div className="absolute flex top-[30%] ml-24 text-9xl text-gray-300 z-0 tracking-[80px] text-shadow-2xs font-bold .lavishly-yours-regular">
          FRON TEND
        </div>
        <div className="absolute top-0 h-[80px] w-[100%] text-5xl flex justify-between px-5 items-center">
          <div className="flex justify-between items-center h-[80px]">
            <img src="A.png" alt="Logo" className="h-30 mt-8" />
            <div className="text-xl gap-10 ml-10 flex font-bold">
              <a className="z-50" href="">
                Home
              </a>
              <a className="z-50" href="">
                Products
              </a>
              <a className="z-50" href="">
                About
              </a>
            </div>
          </div>
          <Button className="h-14 w-26 text-xl cursor-pointer z-50">
            Signup
          </Button>
        </div>
        <Home />
      </div>
    </>
  );
}

export default App;
