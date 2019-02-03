import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Carousel, GridCarousel} from 'react-swipeable-carousel';

import './App.css';

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

const App = () => {
  const trumpetArtists = [
    {
      name: 'Harry James',
      born: 'March 15, 1916',
      died: 'July 5, 1983',
    },
    {
      name: 'Chet Baker',
      born: 'December 23, 1929',
      died: 'May 13, 1988',
    },
    {
      name: 'Louis Armstrong',
      born: 'August 4, 1901',
      died: 'July 6, 1971',
    },
    {
      name: 'Miles Davis',
      born: 'May 26, 1926',
      died: 'September 28, 1991',
    },
    {
      name: 'Rafael Méndez',
      born: 'March 26, 1906',
      died: 'September 15, 1981',
    },
    {
      name: 'Dizzy Gillespie',
      born: 'October 21, 1917',
      died: 'January 6, 1993',
    },
    {
      name: 'Clifford Brown',
      born: 'October 30, 1930',
      died: 'June 26, 1956',
    },
    {
      name: 'Freddie Hubbard',
      born: 'April 7, 1938',
      died: 'December 29, 2008,',
    },
    {
      name: 'Lee Morgan',
      born: 'July 10, 1938',
      died: 'February 19, 1972',
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="section">
          <h2>Carousel</h2>
          <Carousel>
            {trumpetArtists.map((artist, index) => (
              <CarouselItem key={index} artist={artist} />
            ))}
          </Carousel>
        </div>
        <div className="section">
          <h2>Grid Carousel</h2>
          <GridCarousel>
            {trumpetArtists.map((artist, index) => (
              <CarouselItem key={index} artist={artist} grid={true} />
            ))}
          </GridCarousel>
        </div>
      </div>
    </div>
  );
};

export default App;
