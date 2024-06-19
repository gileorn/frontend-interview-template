import React from "react";

// here you can add styles
import "./ListItem.css";
// here is the ts type of the data
import { Item } from "../types";
// here are the icons if you need them
import { ChevronRight, ChevronDown } from "react-feather";
// here is the method to get the data
// const result = await getDocumentChildItems()
import { getDocumentChildItems } from "../actions/getItems";

interface Props {
  item: Item;
}

export const ListItem = ({ item }: Props) => {
  return (
    <div>
      {item.emoji} {item.title}
    </div>
  );
};
