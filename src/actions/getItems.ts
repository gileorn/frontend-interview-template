import { Item } from "../types";
import { fakeFetch } from "../utils/fakeFetch";
import { getRandomItems } from "../utils/getRandomItems";

const callLimit = 10;
let callsCount = 0;

export const getRootItems = () => {
  return fakeFetch(getRandomItems, "getRootItems");
};

export const getChildItems = () => {
  if (callsCount++ > callLimit) return;
  return fakeFetch(getRandomItems, "getRootItems");
};

export const getChildItemsOld = async (parentItem: Item) => {
  const randomItems = await fakeFetch(getRandomItems, "getRootItems");
  const result = randomItems.map((item) => ({
    ...item,
    parentId: parentItem.id,
  }));

  return result;
};
