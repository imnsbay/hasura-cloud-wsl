import NewProjectItem from "./NewProjectItem";
import Icon from "../../Icon";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { useState } from "react";
import MenuItem from "./DropdownMenu/MenuItem";

function NewProject({ showCreateProject, setShowCreateProject }) {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const newProjectList = [
    {
      title: "Free Tier",
      price: "Free forever",
      desc: "(No credit card required)",
      current: true,
    },
    {
      title: "Standard Tier",
      price: "Starts at $99/month",
      desc: "(Pay as you go)",
      current: false,
    },
  ];

  const menuItems = {
    FreeTier: [
      {
        content: "US West (N. California)",
        flag: "N. California",
        current: true,
      },
    ],
    StandardTier: [
      { content: "US West (N. California)", flag: "N. California" },
      { content: "Asia Pacific (Mumbai)", flag: "Mumbai" },
      { content: "Europe (Frankfurt)", flag: "Frankfurt" },
      { content: "Asia Pacific (Singapore)", flag: "Singapore" },
      { content: "Asia Pacific (Sydney)", flag: "Sydney" },
      { content: "Asia Pacific (Tokyo)", flag: "Tokyo" },
      { content: "Canada (Central)", flag: "Central" },
      { content: "Europe (London)", flag: "London" },
      { content: "US East (N. Virginia)", flag: "N. Virginia" },
      { content: "US East (Ohio)", flag: "Ohio" },
      { content: "US West (Oregon)", flag: "Oregon" },
    ],
  };

  const handleChildElementClick = (e) => {
    e.stopPropagation();
    setShowDropdownMenu(!showDropdownMenu);
  };

  return (
    <div className="flex bg-black/10 absolute top-0 left-0 w-screen h-screen cursor-default">
      <div
        onClick={() => {
          setShowCreateProject(false);
          setShowDropdownMenu(false);
        }}
        className="flex w-full h-full"
      ></div>
      <div
        onClick={() => {
          setShowDropdownMenu(false);
        }}
        className="flex flex-col bg-white ml-auto max-w-lg w-full h-full shadow-2xl shadow-black/30"
      >
        <div className="flex w-full h-[100px]">
          <div className="flex flex-row w-full h-max items-center m-9">
            <button
              onClick={() => {
                setShowCreateProject(false);
              }}
              className="text-black/60 border-hidden rounded-full hover:bg-black/10"
            >
              <Icon name="Right" />
            </button>
            <span className="text-2xl ml-[118px]">Create Project</span>
          </div>
        </div>
        <div className="flex bg-[#f8f8f8] w-full h-full">
          <div className="flex flex-col w-full h-full items-center mx-16">
            <div className="flex flex-row mt-8 mb-5 w-full h-max justify-between">
              <span className="text-sm">Choose a pricing plan</span>
              <a href="" className="text-xs text-hasureblue">
                See pricing and FAQs
              </a>
            </div>
            <div className="flex flex-row w-full gap-x-5 pb-6 border-b-2 border-black/20 border-dotted">
              {newProjectList.map((el, index) => (
                <NewProjectItem
                  key={index}
                  title={el.title}
                  price={el.price}
                  desc={el.desc}
                  current={el.current}
                />
              ))}
            </div>
            <div className="flex w-full mt-5">
              <span className="text-sm mr-2">Select a region</span>
              <div className="text-black/20 group">
                <Icon name="Information" />
                <span className="region-tooltip font-normal group-hover:scale-100">
                  "This project's region of deployment"
                </span>
              </div>
            </div>
            <button
              onClick={handleChildElementClick}
              className="flex flex-col bg-white mt-3 w-full h-14 border-solid border justify-center border-gray-300 rounded-md hover:shadow-lg hover:shadow-black/5"
            >
              {menuItems.FreeTier.map((el) =>
                el.current ? (
                  <MenuItem
                    content={el.content}
                    flag={el.flag}
                    current={el.current}
                  />
                ) : null
              )}
            </button>
            {showDropdownMenu && (
              <DropdownMenu
                showDropdownMenu={showDropdownMenu}
                setShowDropdownMenu={setShowDropdownMenu}
                menuItems={menuItems}
              />
            )}
            <div className="flex flex-col w-full mt-auto mb-12">
              <button className="bg-hasureblue text-white font-bold w-full h-14 border-hidden rounded-md">
                Create Free Project
              </button>
              <span className="text-xs mt-3 text-black/60">
                * Projects can be renamed later.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProject;
