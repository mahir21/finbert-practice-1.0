// about.js

import React from 'react';
import styles from './css/about.module.css';
import member1 from './images/sayem.jpg'; // Import image
import member2 from './images/mahir.jpeg';
import member3 from './images/rakei.jpeg';
import member4 from './images/asif.jpg';
import member5 from './images/Female.png';

// Import image

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
            <h3>Md A.I.Sayem</h3>
            <p>Id: 1911826042 </p>
            {/* Add more details if needed */}
          </div>
        </div>
        {/* Team member 2 */}
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member2} alt="Team Member 2" />
          <div className={styles.memberDetails}>
            <h3>Mahir Ayaan Begh Jeet</h3>
            <p>Id: 2013778642 </p>

            {/* Add more details if needed */}
          </div>
        </div>
        {/* Add more team members */}
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member3} alt="Team Member 2" />
          <div className={styles.memberDetails}>
            <h3>Rakei Matiul Haque</h3>
            <p>Id: 1813659642 </p>

            {/* Add more details if needed */}
          </div>
        </div>
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member4} alt="Team Member 2" />
          <div className={styles.memberDetails}>
            <h3>Asif Arman</h3>
            <p>Id: 1931245042 </p>

            {/* Add more details if needed */}
          </div>
        </div>
        <div className={styles.teamMember}>
          <img className={styles.memberImage} src={member5} alt="Team Member 2" />
          <div className={styles.memberDetails}>
            <h3>Sayma Akhter Snigdha</h3>
            <p>Id: 1620838042  </p>
            {/* Add more details if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
