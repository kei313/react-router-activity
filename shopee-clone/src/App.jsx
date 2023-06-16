import { Carousel } from "flowbite-react";
import "./index.css";
import Timer from "./timer.jsx";

const products = ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5o_Lgj-AlSKdKld0LJWZLlAAFNriw4KvRea3vS3nUA2JMgR-CZRqGqmVGJODeHhxobyEWJjbP0mRKIbEWjhwiDrKxBjFWcjfUpRav-6at&usqp=CAE","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRoc18szOBd9Xhh4NPg0ALLuDw2wCG6PfYFkUIM9xJSGkniDWSG7L2LmN0L5qMMJ6U8aXpNOXw6fg0D2cUeGeSZVJNqytpTUWoFIZzVnBneZV_e61cG23Ne4Q&usqp=CAE","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIM7W2HCvSMcsdN2ad4E2CswpQEjvsSDl0KzyHSIWSF2pE9wQ3fcwAnPRyebqlqLbuAgYelaQl_bU4J88wxFq26bFGioopCV2LoM8Jc6E&usqp=CAE","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQmJB5ll15UH2xnqzFf4WTp6wQN4S5vqfwSLZrOd4V7frEvO_qrgK3v6STFnHgG2Xmq1roU-HG6bnagpjaaflFMAv9r61qulRyejqZjWIbiXUiMLRKBQxz8LA&usqp=CAE","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQBN4nDsD2LuimHeBdO87pPVqN7wnPikGMhORIttJA65Mr5aEg7EWB7YgOcgzh7Z3aUeBJ0wnQhaoRUazCfioo0QucVf4UbwcfKiBDUuXig&usqp=CAE","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS292hXuxh0XHDpuKHEBxix7R_GdvYSiFZgAdDJwmBvKe5ttvk4dKATXE5C5GrtDEDuIlV1ULRK476ODigAFzhYmCEvsvvj97foJ9RFCdW7&usqp=CAE","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLaKJpbClA14_E-OZTJW5JrYOiIp9c0xxrrqCk_FuQPZfIsN6WwZPvr3HopvXJYBedUZAOcejTAin0KKUv018JvBxFy0JraDrBPi3FwxFRfwxiX5YVfXL6Pw&usqp=CAE","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBfjXcfyYYG0_OzsnhL85yK9OCW9Snygb5VrbZG228p51S5pbnMOZOXHMWLE79BqNsPGt5ifzGcTNtypdw8no-ZOUrj1j29vpY5J8RL2VD87tEcxilR98A&usqp=CAE","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOoOH5mdA-y525_pjF8qf2_0lR81n2VJGZTvAYrrTxPGMNfY9-h0LDEaGfqpqVZgn2ywVelcj0UJHi765A5r9J7mhbkb9--xccFul7d6uUorrO8NtdyGqw&usqp=CAE","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEXEUeU-28HIqlLELYZOLfAJwTKd_4sKIqIv6zTT-A5nORzFaYVV2zB8VBB_314mUa_93JkP0qiRAs1pC_GniNIA3EWCOmTqI_CWWtnqQ&usqp=CAE"];
const hoursMinSecs = {hours:2, minutes: 20, seconds: 40}

let prodList = [];
let counter = 1;
for (let i of products) {
  prodList.push(
    <div class="gallery">
      <a target="_blank" href="">
        <img src={i} alt={counter} width="600" height="600"></img>
      </a>
    </div>
  );
  counter++;
} 

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
      <p class="h1App" >FLASH DEALS! <Timer hoursMinSecs={hoursMinSecs}/></p>
      {prodList}
    </div>
  );
}

export default App;
