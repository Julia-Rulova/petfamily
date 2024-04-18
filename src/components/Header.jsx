import { Icon } from "@iconify/react";

function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-center px-4 py-3 bg-[#3182ce] shadow-xl ">
      <Icon
        className="cursor-pointer"
        icon="mdi:cat"
        width="52"
        height="52"
        style={{ color: "#fff" }}
      />

      <span className="text-3xl text-white">Pet Family</span>

      <div className="flex flex-row gap-2">
        <Icon
          className="cursor-pointer"
          icon="flowbite:star-outline"
          width="38"
          height="38"
          style={{ color: "#fff" }}
        />

        <Icon
          className="cursor-pointer"
          icon="lucide:user-round"
          width="38"
          height="38"
          style={{ color: "#fff" }}
        />
      </div>
    </header>
  );
}

export default Header;
