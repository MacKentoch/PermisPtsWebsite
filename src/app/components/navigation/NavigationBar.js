import React, {
  Component,
  PropTypes
}                     from 'react';
// import HumburgerMenu  from './humburgerMenu/HumburgerMenu';
import Scroll         from 'react-scroll';

const Link = Scroll.Link;

class NavigationBar extends Component {

  renderBrand() {
    if (this.props.navModel.brand) {
      const brandModel = this.props.navModel.brand;
      return (
        <Link
          className="navbar-brand"
          to={brandModel.scrollTo ? brandModel.scrollTo : ''}
          spy={brandModel.spy}
          smooth={brandModel.smooth}
          duration={brandModel.duration}>
          <img
            style={{height: '32px', marginBottom: '20px', marginTop: '-4px'}}
            src="./public/img/PermisPtsIcon.png">
          </img>
          &nbsp;
          {/* {brandModel.label ? brandModel.label : 'brand'} */}
        </Link>
      );
    }
    return null;
  }

  renderLeftNavButton() {
    if (this.props.navModel.leftLinks) {
      const leftNavButton = this.props.navModel.leftLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link
              activeClass="active"
              to={aLinkBtn.scrollTo}
              spy={aLinkBtn.spy}
              smooth={aLinkBtn.smooth}
              duration={aLinkBtn.duration}>
              {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  leftNavButton;
    }
    return null;
  }

  renderRightNavButton() {
    if (this.props.navModel.rightLinks) {
      const rightNavButton = this.props.navModel.rightLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link
              activeClass="active"
              to={aLinkBtn.scrollTo}
              spy={aLinkBtn.spy}
              smooth={aLinkBtn.smooth}
              duration={aLinkBtn.duration}>
              {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  rightNavButton;
    }
    return null;
  }

  render() {
    return (
      <nav className={this.props.cssClass}>
        <div className="containersCustom">
          <div className="navbar-header">
            {/* <HumburgerMenu /> */}
            {this.renderBrand()}
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {this.renderLeftNavButton()}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.renderRightNavButton()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  cssClass: PropTypes.string.isRequired,
  navModel: PropTypes.shape({

    brand: PropTypes.shape({
      label:  PropTypes.string.isRequired,
      link:   PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      scrollTo: PropTypes.string.isRequired,
      spy:      PropTypes.bool.isRequired,
      smooth:   PropTypes.bool.isRequired,
      duration: PropTypes.number.isRequired
    }).isRequired,

    leftLinks:    PropTypes.arrayOf(
      PropTypes.shape({
        label:    PropTypes.string.isRequired,
        link:     PropTypes.string.isRequired,
        scrollTo: PropTypes.string.isRequired,
        spy:      PropTypes.bool.isRequired,
        smooth:   PropTypes.bool.isRequired,
        duration: PropTypes.number.isRequired
      })
    ).isRequired,

    rightLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label:  PropTypes.string.isRequired,
        link:   PropTypes.string.isRequired,
        scrollTo: PropTypes.string.isRequired,
        spy:      PropTypes.bool.isRequired,
        smooth:   PropTypes.bool.isRequired,
        duration: PropTypes.number.isRequired
      })
    ).isRequired
  })
};

export default NavigationBar;
