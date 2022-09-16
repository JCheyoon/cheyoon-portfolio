import { ComponentType } from "react";
import { decreaseCursor, increaseCursor } from "./Cursor.component";

export function withCursor<T>(
  WrappedComponent: ComponentType<T>
): ComponentType<T> {
  return (props) => (
    <WrappedComponent
      onMouseEnter={increaseCursor}
      onMouseLeave={decreaseCursor}
      {...props}
    />
  );
}
