import React, {
  Component,
  PropTypes
}                 from 'react';
import cx         from 'classnames';


class ViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated:   true,
      viewEnters: false
    };
  }

  componentWillMount() {
    this.setState({
      viewEnters: true
    });
  }

  processViewAnimationClasses() {
    const homeViewClasses = cx({
      'animatedViews': this.state.animated,
      'invisible':    !this.state.viewEnters,
      'view-enter':     this.state.viewEnters
    });
    return homeViewClasses;
  }

  render() {
    return (
      <div
        className={this.processViewAnimationClasses()}>
        {this.props.children}
      </div>
    );
  }
}

ViewContainer.propTypes = {
  children:   PropTypes.node,
  isAnimated: PropTypes.bool
};

ViewContainer.defaultProps = {
  isAnimated: true
};

export default ViewContainer;
