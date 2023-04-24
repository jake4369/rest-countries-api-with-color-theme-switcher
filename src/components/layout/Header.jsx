import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme !== null ? storedTheme : "light-mode";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header>
      <h1 className="header__title">Where in the world?</h1>

      <div className="mode-switch__container" onClick={toggleTheme}>
        {theme === "light-mode" ? (
          <BsMoon className="mode-switch__icon" />
        ) : (
          <BsSun className="mode-switch__icon" />
        )}
        <p className="mode-switch__text">
          {theme === "light-mode" ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;
