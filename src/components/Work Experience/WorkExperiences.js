import React, { useState } from "react";
import "./WorkExperiences.css"; // Ensure this file contains the styles for the card and modal
import WorkDetailsModal from "./WorkDetailsModal";
import ChatCells1 from "./Pictures/RelatedPics/ChatcellsHomePage.png";
import ChatCells2 from "./Pictures/RelatedPics/ChatcellsDashBoard.png";
import ChatCells3 from "./Pictures/RelatedPics/WorkForceOfTheFuture.png";
import FlexiEle1 from "./Pictures/RelatedPics/FlexiEleHomePage.png";
import FlexiEle2 from "./Pictures/RelatedPics/FlexiEleProfileTab.png";
import FlexiEle3 from "./Pictures/RelatedPics/FlexiEleLMS.png";
import ChatcellsLogo from "./Pictures/Logos/chatcellsLogo.png"
import FlexiEleLogo from "./Pictures/Logos/Flexiele Logo.png"
const TimeLine3 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Data for work experience
  const workExperiences = [
    {
      id: 1,
      title: "Frontend Developer Internship",
      company: "Chatcells Technology",
      date: "Nov-23 to March-24",
      CompanyLogo: ChatcellsLogo,
      description: [
        {
          heading: "ADVANCED AI-POWERED CHATBOT PLATFORM ECOSYSTEM DEVELOPMENT",
          Achievement:"Spearheaded the creation of an innovative chatbot generator platform, transforming user interaction and engagement dynamics.",
          Impact:"Enhanced user empowerment: Introduced customizable UI options, conversation tracking, and seamless website integration, facilitating effortless chatbot deployment.",
          Features:["Seamless React and Tailwind CSS integration for scalable UI components.", "Robust user authentication system with signup, login, and password recovery functionalities.", "Empowered users to retrain chatbots and tailor their appearance and behavior effortlessly.", "Facilitated easy integration with external data sources, enabling dynamic chatbot interactions."],

        },
        {
          heading: "Work_Force_Of_Future Website Development",
          Achievement:"Designed and developed a cutting-edge workforcefuture website, revolutionizing the job application process.",
          Impact:"Revolutionized user experience: Integrated resume analysis, personalized job recommendations, and a smart test feature for efficient and engaging job exploration.",
          Features:["Secure upload of one PDF resume at a time.", "API-driven resume analysis with detailed insights.", "Displayed related job highlights and detailed job information.", "Developed an interactive test webpage using React-record-webcam technology.", "Enabled users to answer questions in front of the camera, creating a unique and engaging assessment process."],

        },
        {
          heading: "Dynamic WORDPRESS Plugin Development",
          Achievement:"Engineered a dynamic custom Plugin in PHP, HTML, CSS, and JS.",
          Impact:"Elevated WordPress UX with a dynamic ChatCells Chatbot plugin, delivering top-notch security and user control.",
          Features:["Implemented cutting-edge API key authentication.", "Seamlessly embedded ChatCells Chatbot into WordPress.", "Empowered users for effortless customization, unparalleled control, and experience."],

        }
      ],
      images: [ChatCells1, ChatCells2, ChatCells3]
    },
    {
      id: 2,
      title: "FullStack Developer Internship",
      company: "FlexiEle Consulting Services",
      date: "Aug-24 to Nov-24",
      CompanyLogo: FlexiEleLogo,
      description: [
        {
          heading: "ENHANCED DATA FLOW AND STRATEGIC UI DEVELOPMENT",
          Achievement:"Collaborated directly with founder Amithab Trivedi to streamline data management processes and optimize employee engagement through innovative solutions.",
          Impact:"Strategic Leadership: Delivered actionable insights to tackle startup challenges while seamlessly integrating backend fields to streamline employee notifications and automate letter workflows, driving operational efficiency and business alignment.",
          Features:["Designed and implemented user-centric UI components, ensuring intuitive navigation and elevated user experiences.", "Enhanced scalability and maintainability by employing modular architecture and dynamic integrations.","Enabled real-time communication through notifications and email features, keeping users informed and engaged in real-time.", "Created multi-language support for templates, allowing personalized user experiences based on language preferences.", "Improved data flow efficiency through backend optimizations, resulting in measurable time savings and increased productivity."],

        },
        {
          heading: "Image & Banner Upload with Compression & Cropping",
          Achievement:"Streamlined image and banner upload functionality, enhancing user experience. Reduced runtime load, making the process seamless, and received high praise from clients for the intuitive interface.",
          Impact:"Significantly improved user engagement and site traffic by providing an easy and efficient way to update profile pictures and banners. Users now enjoy a frictionless experience while personalizing their profiles.",
          Features:["Seamless image upload with automatic compression to optimize performance.", "Built-in cropping functionality, allowing users to adjust images with ease.", "Circular crop feature for profile pictures, enabling users to preview their image fit before finalizing.", "Image zoom and rotation options for precise adjustments, offering users full control over their image placement.", "Time-saving process that enhances overall user satisfaction and platform usability."]
        },
        {
          heading: "xAPI Integration in FlexiEle’s Learning & Resource Management System",
          Achievement:"Successfully integrated an xAPI-based course into FlexiEle’s Learning & Resource Management System, enhancing user engagement and progress tracking. The integration provided real-time insights into learner performance.",
          Impact:"Improved user engagement by offering detailed, actionable data on learner progress. Enhanced tracking capabilities, enabling educators and administrators to monitor progress and outcomes more effectively.",
          Features:["Seamless xAPI integration for real-time learner data collection.", "Automatic tracking of user actions, such as course completion, quiz results, and time spent.", "Detailed reports for administrators and educators to track individual and group progress.", "Boosted user interaction with the course through dynamic learning experiences and immediate feedback.", "Easy access to learning analytics, improving course outcomes and learner motivation."]
        }
      ],
      images: [FlexiEle1, FlexiEle2, FlexiEle3],
    },
    // Add more work experiences if needed
  ];

  // Function to open modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="experience-container">
      <h5>Work Experience</h5>
      <h2>Internships</h2>
      <div className="container workexperience_container">
        <div className="experience_card">
          <ul>
            {workExperiences.map((experience) => (
              <li
                key={experience.id}
                className="work-card"
                style={{
                  "--accent-color": experience.id === 1 ? "#41516C" : "#FBCA3E",
                }}
                onClick={() => openModal(experience)}
              >
                <div className="date">{experience.title}</div>
                <div className="title">
                  {experience.company}{" "}
                  <p style={{ fontSize: "0.68rem" }}>({experience.date})</p>
                </div>
                <div className="logo"><img src={experience.CompanyLogo} alt="logo" /></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {modalOpen && (
        <WorkDetailsModal
          title={modalContent.title}
          company={modalContent.company}
          date={modalContent.date}
          details={modalContent.description}
          closeModal={closeModal}
          images={modalContent.images}
        />
      )}
    </section>
  );
};

export default TimeLine3;
