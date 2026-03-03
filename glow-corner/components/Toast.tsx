"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ToastItem = {
  id: string;
  message: string;
  variant?: "default" | "success";
};

type ToastContextValue = {
  addToast: (message: string, variant?: "default" | "success") => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

const WARM_OFF_WHITE = "#F7EBE5";
const WARM_MAUVE = "#b38080";
const DEEP_ROSE = "#916B61";

function SuccessIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke={WARM_MAUVE}
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ToastItemView({
  item,
  onRemove,
}: {
  item: ToastItem;
  onRemove: (id: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const show = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
    return () => cancelAnimationFrame(show);
  }, []);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4200);
    const removeTimer = setTimeout(() => onRemove(item.id), 4600);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [item.id, onRemove]);

  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-lg border border-[#E8C9BD]/40 px-4 py-3 shadow-sm transition-[transform,opacity] duration-500 ease-out"
      style={{
        backgroundColor: WARM_OFF_WHITE,
        borderLeftWidth: "4px",
        borderLeftColor: WARM_MAUVE,
        transform: !isVisible ? "translateX(100%)" : isExiting ? "translateX(100%)" : "translateX(0)",
        opacity: !isVisible ? 0 : isExiting ? 0 : 1,
      }}
    >
      {item.variant === "success" && <SuccessIcon />}
      <p className="text-sm font-medium" style={{ color: DEEP_ROSE }}>
        {item.message}
      </p>
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const welcomeShown = useRef(false);

  const addToast = useCallback((message: string, variant: "default" | "success" = "default") => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts((prev) => [...prev, { id, message, variant }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    if (welcomeShown.current) return;
    welcomeShown.current = true;
    const t1 = setTimeout(() => addToast("Welcome to the Glow Community!", "default"), 600);
    const t2 = setTimeout(() => addToast("You're officially glowing with us", "default"), 2800);
    const t3 = setTimeout(() => addToast("Glow tips are on their way to you", "default"), 5000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div
        className="fixed right-4 top-24 z-[100] flex w-full max-w-sm flex-col gap-3"
        aria-live="polite"
      >
        {toasts.map((item) => (
          <ToastItemView
            key={item.id}
            item={item}
            onRemove={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
