import React from 'react';
import { Link } from 'react-router-dom';
import dpImage from '../../../assets/images/dp.png';
import chevron from '../../../assets/icons/chevron.svg';
import MouseScroll from '../../../components/MouseScroll';

export default function LandingView() {
  return (
    <section className="min-h-screen container flex justify-center items-center flex-col">
      <div
        className="flex flex-row items-center"
        data-relative-input="true"
        id="scene"
      >
        <div className="flex flex-col" data-depth="0.2">
          <span className="text-opacity-60 text-black dark:text-white dark:text-opacity-60 pf-home__landing__greet">
            Hi, my name is
          </span>
          <span className="text-opacity-60 text-black dark:text-white dark:text-opacity-60 pf-home__landing__name--first">
            Sivantha
          </span>
          <span className="text-opacity-60 text-black dark:text-white dark:text-opacity-60 pf-home__landing__name--last">
            Paranavithana
          </span>
        </div>
        <img
          src={dpImage}
          height="814"
          width="819"
          alt="dp"
          id="scene-built"
          className="pf-home__landing__dp"
          data-depth="0.2"
        />
      </div>
      <span className="text-opacity-60 text-black dark:text-white dark:text-opacity-60 pf-home__landing__description">
        I am a Full Stack Developer and a Designer
        <br />
        from Colombo, Sri Lanka.
      </span>
      <Link className="pf-link" to="/about">
        <span className="text-opacity-60 text-black dark:text-white dark:text-opacity-60">
          {' '}
          More about me
        </span>
        <img
          src={chevron}
          id="chevron"
          className="opacity-50 dark:filter-dark dark:opacity-50 ml-3 hover:fill-current"
          alt="chevron"
          height="20"
          width="20"
        />
      </Link>

      <MouseScroll />
    </section>
  );
}
