import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import { Colors, Images } from '../../../theme';

const cards = [
  {
    id: 5,
    name: 'XLife',
    description: 'An employee super app for XL Axiata, Indonesia.',
    extraInfo:
      'In this project I worked as a Frontend Mobile Engineer while working hand-in-hand with Indonesian backend development team, other local and foreign stakeholders in an agile environment to plan and implement the app from the ground up while directly engaging with the customer. The cross-platform mobile application is developed using React Native with middleware such as Redux, Redux-Saga. \n\nCurrently the app is in production with over 2500 daily users. The application consist of many features such as  Health monitoring, reports, social media, reservation management, document management, marketplace and many more.',
    icons: ['reactNative', 'redux', 'reduxSaga'],
    image: Images.xlife,
    color: Colors.bg_xlife,
  },
  {
    id: 0,
    name: 'Ncell Gifting Platform',
    description:
      'A web based platform to facilitate a gifting telco products of NCell Axiata, Nepal',
    extraInfo:
      'I worked as a frontend developer for the Admin portal of this platform with one other senior frontend developer. The single-page web application is developed using Angular 10 and Angular Material and Bootstrap 4 are used for UIs. Furthermore, concepts such as lazy-loading, scaffolding, BEM and ITCSS are also applied to the project.\n\nCurrently the platform is in production where customers can purchase gifts from a myriad of Ncell applications such as Ncell App, Ncell website, POS, and through other third-party applications. The admin portal consist of gift management, monitoring and report functionalities.',
    icons: ['angular', 'bootstrap'],
    image: Images.gifting,
    color: Colors.bg_gifting,
  },
  {
    id: 1,
    name: 'Janashakthi Protech',
    description:
      'A web based platform where customers can explore and purchase insurance policies.',
    extraInfo: 'I played the role of a lead frontend engineer with ',
    icons: ['angular', 'bootstrap'],
    image: Images.protech,
    color: Colors.bg_protech,
  },
  {
    id: 2,
    name: 'URL Shortener',
    description:
      'A web based app and a service where users can create short URLs for the given long URLs as well as monitor, protect and manage the URLs.',
    icons: ['mongo', 'express', 'angular', 'node', 'bootstrap'],
    image: Images.podime,
    color: Colors.bg_podime,
  },
  {
    id: 4,
    name: 'Genie Admin Portal',
    description:
      'The admin portal of the payment solution and a digital wallet introduced by Dialog Axiata, Sri Lanka',
    icons: ['angular', 'ngrx', 'bootstrap'],
    image: Images.genie,
    color: Colors.bg_genie,
  },

  {
    id: 6,
    name: 'Janashakthi Life',
    description: 'A self care app for the customers of Janashakthi, Sri Lanka.',
    extraInfo:
      'In this project I worked as a Full Stack developer with one other mobile engineer to develop a cross-platform application from the ground-up with React Native and a highly secure backend API using Node.js and Express framework with the latest authentication and authorization methodologies such as JWTs and also request/response encryption. I also played to lead role of the backend development team consist of two other junior developers while directly engaging with the customer.\n\nThis application is currently on both Apple App Store and Google Play Store with more than 500 monthly users.',
    icons: ['reactNative', 'redux', 'reduxSaga'],
    image: Images.jlife,
    color: Colors.bg_jlife,
  },
];

export default function ProjectsView() {
  const [cardsInView, setCardsInView] = useState([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (events) => {
        events.forEach((e) => {
          if (e.isIntersecting) {
            const index = cardsInView.indexOf(e.target.id);
            if (index === -1) {
              const tempArray = [...cardsInView];
              tempArray.push(e.target.id);
              setCardsInView(tempArray);
            }
          }

          if (!e.isIntersecting) {
            const index = cardsInView.indexOf(e.target.id);
            if (index > -1) {
              const tempArray = [...cardsInView];
              tempArray.splice(index, 1);
              setCardsInView(tempArray);
            }
          }
        });
      },
      {
        threshold: [0.8],
      }
    );

    document
      .querySelectorAll('div[class="pf-card"]')
      .forEach((elem) => io.observe(elem));
    return () => {
      document
        .querySelectorAll('div[class="pf-card"]')
        .forEach((elem) => io.unobserve(elem));
    };
  }, [cardsInView]);

  const renderCards = () => {
    const leftCol = [];
    const rightCol = [];
    cards.forEach((project, index) => {
      if (index % 2 !== 0) {
        leftCol.push(project);
      } else {
        rightCol.push(project);
      }
    });

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full py-10">
        <div className="flex flex-col items-center md:items-end md:mt-32">
          {leftCol.map((project) => (
            <Card
              {...project}
              cardsInView={cardsInView}
              key={project.id}
              style={{ marginTop: '2.5rem' }}
            />
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start">
          {rightCol.map((project) => (
            <Card
              {...project}
              cardsInView={cardsInView}
              key={project.id}
              style={{ marginTop: '2.5rem' }}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderArticles = () => {
    const leftCol = [];
    const rightCol = [];
    [].forEach((project, index) => {
      if (index % 2 !== 0) {
        leftCol.push(project);
      } else {
        rightCol.push(project);
      }
    });

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full py-10">
        <div className="flex flex-col items-center md:items-end md:mt-32">
          {leftCol.map((project) => (
            <Card
              {...project}
              cardsInView={cardsInView}
              key={project.id}
              style={{ marginTop: '2.5rem' }}
            />
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start">
          {rightCol.map((project) => (
            <Card
              {...project}
              cardsInView={cardsInView}
              key={project.id}
              style={{ marginTop: '2.5rem' }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="container relative flex justify-center items-center flex-col mt-20">
      <span className="w-4/5 text-5xl top-1 md:top-20 absolute text-opacity-60 text-black dark:text-white dark:text-opacity-60">
        Projects
      </span>
      {renderCards()}
    </section>
  );
}
