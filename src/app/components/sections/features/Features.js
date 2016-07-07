import React, {
  PropTypes
}                         from 'react';
import { WhiteSection }   from '../../backgrounds';
import Waypoint           from 'react-waypoint';
import cx                 from 'classnames';

const Features = (props) => {
  const { textIos, imgSrcIos, textAndroid, imgSrcAndroid, triggersAnimation, waypointKey, onWaypointEnter, onWaypointLeave } = props;
  return (
    <WhiteSection id="featuresSection">
      <div className="row">
        <div className="col-md-6 pull-right">
          <img
            src={imgSrcIos}
            className={cx({
              'featuresImageIos': true,
              'pull-left': true,
              'img-responsive': true,
              'center-block': true,
              animated: true,
              invisible: !triggersAnimation,
              fadeInRight: triggersAnimation
            })}
            alt="PermisPts">
          </img>
        </div>
        <div className="col-md-6 pull-left">
          <h3
            className={cx({
              'featuresTextIos': true,
              'pull-right': true,
              'center-block': true,
              animated: true,
              invisible: !triggersAnimation,
              fadeInUp: triggersAnimation
            })}>
            { textIos }
          </h3>
        </div>
      </div>
      <Waypoint
        key={waypointKey}
        onEnter={() => onWaypointEnter(waypointKey)}
        onLeave={() => onWaypointLeave(waypointKey)}
        threshold={0.2}
      />
      <div className="row">
        <div className="col-md-6 pull-right">
          <h3
            className={cx({
              'featuresTextAndroid': true,
              'pull-left': true,
              'center-block': true,
              animated: true,
              invisible: !triggersAnimation,
              fadeInUp: triggersAnimation
            })}>
            { textAndroid }
          </h3>
        </div>
        <div className="col-md-6 pull-left">
          <img
            src={imgSrcAndroid}
            className={cx({'featuresImageAndroid': true,
             'pull-right': true,
             'img-responsive': true,
             'center-block': true,
             animated: true,
             invisible: !triggersAnimation,
             fadeInLeft: triggersAnimation
           })}
            alt="PermisPts">
          </img>
        </div>
      </div>
    </WhiteSection>
  );
};

Features.propTypes = {
  textIos:   PropTypes.string.isRequired,
  triggersAnimation: PropTypes.bool.isRequired,
  imgSrcIos: PropTypes.string.isRequired,
  textAndroid:   PropTypes.string.isRequired,
  imgSrcAndroid: PropTypes.string.isRequired,
  waypointKey: PropTypes.string.isRequired,
  onWaypointEnter: PropTypes.func.isRequired,
  onWaypointLeave: PropTypes.func.isRequired
};

export default Features;
