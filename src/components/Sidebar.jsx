function Sidebar() {
  const menu = ["Все животные", "Все волонтеры", "Новости и объявления"];

  return (
    <nav className="bg-white border-r border-slate-300/50 w-1/5">
      <ul>
        {menu.map((el, index) => (
          <li
            key={index}
            className="p-2 border-b border-slate-300/50 cursor-pointer text-lg hover:bg-slate-200/50"
          >
            {el}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
