import { useState, useEffect } from "react";
import { LogoIcon } from "./../../assets/icons/LogoIcon";
import { LinkedInIcon } from "./../../assets/icons/LinkedInIcon";
import { TwitterIcon } from "./../../assets/icons/TwitterIcon";
import { MailIcon } from "./../../assets/icons/MailIcon";

import "./Footer.scss";

export const Footer = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1080);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1080);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer wrapper">
      {isSmall ? (
        <div className="container footer-content">
          <div className="footer-logo-section">
            <LogoIcon />

            <div className="footer-social-links">
                <a href="#">
                  <LinkedInIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <MailIcon />
                </a>
              </div>

          </div>
          <div className="footer-services-section">
            <h3>SERVICES</h3>
            <div className="footer_gradient-line" />

            <div className="footer-services-columns">
              <ul>
                <li>Graphic Design & Digital Illustration</li>
                <li>Influencer Campaigns</li>
                <li>Collaborations & Acquisition Marketing</li>
                <li>Alpha Calls</li>
                <li>PPC Marketing</li>
                <li>Strategy & Advisory</li>
              </ul>
              <ul>
                <li>Discord Growth</li>
                <li>Influencer Campaigns</li>
                <li>Twitter Space Packages & Hosting</li>
                <li>Development</li>
                <li>Graphic Design & Digital</li>
                <li>B2B & B2C Campaigns</li>
              </ul>
              
            </div>

            <div className="footer_text-section">
              <p>
                Building and growing communities is the foundation of Bluship.
                Each piece of our content has a purpose and is designed to
                convert curiosity into enthusiasm.
              </p>
              <p>
                Web3 is a curious space because there is no formal education for
                this industry. There is no course for curiosity, and that is the
                philosophy that we want to push forward.
              </p>
              <p>
                You have the opportunity to partner with a highly
                growth-obsessed team that prioritizes creativity and innovation.
                Your curiosity led you here. How far will it take you?
              </p>
            </div>

            <div className="footer-bottom">
              <div className="footer-legal-links">
                <a href="#">Privacy Policy</a>
                <div className="footer-legal-links_palka" />
                <a href="#">Terms and Conditions</a>
              </div>
              {/* <div className="footer-social-links">
                <a href="#">
                  <LinkedInIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <MailIcon />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="container footer-content">
          <div className="footer-logo-section">
            <LogoIcon />

            <div className="footer_text-section">
              <p>
                Building and growing communities is the foundation of Bluship.
                Each piece of our content has a purpose and is designed to
                convert curiosity into enthusiasm.
              </p>
              <p>
                Web3 is a curious space because there is no formal education for
                this industry. There is no course for curiosity, and that is the
                philosophy that we want to push forward.
              </p>
              <p>
                You have the opportunity to partner with a highly
                growth-obsessed team that prioritizes creativity and innovation.
                Your curiosity led you here. How far will it take you?
              </p>
            </div>
          </div>
          <div className="footer-services-section">
            <h3>SERVICES</h3>
            <div className="footer_gradient-line" />

            <div className="footer-services-columns">
              <ul>
                <li>Graphic Design & Digital Illustration</li>
                <li>Influencer Campaigns</li>
                <li>Collaborations & Acquisition Marketing</li>
                <li>Alpha Calls</li>
                <li>PPC Marketing</li>
                <li>Strategy & Advisory</li>
              </ul>
              <ul>
                <li>Discord Growth</li>
                <li>Influencer Campaigns</li>
                <li>Twitter Space Packages & Hosting</li>
                <li>Development</li>
                <li>Graphic Design & Digital</li>
                <li>B2B & B2C Campaigns</li>
              </ul>
            </div>

            <div className="footer-bottom">
              <div className="footer-legal-links">
                <a href="#">Privacy Policy</a>
                <div className="footer-legal-links_palka" />
                <a href="#">Terms and Conditions</a>
              </div>
              <div className="footer-social-links">
                <a href="#">
                  <LinkedInIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
