import React from "react";
import "./ListItem.css";
import { Item } from "../types";
import { ChevronRight, ChevronDown } from "react-feather";
import { getDocumentChildItems } from "../actions/getItems";

interface Props {
  item: Item;
  forcedOpen?: boolean;
  onDocumentSelected: (id: Item["id"]) => void;
}

export const ListItem = ({ item, forcedOpen, onDocumentSelected }: Props) => {
  const [isOpened, setIsOpened] = React.useState(forcedOpen || false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [children, setChildren] = React.useState<Item[]>([]);

  const handleExpandListItem: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback(
      (event) => {
        event.stopPropagation();
        const newIsOpened = !isOpened;
        setIsOpened(newIsOpened);

        const loadChildren = async () => {
          setIsLoading(true);
          const result = await getDocumentChildItems(item.id);
          if (!result) return;
          setChildren(result);
          setIsLoading(false);
        };

        if (!newIsOpened || children.length) return;

        loadChildren();
      },
      [isOpened, setIsOpened, children, item.id],
    );

  const handleSelectDocument: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback(
      (event) => {
        const id = event.currentTarget.dataset["id"];
        console.log({
          target: event.target,
          currentTarget: event.currentTarget,
        });
        event.stopPropagation();
        console.log("ID ==== ", id);
        if (id) onDocumentSelected(id);
      },
      [onDocumentSelected],
    );

  const Icon = isOpened ? ChevronDown : ChevronRight;

  return (
    <div className="listItemContainer">
      <div
        className="listItem"
        data-id={item.id}
        onClick={handleSelectDocument}
      >
        <div className="itemEmoji">{item.emoji}</div>
        <Icon className="openIcon" size={15} onClick={handleExpandListItem} />
        <div>{item.title}</div>
      </div>
      <div className="listItemChildren">
        {isLoading && <div className="loadingItem">Loading pages ...</div>}
        {!isLoading && children.length > 0 && isOpened && (
          <div>
            {children.map((child) => (
              <ListItem
                key={child.id}
                item={child}
                onDocumentSelected={onDocumentSelected}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
