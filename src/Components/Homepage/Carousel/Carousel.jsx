import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import CSS

const images = [
  "/assets/image1.jpg", // Replace with actual image paths
  "/assets/image2.jpg",
  "/assets/image3.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <button className="prev" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>&#10094;</button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button className="next" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>&#10095;</button>
    </div>
  );
};

export default Carousel;
