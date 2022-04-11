import React, { useCallback, useEffect, useState } from 'react';
import { Colors, Images } from '../../../theme';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 0,
    name: 'NCell Gifting Platform',
    description:
      'A web based platform to facilitate a gifting telco products of NCell Axiata, Nepal',
    extraInfo:
      'I worked as a frontend developer for the Admin portal of this platform with one other senior frontend developer. The single-page web application is developed using Angular 10 and Angular Material and Bootstrap 4 are used for UIs. Concepts such as scaffolding, BEM and ITCSS are also applied and the production build is optimized well by lazy-loading modules and using source map explorer.\n\nCurrently the platform is in production where customers can purchase gifts from a myriad of NCell applications such as NCell App, NCell website, POS, and through other third-party applications. The admin portal consist of gift management, monitoring and report functionalities.',
    icons: ['angular', 'bootstrap'],
    image: Images.gifting,
    color: Colors.bg_gifting,
  },
  {
    id: 1,
    name: 'Janashakthi Protech',
    description:
      'A web based platform where customers can explore and purchase insurance policies.',
    extraInfo:
      'In this project I played the role of a lead frontend engineer while directly engaging with the customers. The latest version is the fourth version after major revamp to the previous versions.\n\nThe developed application is a single page web application where customers can explore, customize and purchase various kinds of insurance policies offered by the company. The application has various features such as multi-language support, KYC process, instant premium calculator, etc. Furthermore, the app is integrated with the Janashakthi Life platform in such a way that customers can use this application to do many tasks such as pay dues online, track policies and payments, etc. \n\nThe latest version is developed using Angular 9 and most of the components and UIs are custom tailored to the customer requirements with the use of concepts such as BEM, ITCSS, lazy-loading, scaffolding etc.',
    icons: ['angular', 'bootstrap'],
    image: Images.protech,
    color: Colors.bg_protech,
    link: 'https://digi.janashakthi.com/app',
  },
  {
    id: 2,
    name: 'URL Shortener',
    description:
      'A web based app and a service where users can create short URLs for the given long URLs as well as monitor, protect and manage the URLs.',
    extraInfo:
      'This was my first Angular project. I developed both frontend and backend of the system and currently on production with more than 2000 shortened URLs. The system was revamped in the second major version of the system, and I led a team of 5 junior developers during the revamp. \n\nThe first version included features such link shortening and managing the link by editing, protecting the shortened links. The revamped version includes advanced features such as analytics, monetizing links, etc.',
    icons: ['mongo', 'express', 'angular', 'node', 'bootstrap'],
    image: Images.podime,
    link: 'https://podi.me/app',
    color: Colors.bg_podime,
  },
  {
    id: 3,
    name: 'NCell Payment Gateway',
    description:
      'A platform to enable e-top ups and bill payments through integrated interfaces, selling telco and digital products of NCell, Nepal.',
    extraInfo: 'I worked as a frontend developer in this project while collaborating with another developer to implement two portals (one for customers and one for retailers) using Angular and NGXS state management library.',
    icons: ['angular', 'ngxs', 'bootstrap'],
    image: Images.genie,
    color: Colors.bg_genie,
  },
  {
    id: 4,
    name: 'Genie Admin Portal',
    description:
      'The admin portal of the payment solution and a digital wallet introduced by Dialog Axiata, Sri Lanka',
    extraInfo: 'I worked on few modules of Genie admin portal where I got to use NgRx with Angular. Also most of the UIs had to be custom tailored as per requirements.',
    icons: ['angular', 'ngrx', 'bootstrap'],
    image: Images.genie,
    color: Colors.bg_genie,
  },
  {
    id: 5,
    name: 'XLife',
    description: 'An employee super app for XL Axiata, Indonesia.',
    extraInfo:
      'In this project I worked as a Frontend Mobile Engineer while working hand-in-hand with Indonesian backend development team, other local and foreign stakeholders in an agile environment to plan and implement the app from the ground up while directly engaging with the customer. The cross-platform mobile application is developed using React Native with middleware such as Redux, Redux-Saga. \n\nCurrently the app is in production with over 2500 daily users. The application consist of many features such as  Health monitoring, reports, social media, reservation management, document management, marketplace and many more.',
    icons: ['reactNative', 'redux', 'reduxSaga'],
    link: 'https://play.google.com/store/apps/details?id=com.id.xl.employee.app',
    image: Images.xlife,
    color: Colors.bg_xlife,
  },
  {
    id: 6,
    name: 'Janashakthi Life',
    description: 'A self care app for the customers of Janashakthi, Sri Lanka.',
    extraInfo:
      'In this project I worked as a Full Stack developer to develop a cross-platform application from the ground-up with React Native and a highly secure backend API using Node.js, Express framework and MongoDB database with the latest authentication and authorization methodologies such as JWTs and also request/response encryption.\n\nI also played the lead role of the backend development team consist of two other junior developers while directly engaging with the customer.\n\nThis application is currently on both Apple App Store and Google Play Store with more than 500 monthly users.',
    icons: ['reactNative', 'redux', 'reduxSaga', 'mongo', 'express', 'node'],
    image: Images.jlife,
    link: 'https://apps.apple.com/us/app/janashakthi-life/id1583994799',
    color: Colors.bg_jlife,
  },
];

const desktopLeft = [5, 0, 2];
const desktopRight = [6, 1, 4, 3];

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

  const renderProject = useCallback(
    (id) => {
      const foundProject = projects.find((project) => project.id === id);
      return (
        <ProjectCard
          {...foundProject}
          cardsInView={cardsInView}
          key={foundProject.id}
          style={{ marginTop: '2.5rem' }}
        />
      );
    },
    [cardsInView]
  );

  const renderProjectArray = useCallback(
    (idArray) => {
      return idArray.map((id) => {
        return renderProject(id);
      });
    },
    [renderProject]
  );

  const renderCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full py-10">
        <div className="flex flex-col items-center md:items-end md:mt-32">
          {renderProjectArray(desktopLeft)}
        </div>
        <div className="flex flex-col items-center md:items-start">
          {renderProjectArray(desktopRight)}
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
