import { useState } from 'react';
import SlideOne from '/assets/seventh.jpg';
import SlideTwo from '/assets/slide2.png';
import SlideThree from '/assets/slide3.png';
import Button from "./Button";

const slides = [
  { src: SlideOne, alt: 'Family Gathering' },
  { src: SlideTwo, alt: 'Special Events' },
  { src: SlideThree, alt: 'Social Events' },
];

interface SliderProps{
  handleBookingClick: () => void;
}

function Slider({handleBookingClick}:SliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index:number) => {
    setActiveSlide(index);
  };

  return (
    <div className="py-[160px] px-[165px] flex justify-between items-center">
      <img
        src={slides[activeSlide].src}
        alt={slides[activeSlide].alt}
        className="max-w-[540px]"
      />
      <div className="max-w-[445px]">
        <div className="mb-20">
          <h3 className="max-w-[445px] text-[48px] font-bold mb-5 text-secondary-EbonyClay leading-[1] tracking-[-0.5px]">
            {slides[activeSlide].alt}
          </h3>
          <p className="max-w-[445px] text-[20px] font-normal mb-[60px] text-secondary-EbonyClay leading-[1.5]">
            {activeSlide === 0
              ? "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
              : activeSlide === 1
              ? "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
              : "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."}
          </p>
          <Button dark={false} onClick={handleBookingClick}>BOOK A TABLE</Button>
        </div>

        <div className="flex flex-col items-start gap-3">
          <button
            className={`text-[#4c4c4c] text-[17px] font-semibold leading-[1.65] tracking-[2.5px] ${
              activeSlide === 0 ? '' : 'opacity-50'
            }`}
            onClick={() => handleSlideChange(0)}
          >
            FAMILY GATHERING
          </button>
          <button
            className={`text-[#4c4c4c] text-[17px] font-semibold leading-[1.65] tracking-[2.5px] ${
              activeSlide === 1 ? '' : 'opacity-50'
            }`}
            onClick={() => handleSlideChange(1)}
          >
            SPECIAL EVENTS
          </button>
          <button
            className={`text-[#4c4c4c] text-[17px] font-semibold leading-[1.65] tracking-[2.5px] ${
              activeSlide === 2 ? '' : 'opacity-50'
            }`}
            onClick={() => handleSlideChange(2)}
          >
            SOCIAL EVENTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
