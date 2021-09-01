import React from 'react';
import dpImage from '../../assets/images/dp.png';

function Home() {
  return (
    <div className="home flex justify-center">
      <section className="min-h-screen container flex justify-center items-center flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-white home__greet">
              Hi, my name is
            </span>
            <span className="text-gray-500 dark:text-white home__name--first">
              Sivantha
            </span>
            <span className="text-gray-500 dark:text-white home__name--last">
              Paranavithana
            </span>
          </div>
          <img
            src={dpImage}
            height="814"
            width="819"
            alt="dp"
            className="home__dp"
          />
        </div>
        <span className="text-gray-500 dark:text-white home__description">
          I am a Full Stack Developer and a Designer
          <br />
          from Colombo, Sri Lanka.
        </span>
      </section>
    </div>
  );
}

export default Home;
