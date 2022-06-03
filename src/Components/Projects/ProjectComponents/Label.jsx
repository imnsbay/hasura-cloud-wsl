import Icon from "../../Icon";

function ProjectLabel() {
  //const labels = [""];

  return (
    <div className="bg-[#f8f8f8] flex flex-row">
      <div className="flex flex-row w-full mx-3 my-3">
        <button className="my-auto group">
          {/*labels.map((el) => (
            <Label tag="el" />
          ))*/}
          <div className="text-black/30">
            <Icon name="Plus" />
          </div>
          <span className="newlabel-tooltip group-hover:scale-100">
            Assign a label.
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProjectLabel;
