import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Indicator.module.css';

class Indicator extends Component {
  onClick = () => {
    const {index, onClick} = this.props;

    onClick(index);
  };

  render() {
    const {active} = this.props;

    return (
      <li
        className={classnames(styles.Indicator, {
          [styles.active]: active,
        })}
        onClick={this.onClick}
      >
        &nbsp;
      </li>
    );
  }
}

Indicator.propTypes = {
  index: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Indicator.defaultProps = {
  active: false,
};

export default Indicator;
