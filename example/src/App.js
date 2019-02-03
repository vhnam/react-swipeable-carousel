import React from 'react';
import {Carousel, GridCarousel} from 'react-swipeable-carousel';

import CarouselItem from './components/CarouselItem';

import Store from './utils/store';

import './App.css';

const App = () => (
  <div className="App">
    <div className="container">
      <div className="section">
        <h2>Carousel</h2>
        <Carousel>
          {Store.trumpetArtists.map((artist, index) => (
            <CarouselItem key={index} artist={artist} />
          ))}
        </Carousel>
      </div>
      <div className="section">
        <h2>Grid Carousel</h2>
        <GridCarousel>
          {Store.trumpetArtists.map((artist, index) => (
            <CarouselItem key={index} artist={artist} grid={true} />
          ))}
        </GridCarousel>
      </div>
    </div>
  </div>
);

export default App;
