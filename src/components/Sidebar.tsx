import type { Item } from "../types";

import { ListItem } from "./ListItem";
import { getRandomEmoji } from "../utils/getRandomEmoji";
import { SidebarActions } from "./SidebarActions";
import { Branding } from "./Branding";

const rootItem: Item = {
  title: "Root",
  id: 1,
  emoji: getRandomEmoji(),
};

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Branding />
      <SidebarActions />

      <div>
        <div className="sidebarSectionTitle">Workspaces</div>
        <ListItem item={rootItem} />
      </div>
    </div>
  );
};
