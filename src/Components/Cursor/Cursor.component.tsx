import React, { useEffect } from "react";
import { MyCursor } from "./Cursor.style";

export function increaseCursor(): void {
  document.getElementById("cursor")?.classList.add("hovered");
}

export function decreaseCursor(): void {
  document.getElementById("cursor")?.classList.remove("hovered");
}

const Cursor = () => {
  useEffect(() => {
    const myCursor = document.getElementById("cursor") as HTMLElement;
    if (!myCursor) {
      return;
    }
    document.addEventListener("mousemove", function (e) {
      const x = e.clientX;
      const y = e.clientY;
      myCursor.style.transform = `translate(${x - 5}px,${y - 5}px)`;
    });
  }, []);

  return <MyCursor id="cursor" />;
};

export default Cursor;
