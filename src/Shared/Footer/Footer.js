import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../../Assets/GG-Logo.png";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPlay, FaPaperPlane, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer_main_container">
        <div className="footer_header">
          <div className="footer_container">
            <div className="footer_image_container">
              <img src={Logo} alt="Logo" className="footer_img" />
            </div>

            <p className="text">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>

            <div className="footer_header_icon_container">
              <div className="footer_header_details">
                <div className="footer_header_icon header_icon">
                  <FaPhoneAlt />
                </div>
                <p className="text">+234 816 548 7439</p>
              </div>

              <div className="footer_header_details">
                <div className="footer_header_icon header_icon">
                  <FaLocationDot />
                </div>
                <p className="text">
                  Location: No 7 bus stop Old Road Nekede, Owerri Imo state
                </p>
              </div>

              <div className="footer_header_details">
                <div className="footer_header_icon header_icon">
                  <FaEnvelope />
                </div>
                <a href="mailto:cliffordgb45@gmail.com" className="text">
                  Tekkbridgeco@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="footer_header_icon_container">
            <h2 className="footer_header_title">Quick Links</h2>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">About Us</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">FAQ's</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Testimonials</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Terms Of Service</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Privacy policy</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Update News</p>
            </div>
          </div>

          <div className="footer_header_icon_container">
            <h2 className="footer_header_title">Our Campus</h2>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Campus Safety</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Student Activities</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Academic Department</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Planning & Administration</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Office Of The Chancellor</p>
            </div>

            <div className="footer_header_details">
              <div className="footer_header_icon">
                <FaPlay />
              </div>
              <p className="text">Facility Services</p>
            </div>
          </div>

          <div className="footer_header_icon_container">
            <h2 className="footer_header_title">Newsletter</h2>

            <p className="text">
              Subscribe Our Newsletter To Get Latest Update And News
            </p>

            <form
              className="form"
              action="https://formspree.io/f/xqaebwra"
              method="POST"
            >
              <input
                type="text"
                name="email"
                className="email"
                placeholder="Your Email"
              />
              <button className="submit_btn" type="submit">
                <FaPaperPlane />
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <p className="copy_right">
            ©Copyright 2025 Eduka All Rights Reserved.
          </p>

          <div className="icon_container">
            <a href="https://web.facebook.com/" className="social_icon">
              <FaFacebookF />
            </a>

            <a href="https://www.linkedin.com/" className="social_icon">
              <FaLinkedinIn />
            </a>

            <a href="https://www.youtube.com/" className="social_icon">
              <BsWhatsapp />
            </a>

            <a href="https://web.whatsapp.com/" className="social_icon">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ================================================================= */
  /* Mobile View */
  display: flex;
  padding-block: 2rem;
  align-items: center;
  justify-content: center;
  background-color: #012758;

  .footer_main_container {
    gap: 1rem;
    width: 94%;
    color: white;
    display: flex;
    flex-direction: column;
  }

  .footer_header {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .footer_container {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .footer_header_title {
    font-weight: 800;
    font-size: 1.3rem;
    width: max-content;
    padding-block: 0.5rem;
    text-transform: uppercase;
    border-bottom: 3px dotted var(--clr-light-orange);
  }

  .footer_image_container {
    width: 150px;
    height: 80px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    background-color: white;
  }

  .footer_img {
    width: 80%;
    height: 95%;
    object-fit: contain;
  }

  .text {
    font-size: 1rem;
    font-weight: 500;
  }

  .footer_header_icon_container {
    gap: 1.2rem;
    display: flex;
    flex-direction: column;
  }

  .footer_header_details {
    gap: 1.2rem;
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
    align-items: center;
    transition: var(--transitions);
  }

  .footer_header_icon {
    font-size: 1.1rem;
  }

  .header_icon {
    font-size: 1.4rem;
    border-radius: 10px;
    padding: 0.7rem 1rem;
    border-bottom-left-radius: 0;
    background-color: var(--clr-lighter-green);
  }
  .footer_header_details:hover {
    color: var(--clr-light-orange);
  }

  .form {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .email {
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 10px;
  }

  .submit_btn {
    gap: 0.6rem;
    padding: 1rem;
    display: flex;
    font-weight: 600;
    font-size: 1.1rem;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    color: var(--bg-black-color);
    background-color: var(--clr-lighter-green);
  }

  .submit_btn:hover {
    background-color: var(--clr-light-orange);
  }

  .footer {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .copy_right {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .icon_container {
    gap: 1rem;
    display: flex;
  }

  .social_icon {
    color: white;
    display: block;
    font-size: 1.1rem;
    width: max-content;
    border-radius: 10px;
    padding: 0.6rem 1rem;
    border-bottom-left-radius: 0;
    transition: var(--transitions);
    background-color: var(--clr-light-orange);
  }

  .social_icon:hover {
    color: black;
    background-color: white;
  }

  @media screen and (width >=764px) {
    .footer_image_container {
      width: 200px;
    }

    .text {
      font-size: 1.1rem;
    }

    .footer {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default Footer;
