import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { Data } from "../../../../Utils/Data";
const Teacher = () => {
  const { TeachersApi } = Data;

  const handleShare = () => {
    const Link = window.location.href;

    window.navigator.clipboard
      .writeText(Link)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <Wrapper>
      {TeachersApi.map(({ name, profession, image, icon, links }, index) => {
        return (
          <div className="container" key={index}>
            <div className="image_container">
              <img src={image} alt="teacher_image" className="image" />
              <div className="social_icons_container">
                {icon.map((item, index) => {
                  return (
                    <Link to={links[index]} className="icon" key={index}>
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="details">
              <div className="d-flex flex-column row-gap-2">
                <h3 className="name">{name}</h3>
                <p className="profession">{profession}</p>
              </div>
              <div className="icon share_icon" onClick={handleShare}>
                <FaShareAlt className="share" />
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================================== */
  /* Mobile View */
  gap: 2rem;
  display: grid;
  padding-block: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .container {
    gap: 1rem;
    width: 94%;
    display: flex;
    padding: 1.3rem;
    cursor: pointer;
    border-radius: 50px;
    flex-direction: column;
    border-bottom-left-radius: 0;
    box-shadow: 1px 1px 15px 8px var(--clr-darkgray);
  }
  .image_container {
    width: 100%;
    height: 45vh;
    overflow: hidden;
    position: relative;
    border-radius: 35px;
    border-bottom-left-radius: 0;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
  }

  .social_icons_container {
    top: 5%;
    gap: 1rem;
    right: 5%;
    display: flex;
    position: absolute;
    flex-direction: column;
    transform: translate(150%);
    transition: var(--transitions);
  }

  .icon {
    width: 45px;
    height: 45px;
    color: white;
    display: flex;
    font-size: 1.2rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0;
    transition: var(--transitions);
    background-color: var(--clr-lighter-green);
  }

  .details {
    display: flex;
    margin-top: auto;
    align-items: center;
    justify-content: space-between;
  }

  .name {
    font-weight: 900;
    font-size: 1.2rem;
    color: var(--black-color);
  }

  .profession {
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--clr-lighter-green);
  }

  .share_icon {
    font-size: 1.5rem;
    background-color: var(--clr-lighter-green);
  }

  :is(.container):hover .icon {
    background-color: var(--clr-light-orange);
  }

  :is(.container):hover .social_icons_container {
    transform: translate(0);
  }
`;

export default Teacher;
