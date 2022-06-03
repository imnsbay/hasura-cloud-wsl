import SidebarIcon from "../Icon";

function SidebarItem({ name, path, current }) {
  return (
    <a
      href={path}
      className={`flex h-[52px] border-hidden rounded-md ${
        current ? "current" : ""
      }`}
    >
      <div className="flex text-white text-center max-w-max ml-10 m-auto">
        <span className="text-hasureblue">
          <SidebarIcon name={name} />
        </span>
        <span
          className={`${
            current ? "text-white" : "text-gray-400"
          } m-auto pl-3 hover:text-white`}
        >
          {name}
        </span>
      </div>
    </a>
  );
}

export default SidebarItem;
