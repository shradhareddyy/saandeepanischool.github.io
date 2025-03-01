import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Sandeepani School</h1>

    
      <motion.div 
        className="values-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>We Nurture Excellence</h2>
        <p>
          At Sandeepani School, we believe that every child is unique and deserves the best environment to learn, grow, and succeed.  
          Our student-centered approach fosters curiosity, creativity, and confidence, ensuring that children thrive academically and personally.  
        </p>

        <p>
          We prioritize holistic development, focusing on not just academics, but also character building, leadership, and emotional well-being.  
          With a blend of modern learning techniques and strong moral values, we prepare students for a bright future.  
        </p>
      </motion.div>


      <div className="leadership-section">
        <h2>Meet Our Founders</h2>


        <motion.div 
          className="leader-card"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <img src="/assets/principal.jpg" alt="Principal" className="leader-image"/> */}
          <div className="leader-info">
            <h3>Mr.Raghu Ram Reddy Prodduturi</h3>
            <p>🎓 A visionary educator with 25+ years of experience, dedicated to shaping young minds with wisdom and compassion.</p>
          </div>
        </motion.div>


        <motion.div 
          className="leader-card"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <img src="/assets/correspondent.jpg" alt="Correspondent" className="leader-image"/> */}
          <div className="leader-info">
            <h3>Mrs.Praveena Kumari Eega</h3>
            <p>🏅 An inspiring leader with 20 years of experience, ensuring that students receive the best education in a nurturing environment.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
