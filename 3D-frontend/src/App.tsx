import Home from "./components/model";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="h-[100vh] relative flex justify-center items-center bg-[#ebebeb]">
        <div className="absolute top-0 h-[80px] w-[100%] text-5xl flex justify-between px-5 items-center">
          <div className="text-xl gap-4 flex">
          <img src="A.png" alt="Logo" className="h-30 mt-8" />
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">About</a>
          </div>
          <Button className="h-14 w-26 text-xl">SignUp</Button>
        </div>
        <Home />
      </div>
    </>
  );
}

export default App;
