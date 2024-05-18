import { fakeFetch } from "../utils/fakeFetch";
import { getRandomItems } from "../utils/getRandomItems";

const MAX_REQUEST_COUNT = 30;
let requestCount = 0;

/* ========================================== */
/* This is just an action with a fake request */
/*  to avoid setting up a real backend, */
/*  details are not important here */
/* ========================================== */
export const getDocumentChildItems = (id: string) => {
  if (++requestCount > MAX_REQUEST_COUNT) {
    console.log(">>> Possible infinite loop detected!");
    return Promise.resolve(null);
  }

  return fakeFetch(getRandomItems, `getChildItems for item ${id}`);
};
