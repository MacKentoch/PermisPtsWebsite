import React, {
  PropTypes
}                 from 'react';

const NavigationButton = (props) => {
  return (
    <li>
      <a href={props.href}>
        {props.children}
      </a>
    </li>
  );
};

NavigationButton.propTypes = {
  children: PropTypes.node.isRequired,
  href:     PropTypes.string
};

NavigationButton.defaultProps  = {
  href: '#'
};

export default NavigationButton;
