import React from "react";
import "./WorkExperience.css"; // Create a separate CSS file for styling

const WorkExperience = () => {
  return (
    <section className="experience-container">
      <h5>Work Experience</h5>
      <h2>Internships</h2>
      <div className="container workexperience_container">
        <div className="company-details">
          <h3>Frontend Developer Internship</h3>
          <p>Chatcells Technology</p>
        </div>
        <div className="work-details">
          <div className="lines">
            <div className="left-horizontal-lines">
              <div className="contribution">
                <div className="horizontal-line"></div>
                <div>
                  <h4>ADVANCED AI-POWERED CHATBOT PLATFORM ECOSYSTEM DEVELOPMENT</h4>
                  <div className="task_details">
                    <li>
                      <span className="head">Achievement: </span>
                      <span className="details">
                      Spearheaded the creation of an innovative chatbot generator platform, transforming user interaction and engagement dynamics.
                      </span>
                    </li>
                    <li>
                      <span className="head">Impact: </span>
                      <span className="details">
                      Enhanced user empowerment: Introduced customizable UI options, conversation tracking, and seamless website integration, facilitating effortless chatbot deployment.
                      </span>
                    </li>
                    <li>
                      <span className="head">Features:</span>
                      <ul className="nested-list">
                        <li>
                        Seamless React and Tailwind CSS integration for scalable UI components.
                        </li>
                        <li>
                        Robust user <strong className="highlights">authentication</strong> system with signup, login, and password recovery functionalities.
                        </li>
                        <li>
                        Empowered users to <strong className="highlights">retrain</strong> chatbots and tailor their <strong className="highlights">appearance</strong> and behavior effortlessly.
                        </li>
                        <li>
                        Facilitated easy <strong className="highlights">integration</strong> with external data sources, enabling dynamic chatbot interactions.
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </div>
              <div className="contribution">
                <div className="horizontal-line"></div>
                <div>
                  <h4>Dynamic WORDPRESS Plugin Development:</h4>
                  <div className="task_details">
                    <li>
                      <span className="head">Achievement: </span>
                      <span className="details">
                        Engineered a dynamic custom Plugin in PHP, HTML, CSS,
                        and JS.
                      </span>
                    </li>
                    <li>
                      <span className="head">Impact:</span>
                      <span className="details">
                        {" "}
                        Elevated WordPress UX with a dynamic ChatCells Chatbot
                        plugin, delivering top-notch security and user control.
                      </span>
                    </li>
                    <li>
                      <span className="head">Features:</span>
                      <ul className="nested-list">
                        <li>
                          Implemented cutting-edge <strong className="highlights">API key authentication</strong>.
                        </li>
                        <li>
                          Seamlessly embedded ChatCells Chatbot into WordPress.
                        </li>
                        <li>
                          Empowered users for effortless <strong className="highlights">customization</strong>,
                          unparalleled control, and experience.
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="right-horizontal-lines">
              <div className="right-contribution">
                <div className="horizontal-line"></div>
                <div>
                  <h4>Work_Force_Of_Future Website Development:</h4>
                  <div className="task_details">
                    <li>
                      <span className="head">Achievement: </span>
                      <span className="details">
                        Designed and developed a cutting-edge workforcefuture
                        website, revolutionizing the job application process.
                      </span>
                    </li>
                    <li>
                      <span className="head">Impact:</span>
                      <span className="details">
                        {" "}
                        Revolutionized user experience: Integrated resume
                        analysis, personalized job recommendations, and a smart
                        test feature for efficient and engaging job exploration.
                      </span>
                    </li>
                    <li>
                      <span className="head">Features:</span>
                      <ul className="nested-list">
                        <li>Secure upload of one PDF resume at a time.</li>
                        <li>
                          API-driven resume analysis with detailed insights.
                        </li>
                        <li>
                          Displayed related job highlights and detailed job
                          information.
                        </li>
                        <li>
                          Developed an <strong className="highlights">interactive test</strong> webpage using
                          <strong className="highlights"> React-record-webcam technology</strong>.
                        </li>
                        <li>
                          Enabled users to answer questions in front of the
                          camera, creating a unique and engaging assessment
                          process.
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
