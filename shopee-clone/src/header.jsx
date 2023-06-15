import "./index.css";
import { Navbar } from "flowbite-react";
import Logo from "./logo.jsx";
const NavbarItems = ["Phone Case", "Lato Lato", "Dress", "Shoes", "Tops"];
let itemList = [];
for (let i of NavbarItems) {
  itemList.push(
    <a href="#" className="text-black hover:text-white ml-4">
      {i}
    </a>
  );
}

function Header() {
  return (
    <header>
      <Navbar fluid className="!bg-white">
        <Navbar.Brand href="https://shopee.ph">
          <Logo />
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative ml-96">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Products, Services..."
                required
              ></input>
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </Navbar.Brand>
        <div className="flex items-center ml-96 rounded-lg p-2">
          <p className="leading-none pr-2">
            <button class="text-white bg-gradient-to-br from-orange-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <span className="navtitle-md font-semibold text-black">
                Notifications
              </span>
            </button>
          </p>
          <p className="leading-none pr-2">
            <button class="text-white bg-gradient-to-br from-orange-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <span className="navtitle-md font-semibold text-black">Cart</span>
            </button>
          </p>
          <p className="leading-none pr-2">
            <button class="text-white bg-gradient-to-br from-orange-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <span className="navtitle-md font-semibold text-black">
                Sign up
              </span>
            </button>
          </p>
          <p className="leading-none pr-2">
            <button class="text-white bg-gradient-to-br  from-orange-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <span className="navtitle-md font-semibold text-black">
                Login
              </span>
            </button>
          </p>
        </div>
      </Navbar>
      <div className="items-left bg-orange-500">
        <div className="ml-auto p-2">{itemList}</div>
      </div>
    </header>
  );
}

export default Header;
