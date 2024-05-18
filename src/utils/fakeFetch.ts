/* ========================================== */
/* This is just a fake fetch utility to avoid */
/*  setting up a real backend */
/*  details are not important here */
/* ========================================== */
export const fakeFetch = <ReturnType>(
  callback: () => ReturnType,
  resource: string
): Promise<ReturnType> => {
  console.log(`>>> called - ${resource}`);

  return new Promise((resolve) => {
    const randomDelayMs = Math.floor(Math.random() * 1000 * 2);
    const result = callback();

    setTimeout(() => {
      resolve(result);
      console.log(`>>> completed - ${resource}`, { result });
    }, randomDelayMs);
  });
};
