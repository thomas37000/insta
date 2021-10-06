import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardText,
} from 'reactstrap';
import CardSlider from './Card/CardSlider';
import CardTextSlider from './Card/CardText';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/thomas37000/insta/master/fake-api.json'
      //'https://api.thedogapi.com/v1/breeds'
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log('useEffect', data);
        setItems(data.instagram);
        // setItems(data);
      });
  }, []);

  // const fetchApiSlider =
  //   items.length > 0 &&
  //   items.map((insta, dog, i) => {
  //     return <CardSlider key={i} {...insta} />;
  //     //  return <CardSlider key={i} {...items} />;
  //   });

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.img}
      >
        <div className="card-slider-container">
          <CardSlider key={i} {...item} />
          {/* <CardTextSlider /> */}
        </div>
        {/* <img src={item.img} alt={item.name} /> */}
        {/* <img src={item.image.url} alt={item.name} className="cards-image" /> */}
        <CarouselCaption captionText={item.name} captionHeader={item.name} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        style={{backgroundColor:'red'}}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        style={{backgroundColor:'red'}}
      />
    </Carousel>
  );
};

export default Slider;
