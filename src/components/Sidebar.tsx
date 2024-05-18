import type { Item } from "../types";

import manychatLogoSrc from "../assets/manychat_logo.svg";
import { ListItem } from "./ListItem";
import { getRandomEmoji } from "../utils/getRandomEmoji";

const rootItem: Item = {
  title: "Root",
  id: 1,
  emoji: getRandomEmoji(),
};

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className="branding" href="https://manychat.com/">
        <img src={manychatLogoSrc} width={20} height={20} />
        <div>Manychat</div>
      </a>
      <ListItem item={rootItem} />
    </div>
  );
};
