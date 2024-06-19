import React from "react";
import "./ListItem.css";
import { Item } from "../types";
import { ChevronRight, ChevronDown } from "react-feather";
import { getDocumentChildItems } from "../actions/getItems";

interface Props {
  item: Item;
}

export const ListItem = ({ item }: Props) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [children, setChildren] = React.useState<Item[]>([]);

  const handleExpandListItem: React.MouseEventHandler<HTMLOrSVGElement> =
    React.useCallback(
      (event) => {
        event.stopPropagation();
        const newIsOpened = !isOpened;
        setIsOpened(newIsOpened);

        const loadChildren = async () => {
          setIsLoading(true);
          const result = await getDocumentChildItems(item.id);
          setIsLoading(false);
          if (!result) return;
          setChildren(result);
        };

        if (!newIsOpened || children.length) return;

        loadChildren();
      },
      [isOpened, setIsOpened, children, item.id],
    );

  const Icon = isOpened ? ChevronDown : ChevronRight;

  return (
    <div className="listItemContainer">
      <div className="listItem" data-id={item.id}>
        <div className="itemEmoji">{item.emoji}</div>
        <Icon className="openIcon" size={18} onClick={handleExpandListItem} />
        <div>{item.title}</div>
      </div>
      <div className="listItemChildren">
        {isLoading && <div className="loadingItem">Loading pages ...</div>}
        {!isLoading && children.length > 0 && isOpened && (
          <div>
            {children.map((child) => (
              <ListItem key={child.id} item={child} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
