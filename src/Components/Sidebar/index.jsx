import SidebarList from "./SidebarList";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="flex flex-col bg-[#111b29] min-w-max max-w-sm w-1/4 h-full p-4">
      <div className="flex max-h-28 h-full">
        <div className="text-white my-auto ml-10 py-3 pr-12">
          <img
            src="https://cloud.hasura.io/static/media/hasura_white_logo.33a16bb0d8574240268622d0fa713b7d.svg"
            alt="Logo"
            className="w-[115px]"
          />
        </div>
      </div>
      <nav className="flex-col mt-2">
        <SidebarList />
      </nav>
      <div className="mt-auto">
        <SidebarItem name="My Account" path="/" />
        <div className="text-gray-600 text-center text-sm mx-1">
          © Hasura 2022 | All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
