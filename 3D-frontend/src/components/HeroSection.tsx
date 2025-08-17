import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  const [overlap, setoverlap] = useState("z-40");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setoverlap("z-41");
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <img
        src="/heroShapeB.png"
        alt="hero shape"
        className="absolute bottom-0 left-0 h-75 object-cover"
      />
      <div
        className={`absolute p-4 text-center ${overlap} justify-center items-center h-[190px] w-[365px] rounded-4xl rounded-tr-[65px]  bg-[#ebebeb] bottom-0 left-0`}
      >
        <div className="orbitron-text mt-1 mr-2">
          <h3 className="orbitron-text font-bold ml-4 text-gray-600 text-2xl text-left tracking-widest">
            Designed for the Future Gen
          </h3>
          <p className="text-sm mt-2 ml-4 text-gray-500 text-left tracking-widest">
            “where intelligence meets imagination”
          </p>
        </div>
        <Button className="hover:bg-gray-800 hover:text-[#ebebeb] bg-[#ebebeb] mt-3 font-bold w-[90%] border-2 border-gray-700 text-gray-700 rounded-full orbitron-text z-50 cursor-pointer">
          Explore
          <ArrowRight
            size={30}
            className="bg-gray-700 rounded-full text-[#ebebeb] "
          />
        </Button>
      </div>
      <div className="absolute bottom-0 right-0 w-[400px] h-50 flex justify-center items-center rounded-4xl">
        <Button className="hover:bg-gray-800 hover:text-[#ebebeb] bg-[#ebebeb] border-4 border-gray-800 font-bold cursor-pointer ${} text-2xl text-gray-800 orbitron-text w-70 h-24 ">
          Pre-order Now
        </Button>
      </div>
    </>
  );
};

export default HeroSection;
