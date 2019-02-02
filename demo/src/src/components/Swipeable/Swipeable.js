import React, {Component} from 'react';
import PropTypes from 'prop-types';

let elapsedTime, dist, startTime, startX, startY;

class Swipeable extends Component {
  onTouchStart = (e) => {
    var touchobj = e.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime();
  };

  onTouchEnd = (e) => {
    this.detectSwipeLeft(e);
    this.detectSwipeRight(e);
  };

  detectSwipeLeft = (e) => {
    const {threshold, allowedTime} = this.props;

    let touchobj = e.changedTouches[0];
    dist = startX - touchobj.pageX;
    elapsedTime = new Date().getTime() - startTime;

    let isSwipeLeft =
      elapsedTime <= allowedTime &&
      dist >= threshold &&
      Math.abs(touchobj.pageY - startY) <= 100;

    this.handleSwipe(isSwipeLeft, false);
  };

  detectSwipeRight = (e) => {
    const {threshold, allowedTime} = this.props;

    let touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX;
    elapsedTime = new Date().getTime() - startTime;

    let isSwipeRight =
      elapsedTime <= allowedTime &&
      dist >= threshold &&
      Math.abs(touchobj.pageY - startY) <= 100;

    this.handleSwipe(false, isSwipeRight);
  };

  handleSwipe = (isSwipeLeft, isSwipeRight) => {
    const {onSwipeLeft, onSwipeRight, disable} = this.props;

    if (!disable) {
      if (isSwipeLeft) {
        onSwipeLeft();
      } else if (isSwipeRight) {
        onSwipeRight();
      }
    }
  };

  render() {
    const {children} = this.props;

    return (
      <div onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
        {children}
      </div>
    );
  }
}

Swipeable.propTypes = {
  disable: PropTypes.bool,
  threshold: PropTypes.number,
  allowedTime: PropTypes.number,
  onSwipeLeft: PropTypes.func.isRequired,
  onSwipeRight: PropTypes.func.isRequired,
};

Swipeable.defaultProps = {
  threshold: 150,
  allowedTime: 800,
  disable: false,
};

export default Swipeable;
