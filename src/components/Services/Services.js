import React from "react";
import { FaCheck } from "react-icons/fa6";
import "./Services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Responsive Design: Ensuring websites look and function well
                across various devices for a seamless user experience.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Intuitive Design: User-centric interfaces that require minimal
                effort, ensuring users find what they need effortlessly.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Performance Optimization: Enhancing page load times and overall
                performance through optimization techniques.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Cross-Browser Compatibility: Ensuring consistent functionality
                and appearance across different web browsers.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                SEO Optimization: I implement SEO best practices to ensure your
                website ranks higher on search engines, driving organic traffic.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Expert in building scalable and efficient server-side
                applications using Node.js, ensuring optimal performance and
                responsiveness.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                RESTful API Development: Designing and implementing RESTful APIs
                for communication between frontend and backend systems.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Skilled in integrating Next.js on the server side, optimizing
                performance and enabling server-side rendering for React
                applications.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Authentication and Authorization: Implementing secure user
                authentication and authorization systems.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                WebSockets Integration: Enabling real-time communication between
                the server and clients for interactive features.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Other Services</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                End-to-End Application Development: Offering comprehensive
                development services covering both frontend and backend
                technologies.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                React Native: Creating cross-platform mobile applications for
                both iOS and Android.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                WordPress Plugin Development: Creating custom plugins tailored
                to enhance functionality and meet specific needs within the
                WordPress ecosystem.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
              Stripe payment integration, custom contact forms for seamless communication solutions.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Cloud Database Management: Using cloud-based databases for
                efficient data storage and retrieval.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
