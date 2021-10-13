import { useEffect } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

export const useBeforeUnload = (value: (e?: BeforeUnloadEvent) => Socket<DefaultEventsMap, DefaultEventsMap>): void => {
  const handleBeforeunload = (e: BeforeUnloadEvent) => {
    let returnValue;
    if (typeof value === "function") {
      returnValue = value(e);
    } else {
      returnValue = value;
    }
    if (returnValue) {
      e.preventDefault();
      e.returnValue = returnValue;
    }
    return returnValue;
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeunload);
    return () => window.removeEventListener("beforeunload", handleBeforeunload);
    // eslint-disable-next-line
  }, []);
};
