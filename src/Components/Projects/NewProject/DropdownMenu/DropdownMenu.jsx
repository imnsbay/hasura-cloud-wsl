import MenuItem from "./MenuItem";
import MenuCategory from "./MenuCategory";

function DropdownMenu({ menuItems }) {
  return (
    <div className="flex flex-col overflow-y-scroll bg-white w-full max-h-[295px] mx-16 mt-3 shadow-lg border rounded-md shadow-black/10">
      <MenuCategory content="Free Tier" />
      {menuItems.FreeTier.map((el) => (
        <MenuItem
          content={el.content}
          flag={el.flag}
          current={el.current && true}
          isInMenu={true}
        />
      ))}
      <MenuCategory content="Standard Tier" />
      {menuItems.StandardTier.map((el) => (
        <MenuItem
          content={el.content}
          flag={el.flag}
          current={el.current && true}
          isInMenu={true}
        />
      ))}
      <button className="flex shrink-0 text-hasureblue text-xs w-full h-9 px-6 mb-1 hover:bg-[#d9e8f9]">
        <span className="self-center">Request a new region</span>
      </button>
    </div>
  );
}

export default DropdownMenu;
