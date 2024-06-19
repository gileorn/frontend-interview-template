import { fakeFetch } from "../utils/fakeFetch";
import { getRandomItems } from "../utils/getRandomItems";

const MAX_REQUEST_COUNT = 30;
let requestCount = 0;

export const getDocumentChildItems = (id: string) => {
  if (++requestCount > MAX_REQUEST_COUNT) {
    console.log(">>> Possible infinite loop detected!");
    return Promise.resolve(null);
  }

  return fakeFetch(getRandomItems, `getChildItems for item ${id}`);
};
