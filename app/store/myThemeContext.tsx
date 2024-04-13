"use client";

import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
  theme: "purple",
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [theme, setTheme] = useState("purple"); // Default theme

  useEffect(() => initialThemeHandler(), []);

  function initialThemeHandler(): void {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && ["purple", "pink", "green"].includes(savedTheme)) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      setTheme("purple");
      document.body.classList.add("purple");
      localStorage.setItem("theme", "purple");
    }
  }

  function toggleThemeHandler(): void {
    const nextTheme =
      theme === "purple" ? "pink" : theme === "pink" ? "green" : "purple";
    setTheme(nextTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <MyThemeContext.Provider value={{ theme, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
