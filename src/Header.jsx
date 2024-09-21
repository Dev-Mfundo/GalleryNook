import { useState } from "react";
import AuthUser from "./components/AuthUser";

const Header = () => {
  const [formIsVisible, setFormVisible] = useState(false);
  const toggleForm = () => {
    setFormVisible(!formIsVisible);
  };

  const [toggleNav, setToggleNav] = useState(false);

  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
  };

  const handleMenuItemClick = () => {
    setToggleNav(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>GalleryNook</h1>
        </div>

        <nav
          className="nav"
          style={{ display: toggleNav ? "flex" : "none" }}
        >
          <ul>
            <li><a href="./" onClick={handleMenuItemClick}>Home</a></li>
            <li><a href="#gallery" onClick={handleMenuItemClick}>Gallery</a></li>
            <li><a href="#portraits" onClick={handleMenuItemClick}>Portraits</a></li>
            <li><a href="#contact" onClick={handleMenuItemClick}>Contact</a></li>
          </ul>
          <button type="button" onClick={toggleForm} >Login</button>
        </nav>

        <div className="toggleBar" onClick={handleNavToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      {formIsVisible && (
        <div className="form-popup">
          <AuthUser />
          <button className="close-btn" onClick={toggleForm}>Close</button>
        </div>
      )}
    </>
  );
};

export default Header;
