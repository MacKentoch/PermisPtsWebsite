import React, { PropTypes } from 'react';

const StoreIcons = ({ name, link, url, imageClass }) => {
  return (
    <div
      key={name}
      className="col-xs-6">
      <a href={url}>
        <img
          src={link}
          className={imageClass}
          alt={name}
        />
      </a>
    </div>
  );
};

StoreIcons.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  url:  PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired
};

export default StoreIcons;
