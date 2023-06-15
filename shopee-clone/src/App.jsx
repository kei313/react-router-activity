import "./index.css";
import { Carousel } from "flowbite-react";

function App() {
  return (
    <div className="relative">
      <Carousel>
        <img
          className="relative"
          src="https://down-ph.img.susercontent.com/file/ph-50009109-6df29bb7997c8fc95ffeb11665ad78a9"
          alt="2"
        />
        <img
          className="relative"
          src="https://down-ph.img.susercontent.com/file/ph-50009109-2a52c60f9af45462384a2dcdfae5cd69"
          alt="3"
        />
      </Carousel>
    </div>
  );
}

export default App;
