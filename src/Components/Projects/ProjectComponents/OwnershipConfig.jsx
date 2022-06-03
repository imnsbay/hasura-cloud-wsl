import Icon from "../../Icon";

function OwnershipConfig({ level }) {
  return (
    <div className="flex flex-row w-full h-max mb-3">
      <div className="flex">
        <span className="flex bg-[#caf6d7] h-max text-xs text-[#42b689] my-auto px-2 py-1 border-hidden rounded-xl group">
          {level}
          <span className="owner-tooltip group-hover:scale-100">
            You are the owner of this project.
          </span>
        </span>
      </div>
      <button className="flex ml-auto text-white pr-6">
        <span className="mr-2 text-hasureblue">
          <Icon name="Sparkles" />
        </span>
        <span className="text-xs text-black">Free</span>
      </button>
      <button className="text-black/50 mr-1">
        <Icon name="Settings" />
      </button>
    </div>
  );
}

export default OwnershipConfig;
