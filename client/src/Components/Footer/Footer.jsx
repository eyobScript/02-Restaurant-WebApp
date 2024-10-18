import React from 'react';
import classes from './footer.module.css'; // Assuming you have this CSS module
import './footer.css';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AddLocationIcon from '@mui/icons-material/AddLocation';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact">
          <div className="contact-item">
            <i className="fa fa-phone">
              <PhoneInTalkIcon fontSize="large" /> {/* Increased icon size */}
            </i>
            <span>+2519 606 3038</span>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope">
              <AlternateEmailIcon fontSize="large" /> {/* Increased icon size */}
            </i>
            <span>info@email.com</span>
          </div>
          <div className="contact-item">
            <i className="fa fa-map-marker">
              <AddLocationIcon fontSize="large" /> {/* Increased icon size */}
            </i>
            <span>Addis Ababa Bole</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="#">Our story</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Our services</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column subscribe">
          <h4>Subscribe</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter email address" className="email-input" />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
          <p>Get digital marketing updates in your mailbox</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 All rights reserved. | This template is made with <i className="fa fa-heart"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib.com</a></p>
        {/* <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
