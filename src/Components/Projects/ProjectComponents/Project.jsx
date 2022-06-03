import OwnershipConfig from "./OwnershipConfig";
import NameStatus from "./NameStatus";
import AccessConsole from "./AccessConsole";
import Label from "./Label";

function Project({ level, name, status, graphLink }) {
  return (
    <div className="flex flex-col bg-white w-full h-max border-hidden rounded-md shadow-lg overflow-x-hidden">
      <div className="flex flex-col mx-5 my-5">
        <OwnershipConfig level={level} />
        <NameStatus name={name} status={status} />
        <AccessConsole graphLink={graphLink} level={level} />
      </div>
      <Label />
    </div>
  );
}

export default Project;
