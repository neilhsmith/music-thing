import { MutableRefObject, RefObject, useEffect, useRef } from "react";

const DEFAULT_EVENTS = ["mousedown", "touchstart"];

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T> | MutableRefObject<T>,
  callback: EventListener,
  dependencies: any = undefined,
  events: string[] = DEFAULT_EVENTS
): void => {
  const refRef = useRef(ref);

  useEffect(() => {
    function handler(this: HTMLElement, event: Event) {
      if (!refRef.current.current) return;

      const { target: evtTarget } = event;

      if (
        !evtTarget ||
        (!!evtTarget && !refRef.current.current.contains(evtTarget as Node))
      ) {
        callback.call(this, event);
      }
    }

    events.forEach((name) =>
      document.addEventListener(name, handler, { passive: true })
    );

    return () => {
      events.forEach((name) => document.removeEventListener(name, handler));
    };
  }, [dependencies]);
};
