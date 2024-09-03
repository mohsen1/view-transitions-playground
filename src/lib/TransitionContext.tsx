import React, { createContext, useContext, useState, ReactNode } from "react";

export type TransitionType = "blend" | "swipe" | "zoom" | "fade";

interface TransitionContextType {
  transitionType: TransitionType;
  setTransitionType: (type: TransitionType) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [transitionType, setTransitionType] = useState<TransitionType>("blend");

  return (
    <TransitionContext.Provider value={{ transitionType, setTransitionType }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
}
