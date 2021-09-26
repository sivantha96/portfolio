import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icons } from '../../theme';

function Card({
  style,
  image,
  name,
  description,
  color,
  icons,
  id,
  cardsInView,
  moreDescription,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  useEffect(() => {
    const index = cardsInView.indexOf(id.toString());
    if (index > -1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [cardsInView, id]);

  const renderIcons = () => {
    return icons.map((icon, index) => renderIcon(icon, index));
  };

  const renderIcon = (icon, iconKey) => {
    switch (icon) {
      case 'express':
        return (
          <img
            key={iconKey}
            className="pf-card__icon--wide transition-all dark:filter-dark"
            src={Icons[icon]}
            alt="icon"
          />
        );

      default:
        return (
          <img
            key={iconKey}
            className="pf-card__icon"
            src={Icons[icon]}
            alt="icon"
          />
        );
    }
  };

  const infoStyle = {
    top: isVisible || isInfoExpanded ? '0' : undefined,
    marginTop: isInfoExpanded ? '0' : '15rem',
  };

  const chevronStyle = {
    transform: isInfoExpanded ? 'rotate(90deg)' : 'rotate(-90deg)',
  };

  const moreInfo = isInfoExpanded ? (
    <div style={{ height: '15rem', width: '100%', padding: '2rem 0' }}>
      <span className="pf-card__description text-opacity-80 text-black dark:text-white dark:text-opacity-80">
        {moreDescription}
      </span>
    </div>
  ) : null;

  return (
    <div
      id={id}
      style={{ ...style, backgroundColor: color }}
      className="pf-card"
    >
      <img
        src={image}
        height="750"
        className="pf-card__image"
        width="1300"
        alt="background"
      />
      <div
        style={infoStyle}
        className="pf-card__info transform-gpu bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 backdrop-filter backdrop-brightness-90 backdrop-blur-lg"
      >
        <div className="flex justify-between">
          <span className="pf-card__name text-opacity-80 text-black dark:text-white dark:text-opacity-80">
            {name}
          </span>
          <img
            src={Icons.chevron}
            id="chevron"
            style={chevronStyle}
            className="cursor-pointer duration-500 opacity-1 hover:opacity-50 w-8 h-8 dark:filter-dark hover:fill-current transition-all transform-gpu bottom-4 left-4 relative"
            alt="chevron"
            height="32"
            width="32"
            onClick={() => {
              setIsInfoExpanded(!isInfoExpanded);
            }}
          />
        </div>

        <span className="pf-card__description text-opacity-80 text-black dark:text-white dark:text-opacity-80">
          {description}
        </span>
        {moreInfo}
        <div className="pf-card__footer">
          <div className="pf-card__icon__container">{renderIcons()}</div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  moreDescription: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.any,
  onPress: PropTypes.func,
  style: PropTypes.object,
  cardsInView: PropTypes.array,
};

export default Card;
