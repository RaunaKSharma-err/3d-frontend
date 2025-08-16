import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 h-[60px] w-[100%] text-5xl flex justify-between px-3 items-center">
        <div className="flex justify-between items-center h-10 w-[435px]">
          <img
            src="A.png"
            alt="Logo"
            className="h-20 mt-10 animate-slide-from-top z-10"
          />
          <p className="orbitron-text text-2xl text-gray-800 tracking-widest">Shaping the Future</p>
        </div>
        <div className="text-sm gap-12 ml-2 flex font-bold animate-slide-from-top text-white z-50">
          <Button className="hover:text-gray-800 hover:bg-[#ebebeb] z-50 cursor-pointer bg-black border-2 text-[#ebebeb] rounded-full">
            Home
          </Button>

          <Button className="hover:text-gray-800 hover:bg-[#ebebeb] z-50 cursor-pointer bg-black border-2 text-[#ebebeb] rounded-full">
            Contact
          </Button>
          <Button className="hover:text-gray-800 hover:bg-[#ebebeb] z-50 cursor-pointer bg-black border-2 text-[#ebebeb] rounded-full">
            FAQs
          </Button>
        </div>
        <div className="flex justify-between items-center w-[400px]">
          <div className="z-50 flex justify-center items-center gap-2">
            <Input
              className="border-gray-800 border-2 rounded-full bg-[#ebebeb] text-gray-800 font-bold"
              placeholder="Search..."
            />
            <Search size={30} color="black" className="cursor-pointer" />
          </div>
          <Button className="h-10 font-bold rounded-4xl cursor-pointer z-50 animate-slide-from-top bg-[#ebebeb] border-2 text-gray-800 hover:text-[#ebebeb]">
            Signup
          </Button>
        </div>
        <img
          src="/topShape.png"
          alt="top shape"
          className="absolute h-[200px] w-[900px] -top-[0.1px] right-[212px] object-cover"
        />
        <img
          src="/topShape-2.png"
          alt="top shape"
          className="absolute h-[115px] -top-[2px] right-[0px] object-contain"
        />
        <img
          src="/topShape-2.png"
          alt="top shape"
          className="absolute h-[110px] -top-[2px] -left-[1px] transform scale-x-[-1] object-contain"
        />
      </div>
    </>
  );
};

export default Navbar;
