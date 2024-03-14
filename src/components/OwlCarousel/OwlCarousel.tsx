"use client"
import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./OwlCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./owlCarouselStyle.css";
import { OwlCarouselSlide } from "./OwlCarouselSlide";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const OwlCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla mt-2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((content, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <OwlCarouselSlide content={content}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="embla__dots mt-[-30px] z-10">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OwlCarousel;
