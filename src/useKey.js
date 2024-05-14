import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function eventot(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", eventot);
      return function () {
        document.removeEventListener("keydown", eventot);
      };
    },
    [key, action]
  );
}
