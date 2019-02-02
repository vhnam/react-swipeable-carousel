import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import icoNext from '../../../assets/ic_caret_right.svg';

import styles from './NextButton.module.css';

const NextButton = (props) => {
  const {onClick, center, hide} = props;

  return (
    <button
      className={classnames(styles.NextButton, {
        [styles.center]: center,
        [styles.hide]: hide,
      })}
      type="button"
      onClick={onClick}
    >
      <img className={styles.Icon} src={icoNext} alt="Next" />
    </button>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  center: PropTypes.bool,
  hide: PropTypes.bool,
};

NextButton.defaultProps = {
  center: false,
  hide: false,
};

export default NextButton;
