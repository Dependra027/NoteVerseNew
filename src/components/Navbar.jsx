import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Keep this for other links
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';
import Input from './Searchbar';
import Switch from './button';

const Navbar = ({ isLoggedIn, username, setShowLoginPopup, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  // Close menu when clicking outside or on an option
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navElement = document.querySelector('.navbar');
      if (navElement && !navElement.contains(event.target)) {
        setIsMenuOpen(false);
        setIsCategoryOpen(false);
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsMenuOpen(false); // Close the menu when an option is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>NoteVerse</h1>
      </div>
      <Switch />

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

    
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={handleOptionClick}>Home</Link></li>
        <li className="dropdown">
          <a href="#" onClick={toggleCategory}>Category</a>
          {isCategoryOpen && (
            <ul className="dropdown-content">
              <li className="dropdown-submenu">
                <ScrollLink to="school-notes" smooth={true} duration={500} onClick={handleOptionClick}>
                  School Notes
                </ScrollLink>
              </li>
              <li className="dropdown-submenu">
                <ScrollLink to="college-notes" smooth={true} duration={500} onClick={handleOptionClick}>
                  College Notes
                </ScrollLink>
              </li>
              <li className="dropdown-submenu">
                <ScrollLink to="competition-notes" smooth={true} duration={500} onClick={handleOptionClick}>
                  Competition Notes
                </ScrollLink>
              </li>
            </ul>
          )}
        </li>
        <li><Link to="/upload" onClick={handleOptionClick}>Upload</Link></li>
        <li>
          {isLoggedIn ? (
            <div className="user-dropdown" onClick={toggleUserMenu}>
              <span className="user-icon">👤 {username}</span>
              {isUserMenuOpen && (
                <ul className="user-menu">
                  <li><Link to="/profile" onClick={handleOptionClick}>Profile</Link></li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              )}
            </div>
          ) : (
            <a href="#" onClick={handleLoginClick}>Login/SignUp</a>
          )}
        </li>
      </ul>

      {/* <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div> */}
      <div className="navbar-search">
  <Input />
</div>



    </nav>
  );
};

export default Navbar;
