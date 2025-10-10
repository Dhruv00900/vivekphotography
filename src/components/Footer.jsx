import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Background Shapes */}
      <div className="footer-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-logo">
            <h3>VivekPhotography</h3>
            <div className="logo-gradient"></div>
          </div>
          <p className="footer-description">
            Professional photography services that capture your most precious moments 
            with creativity and passion.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/vivek_patel_photography/" className="social-link">
              <span className="social-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABOFBMVEVHcExxF/13F/1zFf2AFv2MCu+iBOmyAuLEAd7SANraBMzwHpedI+XeANfmANHmAr+PF/6fD/vxAL7qArV7GP21FvnRVurnZ+P2Z9roQeDzGtXzB8v7AqvWiPn+7fn////7ftv/A7z0BKH3v/H+3fT+ruj+AJr/9/r/RcD/bMDKFff/Bo3iG+r8GrX/AIH+H5r/yeP+BHj/t9n/V5r+Am7+H37+BGT/ssX/Imz/RXv/ucz+e4z+JFT/XI3/MGL+LUf/u7f/yc7/Alr+OUf+MSz+QzT+R0T+iHD+SRj+VzH+WQX+AkL+c2L/0sT+aCX+cBL/7+j+aQL+eRv/oUX/fwL+iBD/wXz+jgD/3rr/1rn+dgz+nAP9FpT+lw7+qgH+tQD+vQD/w1f9kwf/xAD9PFn9ogj/ywD9uAfgLZLBAAAAaHRSTlMAW9H+////////xEsC///N////zFz/////////////////uP////7///////////7////////////////////////////////////////////////////////F/7VQ///+/87/vsj/uqL0GQwAAAHcSURBVHgBRMlFehwxEEDhV1VS04yZ7U04m+AmcBjfLLscJ4xLHyA0YGqSlJ7P9MT6BRC52EEQuDjlFITx2eWvXJsDQWYIKgJj4VQW5gBJAg75K5vTgZDTFUEu/kUEzqGaiC6DMBbhpqQyoyKTNYD1Hp+Ui6J0ZH1HhXNA0RfzyRIZl5WprroK3BZwwvx0aUGdB87HCIN5VBUVP9i468ZLxWLv+pg6vJmDaSiSW2eyIRNg84/HxfVJmTD3DxFWGmWjrosRpxMNGr3iIqYbG7IGK5lKvZE3jVuTynsDzHRoD3xpxaTQvIKumGBWgCouM9bPKEisJg0VTV4X0aBqQEuXQ2kGlmVmZCtgCoxBJfeAz0b8NQbWI7wOAKCZMgbn9E6tItG1HFTKRQ4jgSYpiiPu6BFJW1fW9J7oDFWWgpf0MH09YnB6yIEYnIJhLhqkpw3aC4OuUJ4QlDzX55/Um5m4Ue6dmXr59LwkBM0xy/ieVNV7zSSTZMU3fs8UNBomr+v3jQx5X1XmB7tdgnNu1JqDl+0nbnp+HpLp+WM5bB0mIMJFc/ouSgjd+U99O1qYONOhFEMonPcZCZ6eGp9eRcSwhWkSRCIxKnfeIMBh1WRcFOhTaENo/096OTA7AACDzKODDThakgAAAABJRU5ErkJggg=="/></span>
              Instagram
            </a>
            <a href="#" className="social-link">
              <span className="social-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEVHcEwHaf8MZP8HZv8IZ/8JZv8IZ/8MY/8AYf8AVv9Wjf+QtP/d6//////0+v/K2/8acv91gUzzAAAACHRSTlMAKoP/gyb4g+WSDyEAAACzSURBVHgBvdMJCoUwDEXRxtb+17n7X+0PkYJojIxeEKQ5CBbiONq8WiAn7dE/FHeZeyMWFC0QyQVv9nOXAyAledbBBSCX2riaoYJUejsqKkBpzQLI3QbrA32MkTWQhsx5CB5roAqYMjVA8jboDwApLcDdbxK5nesZN9DPoE5vg4EXUBQwam1S5fIVcHN6EZ3fpnoPWL8J4P2iPgWbDYKjaIFIvHoWOJYz6kCWV6Kgg414+Af2oxZ+AO2wzgAAAABJRU5ErkJggg=="/></span>
              Facebook
            </a>
            <a href="#" className="social-link">
              <span className="social-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEVHcEzz9PP3+Pfq7er19vb//v/8/PyltKrx+PKz5b1z04cwxlYMwUMAvCkAvjMAvzoDwUBGTUiH2JiY3aXX8Nxcznbo6ulJymfQ1NHJzcq9wr8gaKU6AAAAG3RSTlMAOlmJ2f//Lvj+/v///////xX+/v7+rP56aF7BK/qjAAABgklEQVR4AX2Sh5qEMAiEbYyJqXa993/QAza5z2v7b8UMMKDNN9qu77u2+Yd+oMLQ/3UMeoCfktHIVTs5791kRWvGb73BV6YQU2ZSDJPo28c5hzYk/0UKlghfipnzl+C/ERZWVMHA59H7nL8pVp6mUTqp7310Ln1TbESdCtgQJ0fO2J+KnNl4cbhGnx0b3aJ/EO1rkoPIZZ9WAuCeNhLnHGrRBJUDtH53YdQmyEaWL1Lh+yCSxEsoeQn4btJr27kZQYtclym279uSqqMI1lTntqpI6VlhVg9M9gArsg92Cal6mHlPdfx8Emg75S6YV9dNN3WAaskTsi0Zh6bEMUH2cLHLqvDsA4LsTjzeerNhqvscJpYwa5Q9gS0w/XODKbjF2jPK3PXJrIMWcooxiyGSAkKvHX+QHICPRhnYQ0mr5LADpYFuShunWIeJ2VI5Z25gM8TA7jFEfu9Whr2awoEKi8ymYmAYm4oBh8fHfA8vESRme5URxz0XN9cxMMelcYWDt3wCfLshX3540l4AAAAASUVORK5CYII="/></span>
              Whatsapp
            </a>
          
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Wedding Photography</a></li>
            <li><a href="#" className="footer-link">Portrait Sessions</a></li>
            <li><a href="#" className="footer-link">Event Coverage</a></li>
            <li><a href="#" className="footer-link">Commercial Photography</a></li>
            <li><a href="#" className="footer-link">Photo Editing</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>vghodasara97@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 81404 30305</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Vivek Photography, Rajkot City</span>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="newsletter">
            <h5 className="newsletter-title">Stay Updated</h5>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                <span>Subscribe</span>
                <div className="btn-hover-effect"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © 2025 VivekPhotograhy. All rights reserved.          Developed BY <a href="https://www.instagram.com/dhruv__009__/?__d=1">Dhruv Ranpariya.</a>
          </div>
          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <a href="#" className="legal-link">Cookies</a>
          </div>
        </div>
        
        {/* Scroll to Top */}
        <button 
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;