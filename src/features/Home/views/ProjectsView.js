import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import { Colors, Images } from '../../../theme';

const cards = [
  {
    id: 0,
    name: 'Ncell Gifting Platform',
    description:
      'A web based platform to facilitate a novel experience of purchasing telco product/s as a gift and send it to a customer for the activation.',
    icons: ['angular', 'bootstrap'],
    image: Images.gifting,
    color: Colors.bg_gifting,
    moreDescription:
      'I have worked as a frontend developer in this project. I mainly did the UI development and API integration parts using Angular and Bootstrap frameworks.',
  },
  {
    id: 1,
    name: 'Janashakthi Protech',
    description:
      'A web based platform where customers can explore and purchase insurance policies with pre-configured option or customizable options.',
    icons: ['angular', 'bootstrap'],
    image: Images.protech,
    color: Colors.bg_protech,
    moreDescription:
      'I have worked as a frontend lead developer in this project. I was directly engaging with the customer and other stakeholders and also led a team of 5.',
  },
  {
    id: 2,
    name: 'URL Shortener',
    description:
      'A web based app and a service where users can create short URLs for the given long URLs as well as monitor, protect and manage the URLs.',
    icons: ['mongo', 'express', 'angular', 'node', 'bootstrap'],
    image: Images.podime,
    color: Colors.bg_podime,
    moreDescription:
      'I have worked as a frontend developer in this project. I mainly did the UI development and API integration parts using Angular and Bootstrap frameworks.',
  },
  {
    id: 4,
    name: 'Genie Admin Portal',
    description:
      'The admin portal of the payment solution and a digital wallet introduced by Dialog Axiata, Sri Lanka',
    icons: ['angular', 'ngrx', 'bootstrap'],
    image: Images.genie,
    color: Colors.bg_genie,
    moreDescription:
      'I have worked as a frontend developer in this project. I mainly did the UI development and API integration parts using Angular and Bootstrap frameworks.',
  },
  {
    id: 5,
    name: 'XLife',
    description: 'An employee super app for XL Axiata, Indonesia',
    icons: ['reactNative', 'redux', 'reduxSaga'],
    image: Images.xlife,
    color: Colors.bg_xlife,
    moreDescription:
      'I have worked as a frontend developer in this project. I mainly did the UI development and API integration parts using Angular and Bootstrap frameworks.',
  },
  {
    id: 6,
    name: 'Janashakthi Life',
    description: 'A self care app for the customers of Janashakthi, Sri Lanka.',
    icons: ['reactNative', 'redux', 'reduxSaga'],
    image: Images.jlife,
    color: Colors.bg_jlife,
    moreDescription:
      'I have worked as a frontend developer in this project. I mainly did the UI development and API integration parts using Angular and Bootstrap frameworks.',
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

  return (
    <section className="container relative flex justify-center items-center flex-col mt-20">
      <span className="w-4/5 text-5xl top-20 md:absolute text-opacity-60 text-black dark:text-white dark:text-opacity-60">
        Projects
      </span>
      {renderCards()}
    </section>
  );
}
