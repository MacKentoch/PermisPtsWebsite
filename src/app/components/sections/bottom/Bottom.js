import React, { PropTypes } from 'react';
import {
  BlackSection
}                           from '../../backgrounds';

const Bottom = ({copyrights, socials}) => {
  return (
    <BlackSection>
      <div className="row">
        <div className="col-xs-12">
          <ul className="social-links">
          {
            socials.map(
              (social, index) => {
                return (
                  <li
                    key={index}
                    className={`${social.cssClass} pull-right`}>
                    <a
                      href={social.link}>
                      <i className={social.faCss}></i>
                    </a>
                  </li>
                );
              }
            )
          }
          </ul>
        </div>
        <h4
          className="text-right"
          style={{marginRight: '40px'}}>
          {copyrights}
        </h4>
      </div>
    </BlackSection>
  );
};

Bottom.propTypes = {
  copyrights: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      cssClass: PropTypes.string.isRequired,
      faCss: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Bottom;
