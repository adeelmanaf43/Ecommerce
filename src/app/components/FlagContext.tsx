"use client";

import { createContext, useContext, useState } from "react";

const FlagContext = createContext<any>({});

export default function FlagContextProvider({ children }: any) {
  const [flag, setFlag] = useState(false);
  return (
    <FlagContext.Provider value={{ flag, setFlag }}>
      {children}
    </FlagContext.Provider>
  );
}

export function UseFlagContext() {
  return useContext(FlagContext);
}
