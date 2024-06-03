import "./Sidebar.css";
import { ListItem } from "./ListItem";
import { ListItemTemplate } from "./ListItemTemplate.tsx";
import { getRandomEmoji } from "../utils/getRandomEmoji";
import { SidebarActions } from "./SidebarActions";
import { Branding } from "./Branding";
import type { Item } from "../types";

const rootItem: Item = {
  title: "Root",
  id: "root",
  emoji: getRandomEmoji(),
};

export const Sidebar = ({
  onDocumentSelected,
}: {
  onDocumentSelected: (id: Item["id"]) => void;
}) => {
  return (
    <div className="sidebar">
      <Branding />
      <SidebarActions />

      <div>
        <div className="sidebarSectionTitle">Workspaces</div>
        {/* this is my implementation as a reference */}
        <ListItem item={rootItem} onDocumentSelected={onDocumentSelected} />
        {/* this is what candidate will have at the start */}
        <ListItemTemplate />
      </div>
    </div>
  );
};
