# react-swipeable-carousel

React Swipeable Carousel

[![License][license-badge]][license]

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Carousel](#carousel)
  - [Grid Carousel](#grid-carousel)
- [Example](#example)
  - [Carousel](#carousel-1)
  - [Grid Carousel](#grid-carousel-1)
- [Contributing](#contributing)
- [License](#license)

## Installation

Using [npm](https://www.npmjs.com/package/react-swipeable-carousel):

```bash
$ npm install react-swipeable-carousel --save
```

## Usage

### Carousel

| Property         | Type    | Description                          | Default   |
| ---------------- | ------- | ------------------------------------ | --------- |
| timeout          | number  | Interval                             | 5 seconds |
| controlsOnCenter | boolean | Centered left/right arrows on mobile | false     |
| hideControls     | boolean | Hide left/right arrows               | false     |
| hideIndicators   | boolean | Hide indicators                      | false     |

### GridCarousel

| Property       | Type    | Description     | Default   |
| -------------- | ------- | --------------- | --------- |
| timeout        | number  | Interval        | 5 seconds |
| hideIndicators | boolean | Hide indicators | false     |

## Example

First, you create your customize carousel item.

### Carousel Item

```JS
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
```

### Carousel

```JS
import {Carousel} from 'react-swipeable-carousel';

<Carousel>
  {Store.trumpetArtists.map((artist, index) => (
    <CarouselItem key={index} artist={artist} />
  ))}
</Carousel>
```

### Grid Carousel

```JS
import {GridCarousel} from 'react-swipeable-carousel';

<GridCarousel>
  {Store.trumpetArtists.map((artist, index) => (
    <CarouselItem key={index} artist={artist} grid={true} />
  ))}
</GridCarousel>
```

## Contributing

Contributions are definitely welcome! Check out the [issues](https://github.com/vhnam/react-swipeable-carousel/issues) for ideas on where you can contribute.

## License

MIT © Nam Vo

[license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000
[license]: https://github.com/vhnam/react-swipeable-carousel/blob/master/LICENSE
