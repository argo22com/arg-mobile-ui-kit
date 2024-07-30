import { useContext, useState } from "react";

import { ToastManagerContext } from "./ToastManager.context";
import type { ToastProps } from "../components/molecules/toast/Toast";

export const useToast = () => {
  const toastContext = useContext(ToastManagerContext);

  if (!toastContext) {
    throw new Error("useToast must be used within a ToastManagerProvider");
  }

  const toast = (payload: ToastPayload) => {
    toastContext.createToast(Date.now(), payload);
  };

  const toasts = [...toastContext.toasts];

  return { toast, toasts };
};

export type ToastPayload = {
  duration?: number; // ms - default to 5000,
  persist?: boolean; // should not auto hide after duration,
} & Omit<ToastProps, "onClose" | "open">;

const DEFAULT_DURATION = 5000;

export const useToastManager = () => {
  const [toasts, setToasts] = useState<Map<number, ToastProps>>(new Map());

  const createToast = (id: number, payload: ToastPayload) => {
    setToasts(
      (prev) =>
        new Map(
          prev.set(id, {
            ...payload,
            onClose: () => removeToast(id),
          }),
        ),
    );

    if (payload.persist) {
      return;
    }

    setTimeout(() => {
      removeToast(id);
    }, payload.duration ?? DEFAULT_DURATION);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => {
      const newToasts = new Map(prev);
      newToasts.delete(id);
      return newToasts;
    });
  };

  return {
    toasts,
    createToast,
    removeToast,
  };
};
