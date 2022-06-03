import Icon from "../../Icon";

function NameStatus({ name, status }) {
  return (
    <div className="w-full h-max mb-5">
      <span className="text-xl mr-2">{name}</span>
      <button
        className={`bg-white text-sm font-bold group ${
          status ? "status-good" : "status-bad"
        }`}
      >
        {status ? <Icon name="Check" /> : <Icon name="Not Check" />}
        <span className="status-tooltip font-normal group-hover:scale-100">
          {status ? "All good!" : "All bad!"}
        </span>
      </button>
    </div>
  );
}

export default NameStatus;
