import React, { PropTypes } from 'react';
import {
  WhiteSection
}                           from '../../backgrounds';
import App                  from './app/App';
import Teleservice          from './teleservice/Teleservice';

const Summary = ({mainTitle, appTitle, teleServiceTitle, storesImages}) => {
  return (
    <WhiteSection>
    <div className="row">
      <div className="col-xs-12">
        <h2 className="text-center">
          { mainTitle }
        </h2>
      </div>
      <div className="col-md-6">
        <App
          appTitle={appTitle}
          storesImages={storesImages}
        />
      </div>
      <div className="col-md-6">
        <Teleservice
          teleServiceTitle={teleServiceTitle}
        />
      </div>
    </div>
    </WhiteSection>
  );
};

Summary.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  appTitle: PropTypes.string.isRequired,
  teleServiceTitle: PropTypes.string.isRequired,
  storesImages  : React.PropTypes.arrayOf(React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  })).isRequired
};

export default Summary;
