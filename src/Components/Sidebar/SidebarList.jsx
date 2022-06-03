import SidebarItem from "./SidebarItem";

function SidebarList() {
  const sidebarItems = [
    "Projects",
    "VPCs",
    "Billing",
    "Docs",
    "Tutorials",
    "Help & Support",
  ];

  return sidebarItems.map((el, index) => (
    <SidebarItem
      key={index}
      name={el}
      path="/"
      current={el == "Projects" && true}
    />
  ));
}

export default SidebarList;
