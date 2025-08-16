import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";
const HeroSection = () => {
  return (
    <>
      <img
        src="/heroShapeB.png"
        alt="hero shape"
        className="absolute bottom-0 left-0 h-85 object-cover"
      />
      <div className=" absolute p-4 text-center justify-center items-center h-[220px] w-[415px] rounded-4xl rounded-tr-[75px]  bg-[#ebebeb] bottom-0 left-0">
        <div className="orbitron-text mt-1 mr-2">
          <h3 className="orbitron-text font-bold text-gray-600 text-2xl tracking-widest">
            Designed for the Future
          </h3>
          <div className="flex ml-2 mt-3 text-gray-600">
            <Star size={15} />
            <Star size={15} />
            <Star size={15} />
            <Star size={15} />
            <Star size={15} />
          </div>
          <p className="text-sm mt-4 text-gray-500 text-left tracking-widest">
            “Futuristic isn’t just a word for us. It’s the way we think, design,
            and build. Our mission is to create intelligent solutions.”
          </p>
        </div>
        <Button className="hover:bg-black hover:text-[#ebebeb] bg-[#ebebeb] mt-3 font-bold w-90 border-2 border-gray-700 text-gray-700 rounded-full orbitron-text z-50 cursor-pointer">
          Explore
          <ArrowRight
            size={30}
            className="bg-gray-700 rounded-full text-[#ebebeb] "
          />
        </Button>
      </div>
    </>
  );
};

export default HeroSection;
