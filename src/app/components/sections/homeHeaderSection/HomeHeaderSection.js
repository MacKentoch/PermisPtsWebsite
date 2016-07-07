import React, {
  PropTypes
}                         from 'react';
import { NumberTest }     from '../../../services/NumberTest';
import { WhiteSection }   from '../../backgrounds';
import { StoreIcons }     from './storeIcons';
import { ImagesCarousel } from './imagesCarousel';

const HomeHeaderSection = (props) => {
  const { title, subtitle, storesImages, carousel } = props;

  return (
    <WhiteSection id="headerSection">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center homeHeaderSectionTitle">
            { title }
          </h1>
          <h2 className="text-center homeHeaderSectionSubTitle">
            { subtitle }
          </h2>
        </div>
      </div>
      <ImagesCarousel
        carousel={carousel}
      />
      <div
        id="HeaderStoreIcons"
        className="row">
        {
          storesImages.map(
            (store, index) => {
              const imageClass = `img-responsive ${store.size === 'normal' ? 'storeIcon' : 'storeIconSmall'}`;
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
    </WhiteSection>
  );
};

HomeHeaderSection.propTypes = {
  title:      PropTypes.string.isRequired,
  subtitle:   PropTypes.node.isRequired,
  storesImages  : React.PropTypes.arrayOf(React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  })).isRequired,
  carousel  : React.PropTypes.arrayOf(React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  })).isRequired
};

export default HomeHeaderSection;
