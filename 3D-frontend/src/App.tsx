import Home from "./components/model";

function App() {
  return (
    <>
      <div className="h-[100vh] relative flex justify-center items-center bg-[#e6e3e3]">
        <div className="absolute top-0 text-5xl">
          <a href="">home</a>
          <a href="">about</a>
          <a href="">shop</a>
          <a href="">price</a>
          <a href="">product</a>
        </div>
        <Home />
      </div>
    </>
  );
}

export default App;
