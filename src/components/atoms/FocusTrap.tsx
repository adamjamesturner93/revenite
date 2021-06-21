import { useEffect, useRef } from "react";

export const FocusTrap: React.FC<{ isActive: boolean }> = ({
  isActive,
  children,
}) => {
  const topTabTrap = useRef<HTMLSpanElement>(null);
  const bottomTabTrap = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getFocusableElements = () => {
      if (!container.current) return [];

      const FOCUSABLE_SELECTOR = [
        "button",
        "a[href]",
        "input",
        "select",
        "textarea",
        "[tabindex]",
        "[contenteditable]",
      ]
        .map((selector) => `${selector}:not(:disabled):not([disabled])`)
        .join(", ");

      return Array.from(container.current.querySelectorAll(FOCUSABLE_SELECTOR))
        .filter((element) => element !== topTabTrap.current)
        .filter(
          (element) => element !== bottomTabTrap.current
        ) as HTMLElement[];
    };

    const trapFocus = (event: FocusEvent) => {
      if (!isActive) return;

      let elements;
      if (event.target === topTabTrap.current) {
        elements = getFocusableElements();
        if (elements.length > 0) {
          const lastElement = elements.pop();
          lastElement?.focus();
        }
      }
      if (event.target === bottomTabTrap.current) {
        elements = getFocusableElements();
        if (elements.length > 0) {
          const firstElement = elements.shift();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("focusin", trapFocus);

    return () => document.removeEventListener("focusin", trapFocus);
  }, [isActive, topTabTrap, bottomTabTrap]);

  return (
    <div className="flex flex-col flex-grow" ref={container}>
      {isActive && <span ref={topTabTrap} tabIndex={0} />}
      {children}
      {isActive && <span ref={bottomTabTrap} tabIndex={0} />}
    </div>
  );
};
