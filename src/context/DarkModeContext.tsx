import { createContext, useState, type ReactNode } from "react";

const DarkModeContext = createContext<{ darkMode: boolean; toggleDarkMode: () => void } | null>(null);

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    console.log("set darkmode");
  };
  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export { DarkModeContext, DarkModeProvider };
