import React from "react";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">

      <motion.img
        src="`/saandeepani/assets/saandeepanilogo.jpeg"
        alt="School Logo"
        className="school-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />


      <motion.h1
        className="SAANDEEPANI SCHOOL"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Tomorrow Begins Here.
      </motion.h1>

   
      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Excellence in education, empowering students to reach their full potential.
      </motion.p>
    </div>
  );
};

export default Home;
