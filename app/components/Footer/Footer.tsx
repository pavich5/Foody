import styles from './Footer.module.css';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h4>Working Hours</h4>
          <ul>
            <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
            <li>Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a  rel="noopener noreferrer"><FacebookOutlined /></a>
            <a  rel="noopener noreferrer"><TwitterOutlined /></a>
            <a  rel="noopener noreferrer"><InstagramOutlined /></a>
            <a  rel="noopener noreferrer"><YoutubeOutlined /></a>
            <a  rel="noopener noreferrer"><LinkedinOutlined /></a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Join Our Mailing List</h4>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
        <p>©2024 Burgers by Pavic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
