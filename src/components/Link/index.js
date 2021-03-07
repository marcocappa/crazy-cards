import React from 'react';
import { Link } from 'react-router-dom';
import './link.scss';

const LinkComponent = (props) => (
  <Link {...props} className={'crazy-card-link'} />
);

export default LinkComponent;
