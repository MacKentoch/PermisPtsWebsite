import React, { PropTypes } from 'react';

const BlackSection = ({children}) => {
  return (
    <div className="black-section">
      <div className="containersCustom">
        {children}
      </div>
    </div>
  );
};

BlackSection.propTypes = {
  children: PropTypes.node
};

export default BlackSection;
