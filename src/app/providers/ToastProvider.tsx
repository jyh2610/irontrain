import { Toast } from "@src/shared";
import React, { useCallback, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

interface ToastType {
  type?: "success" | "fail";
  message: string;
}

interface ToastContext {
  showToast: ({ type, message }: ToastType) => void;
}

const ToastContext = React.createContext<ToastContext | null>(null);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("This component must be used within a <ToastProvider> component.");
  }
  return context;
};

export const ToastProvider = ({ children }: Props) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [type, setType] = useState<"success" | "fail">("success");
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback(
    ({ type, message }: ToastType) => {
      setVisible(true);
      setType(type ?? "success");
      setMessage(message);
      setTimeout(() => {
        setVisible(false);
        setMessage(null);
      }, 1000);
    },
    [setVisible, setType, setMessage]
  );

  const memorizedValue = React.useMemo(() => ({ showToast }), [visible, message]);

  return (
    <ToastContext.Provider value={memorizedValue}>
      {children}
      {visible && message && <Toast text={message} visibility={visible ? "visible" : "hidden"} type={type} />}
    </ToastContext.Provider>
  );
};
