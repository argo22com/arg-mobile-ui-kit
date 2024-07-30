import type { PropsWithChildren } from "react";

import { ToastManagerContext } from "./ToastManager.context";
import { useToastManager } from "./ToastManager.hook";

export const ToastManagerProvider = ({ children }: PropsWithChildren) => {
  const value = useToastManager();
  return (
    <ToastManagerContext.Provider value={value}>
      {children}
    </ToastManagerContext.Provider>
  );
};
