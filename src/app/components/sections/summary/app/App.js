import React, { PropTypes } from 'react';
import { NumberTest }       from '../../../../services/NumberTest';
import StoreIcons           from './storeIcons/StoreIcons';

const App = ({appTitle, storesImages}) => {
  return (
    <div >
      <h3 className="text-center app-sumup-title">
        { appTitle }
      </h3>
      <div
        id="sumupTeleserviceStoreIcons"
        className="row">
        {
          storesImages.map(
            (store, index) => {
              const imageClass = `img-responsive ${store.size === 'normal' ? 'storeIcons' : 'storeIconsSmall'}`;
              return (
                <StoreIcons
                  key={store.name}
                  name={store.name}
                  link={store.link}
                  imageClass={NumberTest.isEven(index) ? `${imageClass} ${'pull-right'}` : `${imageClass} ${'pull-left'}`}
                  url={store.url}
                />
              );
            }
          )
        }
      </div>
    </div>
  );
};

App.propTypes = {
  appTitle: PropTypes.string.isRequired,
  storesImages  : React.PropTypes.arrayOf(React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  })).isRequired
};

export default App;
