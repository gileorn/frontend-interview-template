export const fakeFetch = <ReturnType>(
  callback: () => ReturnType,
  resource: string,
): Promise<ReturnType> => {
  console.log(`>>> called - ${resource}`);

  return new Promise((resolve) => {
    const randomDelayMs = Math.floor(Math.random() * 1000 * 2);
    const result = callback();

    setTimeout(() => {
      resolve(result);
      console.log(`>>> completed - ${resource}`);
    }, randomDelayMs);
  });
};
