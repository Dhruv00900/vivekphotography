import React from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/SocialIcons.css";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://wa.me/918140430305"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.instagram.com/vivek_patel_photography/"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit Instagram"
      >
        <FaInstagram />
      </a>
      {/* <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit YouTube"
      >
        <FaYoutube />
      </a> */}
    </div>
  );
}

export default SocialIcons;
