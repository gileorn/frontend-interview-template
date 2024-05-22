import { Home, Search, Inbox, Settings } from "react-feather";

const mockedSidebarActions = [
  { icon: Search, title: "Search" },
  { icon: Home, title: "Home" },
  { icon: Inbox, title: "Inbox" },
  { icon: Settings, title: "Settings & members" },
];

export const SidebarActions = () => {
  return (
    <div className="sidebarActionsList">
      {mockedSidebarActions.map((action) => (
        <div className="sidebarAction hoverableSidebarItem">
          <action.icon size={16} />
          <div>{action.title}</div>
        </div>
      ))}
    </div>
  );
};
