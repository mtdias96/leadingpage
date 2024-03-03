import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';

function SmoothScroll({ to, children }) {
  return (
    <Link
      to={to}
      smooth
      duration={600}
      spy
      exact="true"
      offset={-80}
    >
      {children}
    </Link>
  );
}

SmoothScroll.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SmoothScroll;
