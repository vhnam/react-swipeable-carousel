import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import icoPrev from '../../../assets/ic_caret_left.svg';

import styles from './PrevButton.module.css';

const PrevButton = (props) => {
  const {onClick, center, hide} = props;

  return (
    <button
      className={classnames(styles.PrevButton, {
        [styles.center]: center,
        [styles.hide]: hide,
      })}
      type="button"
      onClick={onClick}
    >
      <img className={styles.Icon} src={icoPrev} alt="Previous" />
    </button>
  );
};

PrevButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  center: PropTypes.bool,
  hide: PropTypes.bool,
};

PrevButton.defaultProps = {
  center: false,
  hide: false,
};

export default PrevButton;
