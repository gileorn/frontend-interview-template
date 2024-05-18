import React from "react";
import { Item } from "../types";
import { getChildItems } from "../actions/getItems";

interface Props {
  item: Item;
  forcedOpen?: boolean;
}

export const ListItem = ({ item, forcedOpen }: Props) => {
  const [isOpened, setIsOpened] = React.useState(forcedOpen || false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [children, setChildren] = React.useState<Item[]>([]);

  const handleClickListItem = React.useCallback(() => {
    const newIsOpened = !isOpened;
    setIsOpened(newIsOpened);

    const loadChildren = async () => {
      setIsLoading(true);
      const result = await getChildItems();
      if (!result) return;
      setChildren(result);
      setIsLoading(false);
    };

    if (!newIsOpened || children.length) return;

    loadChildren();
  }, [isOpened, setIsOpened, children]);

  return (
    <div className="listItemContainer">
      <div className="listItem" onClick={handleClickListItem}>
        <div>{item.emoji}</div>
        <div>{item.title}</div>
      </div>
      <div className="listItemChildren">
        {isLoading && <div>..loading</div>}
        {children.length > 0 && isOpened && (
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
