function Sidebar() {
  const menu = ["Все животные", "Все волонтеры", "Новости и объявления"];

  return (
    <nav className="w-full">
      <ul className="flex flex-row">
        {menu.map((el, index) => (
          <li
            key={index}
            className="flex-1 text-lg border-b text-gray-500 border-gray-300 text-center pb-3 hover:text-black hover:bg-gray-100 hover:border-primary transition ease-in-out duration-300"
          >
            {el}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
