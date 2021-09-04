import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children }) {
  return <div className="pf-button">{children}</div>;
}

Button.propTypes = {
  children: PropTypes.node,
};
