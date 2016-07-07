import React, { PropTypes } from 'react';
import {
  WhiteSection
}                           from '../../backgrounds';
const YoutubePreview = ({videoTitle, videoEmbedLink, showYoutube}) => {
  return (
    <WhiteSection>
    <div className="row">
      <div className="col-sm-10 col-sm-offset-1">
      {
        showYoutube &&
        <div className="animated fadeIn">
          <h2 className="text-center">
            {videoTitle}
          </h2>
          <div
            className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={videoEmbedLink}>
            </iframe>
          </div>
        </div>
      }
      </div>
    </div>
    </WhiteSection>
  );
};

YoutubePreview.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoEmbedLink: PropTypes.string.isRequired,
  showYoutube: PropTypes.bool.isRequired
};

export default YoutubePreview;
