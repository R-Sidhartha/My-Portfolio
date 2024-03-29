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
                  <h4>Innovative Data Input with React and Tailwind CSS</h4>
                  <div className="task_details">
                    <li>
                      <span className="head">Achievement: </span>
                      <span className="details">
                        Innovated data input through React and Tailwind CSS.
                      </span>
                    </li>
                    <li>
                      <span className="head">Features:</span>
                      <ul className="nested-list">
                        <li>
                          Seamlessly handled diverse sources like files, text,
                          and QA for ChatBot training.
                        </li>
                        <li>
                          Implemented features such as character count
                          and drag-and-drop for PDFs.
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </div>
              <div className="contribution">
                <div className="horizontal-line"></div>
                <div>
                  <h4>Dynamic Custom Plugin Development:</h4>
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
                        Elevated WordPress UX with a dynamic Chat Cells Chatbot
                        plugin, delivering top-notch security and user control.
                      </span>
                    </li>
                    <li>
                      <span className="head">Features:</span>
                      <ul className="nested-list">
                        <li>
                          Implemented cutting-edge API key authentication.
                        </li>
                        <li>
                          Seamlessly embedded Chat Cells Chatbot into WordPress.
                        </li>
                        <li>
                          Empowered users for effortless customization,
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
                  <h4>User Authentication Page Development</h4>
                  <div className="task_details">
                    <li>
                      <span className="head">Achievement: </span>
                      <span className="details">
                        Developed a robust and secure user authentication page
                        using React.
                      </span>
                    </li>
                    <li>
                      <span className="head">Impact:</span>
                      <span className="details">
                        {" "}
                        Ensured seamless and secure access for authorized
                        personnel.
                      </span>
                    </li>
                  </div>
                </div>
              </div>
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
                          Developed an interactive test webpage using
                          React-record-webcam technology.
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
