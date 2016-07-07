import React, { PropTypes } from 'react';

const Teleservice = ({teleServiceTitle}) => {
  return (
    <div>
      <h3 className="text-center app-teleservice-title">
        { teleServiceTitle }
      </h3>
      <div className="text-center">
        <a href="https://tele7.interieur.gouv.fr">
          <i
            className="fa fa-internet-explorer fa-3x"
            style={{color: '#59ABE3'}}
            aria-hidden="true">
          </i>
        </a>
      </div>
    </div>
  );
};

Teleservice.propTypes = {
  teleServiceTitle: PropTypes.string.isRequired
};

export default Teleservice;
