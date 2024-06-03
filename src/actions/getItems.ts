import { fakeFetch } from "../utils/fakeFetch";
import { getRandomItems } from "../utils/getRandomItems";

export const getDocumentChildItems = (id: string) =>
  fakeFetch(getRandomItems, `getChildItems for item ${id}`);
