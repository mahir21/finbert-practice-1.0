// about.js

import React from 'react';
import styles from './css/about.module.css';
import member1 from './images/ss.jpg'; // Import image
import member2 from './images/ss.jpg'; // Import image

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum elit non eros pharetra gravida.</p>
      <div className={styles.teamMembers}>
        {/* Team member 1 */}
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member1} alt="Team Member 1" />
          <div className={styles.memberDetails}>
            <h3>John Doe</h3>
            <p>Frontend Developer</p>
            <p>Experience: 5 years</p>
            {/* Add more details if needed */}
          </div>
        </div>
        {/* Team member 2 */}
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member2} alt="Team Member 2" />
          <div className={styles.memberDetails}>
            <h3>Jane Smith</h3>
            <p>Backend Developer</p>
            <p>Experience: 3 years</p>
            {/* Add more details if needed */}
          </div>
        </div>
        {/* Add more team members */}
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member2} alt="Team Member 2" />
          <div className={styles.memberDetails}>
            <h3>Jane Smith</h3>
            <p>Backend Developer</p>
            <p>Experience: 3 years</p>
            {/* Add more details if needed */}
          </div>
        </div>
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member2} alt="Team Member 2" />
          <div className={styles.memberDetails}>
            <h3>Jane Smith</h3>
            <p>Backend Developer</p>
            <p>Experience: 3 years</p>
            {/* Add more details if needed */}
          </div>
        </div>
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member2} alt="Team Member 2" />
          <div className={styles.memberDetails}>
            <h3>Jane Smith</h3>
            <p>Backend Developer</p>
            <p>Experience: 3 years</p>
            {/* Add more details if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
