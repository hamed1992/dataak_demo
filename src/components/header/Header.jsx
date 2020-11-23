/** @format */

import React from "react";
import dark from "./../../assets/images/dark.svg";
import light from "./../../assets/images/light.svg";
import { useDarkToggle, useDarkToggleDispatch } from "./../../hooks";
function Header() {
  const themeStatus = useDarkToggle();
  const themeStatusDispatch = useDarkToggleDispatch();
  const handleThemeStatus = () => {
    themeStatusDispatch(!themeStatus);
  };
  return (
    <header>
      <h1>Popover Component</h1>
      <span>
        <img src={themeStatus ? light : dark} alt='them' onClick={handleThemeStatus} />
      </span>
    </header>
  );
}

export default Header;
