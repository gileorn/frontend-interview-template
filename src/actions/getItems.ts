// import { Item } from "../types";
import { fakeFetch } from "../utils/fakeFetch";
import {
  getRandomDocumentContent,
  getRandomItems,
} from "../utils/getRandomItems";

const callLimit = 10;
let callsCount = 0;

export const getDocumentChildItems = (id: string) => {
  if (callsCount++ > callLimit) return;
  return fakeFetch(getRandomItems, `getChildItems for item ${id}`);
};

export const getDocumentContent = (id: string) => {
  const randomContent = String({ id }) + getRandomDocumentContent();
};

// export const getChildItemsOld = async (parentItem: Item) => {
//   const randomItems = await fakeFetch(getRandomItems, "getRootItems");
//   const result = randomItems.map((item) => ({
//     ...item,
//     parentId: parentItem.id,
//   }));
//
//   return result;
// };
