import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
        <Button className="hover:bg-gray-800 hover:text-[#ebebeb] bg-[#ebebeb] mt-2 font-bold w-[90%] border-2 border-gray-700 text-gray-700 rounded-full orbitron-text z-50 cursor-pointer">
          Explore
          <ArrowRight
            size={30}
            className="bg-gray-700 rounded-full text-[#ebebeb] "
          />
        </Button>
      </div>
      <div className="absolute bottom-0 right-0 flex w-[450px] rounded-4xl object-cover backdrop-blur-md rgba(255, 255, 255, 0.05)">
        <DotLottieReact
          src="https://lottie.host/4dbf65b8-04f7-492a-8bd5-baf2e0d243cb/JKe5ZydZfx.lottie"
          className="h-[280px] object-cover"
          loop
          autoplay
        />
      </div>
    </>
  );
};

export default HeroSection;
