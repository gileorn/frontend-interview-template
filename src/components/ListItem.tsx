import React, { useCallback, useEffect, useState } from "react";
// here you can add styles
import "./ListItem.css";
// here is the ts type of the data
import { Item } from "../types";
// here are the icons if you need them
import { getDocumentChildItems } from "~/actions/getItems";
import useResolver from "~/hooks/useResolver";
import { MapCache } from "~/resolvers/cacheImpl";

import { Icon } from "./Icon/Icon";

// saving the state of open menu items
const itemsCache = new MapCache<boolean>();
interface Props {
  item: Item;
}

export const ListItem = ({ item }: Props) => {
  const [hasHover, setHasHover] = useState(false);
  const [showIconError, setIconError] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(itemsCache.get(item.id) || false);
  const { refetch, isLoading, data, error } = useResolveItems({
    id: item.id,
    title: item.title,
  });

  const clickHandler = useCallback(() => {
    if (error) {
      // set open state for further data display
      setIsOpen(true);
      refetch();
      return;
    }

    const currentState = !isOpen;
    setIsOpen(currentState);
  }, [error, isOpen]);

  // awaits for data flow
  useEffect(() => {
    if (!isOpen || !data) {
      return;
    }

    setIconError(false);
    itemsCache.set(item.id, true);
  }, [data, isOpen]);

  // awaits for error flow
  useEffect(() => {
    if (!error || !isOpen) {
      return;
    }

    setIconError(true);
    setAnimateIcon(true);
    itemsCache.set(item.id, true);
  }, [error, isOpen]);

  // override css rules to control the state of the icon from a single location
  const mouseEnterHandler = () => {
    setHasHover(true);
  };

  const mouseLeaveHandler = () => {
    setHasHover(false);
  };

  const onAnimationEnd = () => {
    setAnimateIcon(false);
  };

  return (
    <>
      <button
        className="item"
        onClick={clickHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <Icon
          isLoading={isLoading}
          isOpen={isOpen}
          emoji={item.emoji}
          hasError={showIconError}
          hasHover={hasHover}
          onAnimationEnd={onAnimationEnd}
          animate={animateIcon}
        />
        <div className="title">{item.title}</div>
      </button>

      <div className="items">
        {isOpen
          ? data?.map((item) => <ListItem item={item} key={item.id} />)
          : null}
      </div>
    </>
  );
};

type FetchParams = {
  id: string;
};

type FetchResult = Item[];

type ResolverParams = FetchParams & { title: string };

const useResolveItems = ({ id, title }: ResolverParams) => {
  return useResolver<FetchParams, FetchResult>(getDocumentChildItems, {
    requestParams: { id },
    queryParams: { prefetch: true },
    cacheOptions: { key: `${id}_${title}` },
  });
};
