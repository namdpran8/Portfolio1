import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience 
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack,AI & Software Developer | Personal & Open-Source Projects</h4>
                <h5></h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
            Built a real-time messaging app using the MERN stack.
            Developed a book reading web app with React & Node.js.
            Created an AI Study Buddy mobile app, planning expansion to web.
            Developed deepfake detection models using EfficientNet + MobileNetV3 and LSTM for voice deepfake detection. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Leader | Hackathon - Dark Mode Devs</h4>
                <h5></h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
            Led Dark Mode Devs, a cross-college hackathon team, to compete in hackathons.
            Managed development workflow, task delegation, and final project presentation
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering (Ongoing)</h4>
                <h5>2024 - 2028</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Currently pursuing my B.Tech in CSE from Sagar Institute of Research & Technology-Excellence (SIRT-E), Bhopal ,
             focusing on AI, machine learning, and software development. Passionate about building intelligent systems and innovative tech solutions. 🚀
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
