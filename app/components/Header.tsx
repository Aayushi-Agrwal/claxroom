"use client";

import { useContext } from "react";
import MyThemeContext from "../store/myThemeContext";

export default function Header() {
  const themeCtx = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
    console.log(themeCtx.theme);
  }

  return (
    <>
      <button
        type="button"
        className={`py-1 sm:py-2.5 px-2 sm:px-5 mr-2 rounded bg-${themeCtx.theme}`}
        onClick={toggleThemeHandler}
      >
        Toggle Theme
      </button>
    </>
  );
}
