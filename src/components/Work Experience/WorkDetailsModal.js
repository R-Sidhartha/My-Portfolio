import React, { useRef, useEffect } from "react";
import Slider from "react-slick"; // Import react-slick
import "./WorkDetailsModal.css";
import PropTypes from "prop-types";
const WorkDetailsModal = ({
  title,
  company,
  date,
  details,
  images,
  closeModal,
}) => {
  const featureRef = useRef(null);

  // Scroll reveal logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const features = featureRef.current.querySelectorAll(".feature-point");
    features.forEach((feature) => observer.observe(feature));

    return () => observer.disconnect();
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="modal-overlay " onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          ✖
        </button>
        <h2 className="modal-title">{title}</h2>
        <div className="details">
          <h4 className="modal-company">{company}</h4>
          <p className="modal-date">({date})</p>
        </div>
        {/* Carousel */}
        <Slider {...settings} className="modal-carousel">
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
        <div className="modal-details" ref={featureRef}>
          {details?.map((point, index) => (
            <div key={index} className="feature-point">
              <div>
                <h4>{point.heading}</h4>
                <div className="task_details">
                  <li className="key_points">
                    <span className="head">Achievement: </span>
                    <span className="point">{point.Achievement}</span>
                  </li>
                  <li className="key_points">
                    <span className="head">Impact: </span>
                    <span className="point">{point.Impact}</span>
                  </li>
                  <li className="key_points">
                    <span className="head">Features:</span>
                    <ul className="nested-list">
                      {point.Features?.map((feature, index) => (
                        <li key={index} className="point">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </li>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

WorkDetailsModal.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        Achievement: PropTypes.string.isRequired,
        Impact: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    closeModal: PropTypes.func.isRequired,
  };

export default WorkDetailsModal;
