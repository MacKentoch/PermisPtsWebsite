import React, { PropTypes } from 'react';
import {
  Carousel,
  CarouselItem
 }                          from 'react-bootstrap';

const ImagesCarousel = ({ carousel }) => {
  return (
    <Carousel
      id="imageCarousel"
      nextIcon={null}
      prevIcon={null}
      pauseOnHover={false} >
      {
        carousel.map(
          (image, index) => {
            return (
              <CarouselItem
                index={index}
                key={'imgCarousel_' + index + '_container'}>
                <img
                  key={'imgCarousel_' + index}
                  src={image.link}
                  alt={image.alt}
                  className="img-responsive center-block"
                  width={1200}
                  height={642}
                  alt={image.name}
                />
                {
                  image.caption &&
                  <Carousel.Caption>
                    <h2>
                      {image.caption}
                    </h2>
                  </Carousel.Caption>
                }
              </CarouselItem>
            );
          }
        )
      }
    </Carousel>
  );
};

ImagesCarousel.propTypes = {
  carousel: PropTypes.arrayOf(PropTypes.shape({
    link:   PropTypes.string.isRequired,
    alt:    PropTypes.string.isRequired,
    name:   PropTypes.string.isRequired,
    caption: PropTypes.string
  })).isRequired
};

export default ImagesCarousel;
