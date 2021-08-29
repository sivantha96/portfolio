import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import toggleIcon from '../assets/icons/darkModeToggle.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import behanceIcon from '../assets/icons/behance.svg';
import facebookIcon from '../assets/icons/facebook.svg';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const handleToggle = () => {
    if (localStorage.theme !== 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
      setIsDarkMode(false);
    }
  };

  return (
    <div className="header backdrop-filter backdrop-brightness-90 backdrop-blur-lg">
      <div className="header__content container">
        <img
          src={toggleIcon}
          id="dark-mode-toggle"
          className={`header__icon header__toggle ${
            isDarkMode
              ? 'header__toggle--rotate-0'
              : 'header__toggle--rotate-180'
          }`}
          onClick={handleToggle}
          alt="dark-mode-toggle"
        />
        <img
          src={githubIcon}
          alt="github-icon"
          onClick={()=> window.open("https://github.com/sivantha96", "_blank")}
          className="header__icon transition-all dark:filter-dark	"
        />
        <img
          src={linkedinIcon}
          alt="linkedin-icon"
          onClick={()=> window.open("https://www.linkedin.com/in/sivantha96/", "_blank")}
          className="header__icon transition-all dark:filter-dark	"
        />
        <img
          src={behanceIcon}
          alt="behance-icon"
          onClick={()=> window.open("https://www.behance.net/sivantha96", "_blank")}
          className="header__icon transition-all dark:filter-dark	"
        />
        <img
          src={facebookIcon}
          alt="facebook-icon"
          onClick={()=> window.open("https://www.facebook.com/sivantha96/", "_blank")}
          className="header__icon transition-all dark:filter-dark	"
        />
        
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
