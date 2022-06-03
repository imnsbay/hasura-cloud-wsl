import SelectedPlanIcon from "./SelectedPlanIcon";

function NewProjectItem({ title, price, desc, current }) {
  return (
    <a
      href=""
      className={`flex flex-col w-full h-[123px] border-solid border-2 rounded-lg shadow-md ${
        current ? "current-button" : "text-black bg-white"
      }`}
    >
      {current ? <SelectedPlanIcon /> : null}
      <div
        className={`flex flex-col items-center ${current ? "mt-1" : "my-auto"}`}
      >
        <span className="text-xl">{title}</span>
        <span className="text-xs">{price}</span>
        <span className="text-xs">{desc}</span>
      </div>
    </a>
  );
}

export default NewProjectItem;
