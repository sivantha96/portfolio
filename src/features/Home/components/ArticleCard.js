import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ArticleCard({
  style,
  image,
  description,

  color,

  id,
  link,
  cardsInView,
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isInfoExpanded] = useState(false);

  useEffect(() => {
    const index = cardsInView?.indexOf(id.toString());
    if (index > -1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [cardsInView, id]);

  const infoStyle = {
    top: isVisible || isInfoExpanded ? '0' : undefined,
    marginTop: isInfoExpanded ? '0' : '0rem',
  };

  return (
    <div
      id={id}
      style={{ ...style, backgroundColor: color }}
      className="pf-card pf-card--articles bg-white dark:bg-black dark:bg-opacity-20"
    >
      <img src={image} className="pf-card__image-article" alt="background" />
      <div
        style={infoStyle}
        className="pf-card__info pf-card__info--article transition-all  transform-gpu bg-slate-300 bg-opacity-70 dark:bg-black dark:bg-opacity-70 backdrop-filter backdrop-brightness-90 backdrop-blur-lg"
      >
        <span className="pf-card__description text-opacity-80 text-black dark:text-white dark:text-opacity-80">
          {description}
        </span>
        <a
          target="_blank"
          href={link}
          className="pf-card__demo cursor-pointer duration-500 text-opacity-80 hover:opacity-50 dark:filter-inverse text-black dark:text-white  bg-white bg-opacity-20 border border-black dark:border-white"
          rel="noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  extraInfo: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.any,
  onPress: PropTypes.func,
  style: PropTypes.object,
  cardsInView: PropTypes.array,
};

export default ArticleCard;
