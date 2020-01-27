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
    src: 'https://images.unsplash.com/photo-1520178606913-118a6b3c31b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    altText: 'Slide 1',
    caption: 'Desert Oasis'
  },
  {
    src: 'https://images.unsplash.com/photo-1484652545326-bf8ec420dc21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    altText: 'Tropical paradise image',
    caption: 'Tropical Paradise'
  },
  {
    src: 'https://images.unsplash.com/photo-1527945505182-b4c5cbc546a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    altText: 'Hydrangea images',
    caption: 'Delicate Florals'
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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
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


// import React from 'react';
// import { UncontrolledCarousel } from 'reactstrap';
//
// const items = [
//   {
//     src: 'https://images.unsplash.com/photo-1520178606913-118a6b3c31b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     altText: 'desert-img',
//     caption: 'Slide 1',
//     header: 'Desert Oasis',
//     key: '1'
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1484652545326-bf8ec420dc21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
//     altText: 'tropical-img',
//     caption: 'Slide 2',
//     header: 'Tropical Paradise',
//     key: '2'
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1527945505182-b4c5cbc546a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//     header: 'Slide 3 Header',
//     key: '3'
//   }
// ];
//
// const ExampleCarousel = () => <UncontrolledCarousel items={items} />;
//
// export default ExampleCarousel;
