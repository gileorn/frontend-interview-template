import "./Sidebar.css";
import { ListItem } from "./ListItem";
import { getRandomEmoji } from "../utils/getRandomEmoji";
import { SidebarActions } from "./SidebarActions";
import { Branding } from "./Branding";
import type { Item } from "../types";

// this is the static root item
// let's assume all workspaces have this root item
// you can start with rendering it and then requesting
// child items for it
const rootItem: Item = {
  title: "Root",
  id: "root",
  emoji: getRandomEmoji(),
};

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Branding />
      <SidebarActions />

      <div>
        <div className="sidebarSectionTitle">Workspaces</div>
        <ListItem />
      </div>
    </div>
  );
};
