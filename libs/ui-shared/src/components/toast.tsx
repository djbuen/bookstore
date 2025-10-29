import React, { useState, useEffect } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number; // in ms
};

const Toast: React.FC<ToastProps> = ({ message, type = "success", duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[type];

  return (
    <div className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg text-white ${bgColor} animate-slide-in`}>
      {message}
    </div>
  );
};

export default Toast;