import { fakeFetch } from "../utils/fakeFetch";
import { getRandomItems } from "../utils/getRandomItems";

const MAX_REQUEST_COUNT = 30;
let requestCount = 0;

/* ========================================== */
/* This is just an action with a fake request */
/*  to avoid setting up a real backend, */
/*  details are not important here */
/* ========================================== */
export const getDocumentChildItems = ({ id }: { id: string }) => {
  if (++requestCount > MAX_REQUEST_COUNT) {
    console.log(">>> Possible infinite loop detected!");
    throw new Error("Possible infinite loop");
  }

  return fakeFetch(() => {
    if (Math.random() < 0.6) {
      throw new Error("Random error");
    }

    return getRandomItems();
  }, `getChildItems for item ${id}`);
};
