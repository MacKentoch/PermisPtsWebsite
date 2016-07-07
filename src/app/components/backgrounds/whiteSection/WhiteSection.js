import React, { PropTypes } from 'react';

const WhiteSection = ({children}) => {
  return (
    <div className="white-section">
      <div className="containersCustom">
        {children}
      </div>
    </div>
  );
};

WhiteSection.propTypes = {
  children: PropTypes.node
};

export default WhiteSection;
