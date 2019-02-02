import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicator from '../Indicator';
import Swipeable from '../Swipeable';

import styles from './Carousel.module.css';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    let interval = setInterval(this.timer, this.props.timeout);

    this.setState({
      interval: interval,
    });
  }

  timer = () => {
    let index = (this.state.activeIndex + 1) % this.props.children.length;

    this.selectItem(index);
  }

  selectItem = (index) => {
    this.setState({
      activeIndex: index,
    });
  }

  generateContent = () => {
    const {children} = this.props;
    const {activeIndex} = this.state;

    let items = [];

    React.Children.map(children, (child, index) => {
      items.push(
        <div
          key={index}
          className={classnames(styles.CarouselItem, {
            [styles.active]: index === activeIndex,
          })}
        >
          {child}
        </div>,
      );
    });

    return items;
  }

  generateIndicators = () => {
    const {activeIndex} = this.state;
    const {children} = this.props;

    let items = [];

    children.forEach((child, index) => {
      items.push(
        <Indicator
          key={index}
          active={index === activeIndex}
          index={index}
          onClick={this.selectItem}
        />,
      );
    });

    return items;
  }

  onPrevButton = () => {
    let index = this.state.activeIndex;
    let length = this.props.children.length;

    if (index < 1) {
      index = length;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  onNextButton = () => {
    let index = this.state.activeIndex;
    let length = this.props.children.length - 1;

    if (index === length) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const {controlsOnCenter, hideControls, hideIndicators} = this.props;

    return (
      <div className={styles.Carousel}>
        <Swipeable
          onSwipeLeft={this.onPrevButton}
          onSwipeRight={this.onNextButton}
        >
          <div className={styles.inner}>{this.generateContent()}</div>
        </Swipeable>

        <div
          className={classnames(styles.Indicators, {
            [styles.hide]: hideIndicators,
          })}
        >
          {this.generateIndicators()}
        </div>

        <PrevButton
          center={controlsOnCenter}
          onClick={this.onPrevButton}
          hide={hideControls}
        />
        <NextButton
          center={controlsOnCenter}
          onClick={this.onNextButton}
          hide={hideControls}
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
  controlsOnCenter: PropTypes.bool,
  hideControls: PropTypes.bool,
  hideIndicators: PropTypes.bool,
};

Carousel.defaultProps = {
  timeout: 5000,
  hideIndicators: false,
  controlsOnCenter: false,
  hideControls: false,
};

export default Carousel;
