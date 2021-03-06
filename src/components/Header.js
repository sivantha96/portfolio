import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toggleIcon from '../assets/icons/darkModeToggle.svg';
import terminalIcon from '../assets/icons/terminal.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import behanceIcon from '../assets/icons/behance.svg';
import * as appActions from '../store/AppStore/actions';

export const Header = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      dispatch(appActions.setDarkModeStatus(true));
    } else {
      document.documentElement.classList.remove('dark');
      dispatch(appActions.setDarkModeStatus(false));
    }
  }, [dispatch]);

  const handleToggle = () => {
    if (localStorage.theme !== 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.removeItem('theme');
      localStorage.theme = 'dark';
      dispatch(appActions.setDarkModeStatus(true));
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
      localStorage.theme = 'light';
      dispatch(appActions.setDarkModeStatus(false));
    }
  };

  return (
    <div className="pf-header backdrop-filter backdrop-brightness-90 backdrop-blur-lg">
      <div className="pf-header__content container">
        <div className="pf-header__left">
          <img
            src={toggleIcon}
            id="dark-mode-toggle"
            className={`pf-header__toggle transform-gpu ${
              isDarkMode
                ? 'pf-header__toggle--rotate-0'
                : 'pf-header__toggle--rotate-180'
            }`}
            onClick={handleToggle}
            alt="dark-mode-toggle"
            height="20"
            width="20"
          />
          <img
            src={terminalIcon}
            id="terminal-toggle"
            className="pf-header__icon transform-gpu transition-all dark:filter-dark	invisible md:visible"
            onClick={() => dispatch(appActions.toggleTerminal())}
            alt="terminal-toggle"
            height="20"
            width="20"
          />
        </div>
        <div className="pf-header__right">
          <img
            src={githubIcon}
            alt="github-icon"
            onClick={() =>
              window.open('https://github.com/sivantha96', '_blank')
            }
            className="pf-header__icon transform-gpu transition-all dark:filter-dark	"
            height="20"
            width="20"
          />
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            onClick={() =>
              window.open('https://www.linkedin.com/in/sivantha96/', '_blank')
            }
            className="pf-header__icon transform-gpu transition-all dark:filter-dark	"
            height="20"
            width="20"
          />
          <img
            src={behanceIcon}
            alt="behance-icon"
            onClick={() =>
              window.open('https://www.behance.net/sivantha96', '_blank')
            }
            className="pf-header__icon transform-gpu transition-all dark:filter-dark	"
            height="20"
            width="20"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
