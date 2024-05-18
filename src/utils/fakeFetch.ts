import dayjs from "dayjs";

const logCall = (message: string) => {
  const logTime = dayjs().format("HH:MM:ss:SSS");
  const logListNode = document.getElementById("logInfoList");
  const textNode = document.createTextNode(`${logTime}   -->   ${message}`);
  const newLogEntry = document.createElement("div");

  newLogEntry.appendChild(textNode);
  logListNode?.appendChild(newLogEntry);
};

export const fakeFetch = <ReturnType>(
  callback: () => ReturnType,
  resource: string,
): Promise<ReturnType> => {
  logCall(`called - ${resource}`);

  return new Promise((resolve) => {
    const randomDelayMs = Math.floor(Math.random() * 1000 * 2);
    const result = callback();

    setTimeout(() => {
      resolve(result);
      logCall(`completed - ${resource}`);
    }, randomDelayMs);
  });
};
