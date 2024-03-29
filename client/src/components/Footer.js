import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        &copy; {new Date().getFullYear()} Driver Crash Course
        <br />
        Image generated by OpenAI's DALL-E
      </div>
    </footer>
  );
};

export default Footer;
