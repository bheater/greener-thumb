import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
  {
    src: 'https://images.unsplash.com/photo-1520178606913-118a6b3c31b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    altText: 'Desert image',
    caption: 'Desert Oasis'
  },
  {
    src: 'https://images.unsplash.com/photo-1484652545326-bf8ec420dc21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    altText: 'Tropical paradise image',
    caption: 'Tropical Paradise'
  },
  {
    src: 'https://images.unsplash.com/photo-1527945505182-b4c5cbc546a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    altText: 'Hydrangea image',
    caption: 'Delicate Florals'
  },
  {
    src: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    altText: 'Piburger See, Austria image',
    caption: 'Lush Landscapes'
  },
  {
    src: 'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    altText: 'Grand Canyon image',
    caption: 'The Grand Canyon'
  },
  {
    src: 'https://images.unsplash.com/photo-1540831409063-b311c6d4ae3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    altText: 'Sedona, Arizona image',
    caption: 'Sedona, Arizona'
  },
  {
    src: 'https://images.unsplash.com/photo-1506043718651-8ff9124fd9e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    altText: 'Zion National Park, United States image',
    caption: 'Zion National Park, United States'
  }
];
const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="img-responsive" src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel className="img-responsive"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;
