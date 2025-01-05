import React, { useState, useEffect, useRef } from "react";
import "./BannerSlider.css";

const BannerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = 5000; // 5 seconds
    const slidesRef = useRef(null);
    const intervalRef = useRef(null);

    const slides = [
        "./images/B1.png",
        "./images/B2.png",
        "./images/B3.png",
    ];

    const showSlide = (index) => {
        const slidesElement = slidesRef.current;
        if (slidesElement) {
            slidesElement.style.transform = `translateX(-${index * 100}%)`;
        }
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, slideInterval);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        showSlide(currentIndex);
    }, [currentIndex]);

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // Cleanup on unmount
    }, []);

    const handleRadioChange = (index) => {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
    };

    return (
        <div className="col-md-12 col-lg-12 ad-banner">
            <div className="banner-sliders">
                <div className="slidess" ref={slidesRef}>
                    {slides.map((slide, index) => (
                        <div className="slides" key={index}>
                            <img src={slide} alt={`Banner ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="radio-buttons">
                    {slides.map((_, index) => (
                        <input
                            key={index}
                            type="radio"
                            name="radio-button"
                            id={`radio${index}`}
                            checked={currentIndex === index}
                            onChange={() => handleRadioChange(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;
