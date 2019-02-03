import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CarouselItem.css';

const CarouselItem = (props) => {
  const {artist, grid} = props;

  return (
    <div
      className={classnames('carousel-item', {
        'grid-item': grid,
      })}
    >
      <strong>{artist.name}</strong>
      <p>
        ({artist.born} - {artist.died})
      </p>
    </div>
  );
};

CarouselItem.propTypes = {
  artist: PropTypes.object.isRequired,
  grid: PropTypes.bool,
};

CarouselItem.defaultProps = {
  grid: false,
};

export default CarouselItem;
