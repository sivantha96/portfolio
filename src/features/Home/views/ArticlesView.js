import React, { memo, useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';

function ArticlesView() {
  const [articles, setArticles] = useState([]);
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

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=sivantha96')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((err) => alert(err.message));
  }, []);

  const renderArticlesArray = (arr) => {
    return arr?.map((article) => {
      return (
        <ArticleCard
          {...article}
          name={article.title}
          key={article.id}
          description={article.description}
          image={article.social_image}
          link={article.url}
          cardsInView={cardsInView}
          style={{ marginTop: '2.5rem' }}
        />
      );
    });
  };

  const renderProjectArray = () => {
    const desktopLeft = articles.filter((_, index) => index % 2 === 0);
    const desktopRight = articles.filter((_, index) => index % 2 !== 0);
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full py-10">
        <div className="flex flex-col items-center md:items-end md:mt-32">
          {renderArticlesArray(desktopRight)}
        </div>
        <div className="flex flex-col items-center md:items-start">
          {renderArticlesArray(desktopLeft)}
        </div>
      </div>
    );
  };

  return (
    <section className="container relative flex justify-center items-center flex-col mt-20">
      <span className="w-4/5 text-5xl top-1 md:top-20 absolute text-opacity-60 text-black dark:text-white dark:text-opacity-60">
        Articles
      </span>
      {renderProjectArray()}
    </section>
  );
}

export default memo(ArticlesView);
