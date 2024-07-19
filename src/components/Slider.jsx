import React, { useEffect, useCallback } from "react";
import '../components/Slider.css';
import useEmblaCarousel from 'embla-carousel-react';
import odpng from "../assets/Rectangle3.png";
import odpng1 from "../assets/Rectangle1.png";
import odpng2 from "../assets/Rectangle2.png";
import odpng3 from "../assets/OD-pic1.jpg";
import odpng4 from "../assets/OD-pic2.jpg";
import odpng5 from "../assets/OD-pic3.jpg";
import odpng6 from "../assets/OD-pic4.jpg";
import odpng7 from "../assets/OD-pic5.jpg";
import odpng8 from "../assets/OD-pic6.jpg";
import odpng9 from "../assets/OD-pic7.jpg";

const images = [
  odpng,
  odpng1,
  odpng2,
  odpng3,
  odpng4,
  odpng5,
  odpng6,
  odpng7,
  odpng8,
  odpng9,
];

function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="cursor-grab embla__slide__img" />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__buttons">
        <button onClick={scrollPrev} className="embla__button embla__button--prev">
          &#8249;
        </button>
        <button onClick={scrollNext} className="embla__button embla__button--next">
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Slider;
