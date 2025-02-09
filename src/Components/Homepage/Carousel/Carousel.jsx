import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "https://source.unsplash.com/random/800x400?nature",
  "https://source.unsplash.com/random/800x400?water",
  "https://source.unsplash.com/random/800x400?mountain",
  "https://source.unsplash.com/random/800x400?forest"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt="carousel slide" className="carousel-image" />
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
