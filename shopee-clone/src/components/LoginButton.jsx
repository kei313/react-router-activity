import { Link } from "react-router-dom";

function NavbarItems() {
  return (
    <>
      <Link to={"login"} class="text-white bg-gradient-to-br  from-orange-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        {<span className="navtitle-md font-semibold text-black">Login</span>}
      </Link>
    </>
  );
}

export default NavbarItems;
