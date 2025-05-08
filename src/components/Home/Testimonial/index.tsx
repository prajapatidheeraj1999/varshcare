import React, { useEffect, useRef } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { testimonialsData } from './data';

interface TestimonialProps {
  testimonials: {
    id: number;
    name: string;
    text: string;
    image: string;
    rating: number; // Added rating property
  }[];
}

const Testimonial= () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollInterval = 20000; // 30 seconds

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scroll, scrollInterval);

    return () => clearInterval(interval);
  }, [scrollInterval]);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array.from({ length: emptyStars }, (_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className=" w-[80%] m-auto flex items-center justify-center  my-5">
    <div className="relative overflow-hidden">
      <div ref={containerRef} className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="flex-none w-80 snap-start p-4 bg-white shadow-lg rounded-lg">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-lg font-bold text-center mt-2">{testimonial.name}</h3>
            <div className="flex justify-center mt-2">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-sm text-center mt-1">{testimonial.text}</p>
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
