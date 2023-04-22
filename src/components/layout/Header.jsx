import { BsMoon, BsSun } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <h1 className="header__title">Where in the world?</h1>

      <div className="mode-switch__container">
        <BsMoon className="mode-switch__icon" />
        <p className="mode-switch__text">Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
