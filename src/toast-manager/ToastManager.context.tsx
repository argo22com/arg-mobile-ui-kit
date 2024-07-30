import { createContext } from "react";

import type { useToastManager } from "./ToastManager.hook";

type ToastManagerContextType = ReturnType<typeof useToastManager>;

export const ToastManagerContext =
  createContext<ToastManagerContextType | null>(null);
