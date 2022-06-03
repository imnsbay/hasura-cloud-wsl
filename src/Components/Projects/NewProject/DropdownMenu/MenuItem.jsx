import Flag from "../../../Flag";

function MenuItem({ content, flag, current, isInMenu }) {
  return (
    <button
      className={`flex flex-row shrink-0 text-sm w-full px-6 h-10 items-center ${
        current && isInMenu ? "bg-[#5c94c8] text-white" : ""
      } ${!current && isInMenu ? "hover:bg-[#f0f7ff]" : ""} `}
    >
      <Flag name={flag} />
      <span>{content}</span>
      <span className="text-orange-500 ml-auto">AWS</span>
    </button>
  );
}

export default MenuItem;
