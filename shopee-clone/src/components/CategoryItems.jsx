import { Link } from "react-router-dom";

function CategoryItems() {
  const navItems = [
    {
      nav: "Phone Case",
      link: "PhoneCase",
    },
    {
      nav: "Lato Lato",
      link: "LatoLato",
    },
    {
      nav: "Dress",
      link: "Dress",
    },
    {
      nav: "Shoes",
      link: "Shoes",
    },
    {
      nav: "Tops",
      link: "Tops",
    },
  ];
  const itemList = navItems.map((e, index) => {
    return (
      <a>
        <Link to={e.link} className="text-black hover:text-white ml-4">
          {e.nav}
        </Link>
      </a>
    );
  });
  return (
    <div className="items-left bg-orange-500">
      <div className="ml-auto p-2">{itemList}</div>
    </div>
  );
}

export default CategoryItems;
