import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const IconLiquid = ({ className }) => (
  <svg
    version="1.1"
    width="30"
    viewBox="0 0 103.116 103.116"
    className={classnames(className)}
  >
    <g>
      <path
        d="M53.877,1.147c-1.043-1.529-3.604-1.529-4.64,0c-1.333,1.978-32.702,48.505-32.702,66.947
		c0,19.306,15.718,35.021,35.021,35.021c19.306,0,35.022-15.716,35.022-35.021C86.58,49.652,55.209,3.12,53.877,1.147z
		 M51.557,97.512c-16.221,0-29.417-13.188-29.417-29.418c0-12.796,19.461-45.122,29.417-60.317
		c9.959,15.195,29.419,47.51,29.419,60.317C80.976,84.324,67.776,97.512,51.557,97.512z M54.358,89.107
		c0,1.548-1.259,2.802-2.801,2.802c-13.135,0-23.813-10.682-23.813-23.814c0-1.543,1.261-2.802,2.802-2.802s2.801,1.259,2.801,2.802
		c0,10.047,8.169,18.211,18.211,18.211C53.099,86.305,54.358,87.553,54.358,89.107z"
      />
    </g>
  </svg>
);

IconLiquid.propTypes = {
  className: PropTypes.string,
};

IconLiquid.defaultProps = {
  className: undefined,
};

export default IconLiquid;
