import { Link } from "react-router-dom";

function NavItems() {
  const navItems = [
    {
      nav: "Notifications",
      link: "Notifications",
    },
    {
      nav: "Cart",
      link: "Cart",
    },
    {
      nav: "Sign up",
      link: "Signup",
    },
    {
      nav: "Login",
      link: "/Login",
    },
  ];
  const itemList = navItems.map((e, index) => {
    return (
      <p className="leading-none pr-2">
        <button class="text-white bg-gradient-to-br from-orange-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <span className="navtitle-md font-semibold text-black">
              <Link to={e.link} className="text-black hover:text-white ml-4">
                {e.nav}
              </Link>
          </span>
        </button>
      </p>
    );
  });
  return (
    <>{itemList}</>
  );
}

export default NavItems;
