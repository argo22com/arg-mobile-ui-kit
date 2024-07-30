import { type ReactElement, cloneElement, useContext } from "react";

import { UIContext } from "../../../context/context";

export type UISlotProps = {
  element: ReactElement;
};

export const UISlot = ({ element }: UISlotProps) => {
  const uiContext = useContext(UIContext);

  return cloneElement(element, {
    ...element.props,
    ...uiContext,
  });
};
