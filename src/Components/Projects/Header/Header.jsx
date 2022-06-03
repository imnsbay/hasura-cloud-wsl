import { useState } from "react";
import Icon from "../../Icon";
import NewProject from "../NewProject/NewProject";

function Header() {
  const [showCreateProject, setShowCreateProject] = useState(false);

  return (
    <>
      {showCreateProject && (
        <NewProject
          showCreateProject={showCreateProject}
          setShowCreateProject={setShowCreateProject}
        />
      )}
      <header className="flex w-full h-10 mb-8">
        <div className="flex flex-row">
          <span className="text-[#212529] text-lg my-auto pr-4 border-gray-300 border-r">
            Projects
          </span>
          <button
            onClick={() => {
              setShowCreateProject(true);
            }}
            className="flex my-auto"
          >
            <span className="text-hasureblue ml-4 mr-2 my-auto">
              <Icon name="Plus Solid" />
            </span>
            <span className="text-[#212529] align-middle">New Project</span>
          </button>
        </div>
        <div
          className="bg-white flex flex-row w-[264px] ml-auto border-solid 
                    border border-gray-300 hover:border-gray-400 focus:border-hasureblue
                    rounded-md hover:shadow"
        >
          <span className="text-black/40 ml-3 mr-1 my-auto">
            <Icon name="Search" />
          </span>
          <input
            type="text"
            name="search-projects"
            id="search-projects-input"
            className="text-slate-600 focus:outline-none "
            placeholder="Search Projects..."
          />
        </div>
      </header>
    </>
  );
}

export default Header;
