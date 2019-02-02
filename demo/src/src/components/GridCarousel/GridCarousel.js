import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Indicator from '../Indicator';
import Swipeable from '../Swipeable';

import styles from './GridCarousel.module.css';

class GridCarousel extends Component {
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
  };

  selectItem = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  generateContent = () => {
    const {children} = this.props;
    const {activeIndex} = this.state;

    let items = [];

    React.Children.map(children, (child, index) => {
      items.push(
        <div
          key={index}
          className={classnames(styles.GridCarouselItem, {
            [styles.active]: index === activeIndex,
          })}
        >
          {React.cloneElement(child, {
            index: index,
            key: index,
            ...child.props,
          })}
        </div>,
      );
    });

    return items;
  };

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
  };

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
  };

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
  };

  render() {
    const {hideIndicators} = this.props;

    return (
      <div className={styles.GridCarousel}>
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
      </div>
    );
  }
}

GridCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
  hideIndicators: PropTypes.bool,
};

GridCarousel.defaultProps = {
  timeout: 5000,
  hideIndicators: false,
};

export default GridCarousel;
