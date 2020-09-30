import React, { FC, useState, useMemo, useEffect } from "react";
import { Link } from "gatsby";
import LightsOnIcon from "./icons/LightsOn";
import styled from "styled-components";
import CustomLink from "./CustomLink";
import { Theme, useTheme } from "../context/theme-context";

interface Props {
  className?: string;
}

const LightModeToggle = styled.div`
  cursor: pointer;
`;

const Navbar: FC<Props> = (props) => {
  const { theme, toggleTheme } = useTheme();
  const { className = "" } = props;

  const lightbulbColor = theme === "light" ? "black" : "white";
  const themeClasses = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const navbarLinkClass = theme === "light" ? "text-gray-700" : "text-gray-300";
  const navbarBorder =
    theme === "light" ? "border-gray-500" : "border-gray-700 ";

  return (
    <nav
      id="header"
      role="navigation"
      aria-label="main-navigation"
      // className={`bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 ${className}`}
      className={`${themeClasses} border-b ${navbarBorder} w-full fixed mx-auto px-4 sm:px-6 xl:px-0 z-50`}
    >
      <div className="container mx-auto pl-3">
        <div className="flex flex-row flex-wrap items-center justify-between items-center">
          {/* Right section after Brand */}
          <div className="flex flex-row">
            {/* Brand */}
            <div className={`${navbarLinkClass} navbar-brand mr-3`}>
              {window.location.pathname !== "/" && (
                <CustomLink to="/" title="Logo">
                  Home
                </CustomLink>
              )}
            </div>

            {/* Menu items */}
          </div>

          {/* Action buttons */}
          <LightModeToggle onClick={() => toggleTheme()}>
            <LightsOnIcon
              on={theme === "light"}
              style={{ transform: "translateY(3px)" }}
              color={lightbulbColor}
            />
          </LightModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
