import { Carousel } from "flowbite-react";
import "./index.css";
import Timer from "./timer.jsx";

const products = [
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5o_Lgj-AlSKdKld0LJWZLlAAFNriw4KvRea3vS3nUA2JMgR-CZRqGqmVGJODeHhxobyEWJjbP0mRKIbEWjhwiDrKxBjFWcjfUpRav-6at&usqp=CAE",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRoc18szOBd9Xhh4NPg0ALLuDw2wCG6PfYFkUIM9xJSGkniDWSG7L2LmN0L5qMMJ6U8aXpNOXw6fg0D2cUeGeSZVJNqytpTUWoFIZzVnBneZV_e61cG23Ne4Q&usqp=CAE",
  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIM7W2HCvSMcsdN2ad4E2CswpQEjvsSDl0KzyHSIWSF2pE9wQ3fcwAnPRyebqlqLbuAgYelaQl_bU4J88wxFq26bFGioopCV2LoM8Jc6E&usqp=CAE",
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQmJB5ll15UH2xnqzFf4WTp6wQN4S5vqfwSLZrOd4V7frEvO_qrgK3v6STFnHgG2Xmq1roU-HG6bnagpjaaflFMAv9r61qulRyejqZjWIbiXUiMLRKBQxz8LA&usqp=CAE",
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQBN4nDsD2LuimHeBdO87pPVqN7wnPikGMhORIttJA65Mr5aEg7EWB7YgOcgzh7Z3aUeBJ0wnQhaoRUazCfioo0QucVf4UbwcfKiBDUuXig&usqp=CAE",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS292hXuxh0XHDpuKHEBxix7R_GdvYSiFZgAdDJwmBvKe5ttvk4dKATXE5C5GrtDEDuIlV1ULRK476ODigAFzhYmCEvsvvj97foJ9RFCdW7&usqp=CAE",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLaKJpbClA14_E-OZTJW5JrYOiIp9c0xxrrqCk_FuQPZfIsN6WwZPvr3HopvXJYBedUZAOcejTAin0KKUv018JvBxFy0JraDrBPi3FwxFRfwxiX5YVfXL6Pw&usqp=CAE",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBfjXcfyYYG0_OzsnhL85yK9OCW9Snygb5VrbZG228p51S5pbnMOZOXHMWLE79BqNsPGt5ifzGcTNtypdw8no-ZOUrj1j29vpY5J8RL2VD87tEcxilR98A&usqp=CAE",
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOoOH5mdA-y525_pjF8qf2_0lR81n2VJGZTvAYrrTxPGMNfY9-h0LDEaGfqpqVZgn2ywVelcj0UJHi765A5r9J7mhbkb9--xccFul7d6uUorrO8NtdyGqw&usqp=CAE",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS292hXuxh0XHDpuKHEBxix7R_GdvYSiFZgAdDJwmBvKe5ttvk4dKATXE5C5GrtDEDuIlV1ULRK476ODigAFzhYmCEvsvvj97foJ9RFCdW7&usqp=CAE"
];
const hoursMinSecs = { hours: 2, minutes: 20, seconds: 40 };

let prodList = [];
let counter = 1;
for (let i of products) {
  prodList.push(
    <div class="gallery">
      <a target="" href="#">
        <img src={i} alt={counter} width="600" height="600"></img>
      </a>
    </div>
  );
  counter++;
}

const products2 = [
  "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
  "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg",
  "https://www.oberlo.com/media/1603957118-winning-products.jpg",
  "https://img.huffingtonpost.com/asset/6390f866230000360036dcef.png?cache=DFlqFhpeKH&ops=scalefit_720_noupscale",
  "https://images.everydayhealth.com/images/what-are-natural-skin-care-products-alt-1440x810.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/gh-092021-top-products-of-august-2021-1632152374.png?crop=1.00xw:1.00xh;0,0&resize=640:*",
  "https://people.com/thmb/nFC5a4tYTCN2Ux4r_8PEuFN08E0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/best-people-reader-products-tout-1147ec3dc96e47ae86d1719c5b6e883f.jpg",
  "https://greatperformersacademy.com/images/images/Articles_images/Top-products-sell-online-2018.jpg"
];

let prodList2 = [];
let counter2 = 1;
for (let i of products2) {
  prodList2.push(
    <div class="image">
      <img src={i} alt={counter2}></img>
    </div>
  );
  counter2++;
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
      <p class="h1App">
        FLASH DEALS! <Timer hoursMinSecs={hoursMinSecs} />
      </p>
      <div>{prodList}</div>
      <div id="banner">
        <input type="checkbox" id="hideCheckbox"></input>
        <label for="hideCheckbox">
          <img
            src="https://cf.shopee.ph/file/ph-50009109-2840fe2668f606e88539425f0f043c44"
            alt="banner"
            class="hideMe"
          ></img>
        </label>
      </div>
      <div class="image-grid">
        {prodList2}
      </div>
    </div>
  );
}

export default App;
