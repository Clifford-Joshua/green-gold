import moment from "moment";
import styled from "styled-components";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";

const getProfile = () => {
  let savedProfileImg = localStorage.getItem("userProfile");
  return savedProfileImg ? savedProfileImg : "";
};

const getName = () => {
  let Name = localStorage.getItem("CurrentUserName");

  return Name ? Name : "user001";
};

const ProfileNav = () => {
  const refContainer = useRef(null);
  const [username, setUserName] = useState(getName());
  const [userProfile, setUserProfile] = useState(getProfile());

  const handleFile = () => {
    refContainer.current.click();
  };

  useEffect(() => {
    const Name = localStorage.getItem("CurrentUserName");

    if (Name !== username) {
      setUserName(Name);
    }
    // eslint-disable-next-line
  }, [username]);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      if (
        fileName.endsWith(".jpg") ||
        fileName.endsWith(".jpeg") ||
        fileName.endsWith(".png")
      ) {
        const file_Reader = new FileReader();
        file_Reader.onload = () => {
          const gottenImage = file_Reader.result;
          setUserProfile(gottenImage);
          localStorage.setItem("userProfile", gottenImage);
        };
        file_Reader.readAsDataURL(file);
        toast.success("Profile image uploaded successfully!");
      } else {
        setUserProfile("");
        toast.error(
          "Invalid file selected, only .jpg, .jpeg, or .png allowed."
        );
      }
    }
  };

  return (
    <Wrapper>
      <h3 className="date">{moment().format("dddd Do MMMM , YYYY")}</h3>

      <div className="profile_details">
        <div className="profile_image_container">
          {userProfile ? (
            <div className="profile_img">
              <img
                src={userProfile}
                alt="profile_image"
                className="profile_image"
              />
              <div className="edit_container">
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  ref={refContainer}
                  className="open_file"
                  onChange={onFileChange}
                />
                <FaCamera onClick={handleFile} />
              </div>
            </div>
          ) : (
            <div className="profile_img">
              <FaUser className="user_icon" />
              <div className="edit_container">
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  ref={refContainer}
                  className="open_file"
                  onChange={onFileChange}
                />
                <FaCamera onClick={handleFile} />
              </div>
            </div>
          )}
        </div>
        <h2 className="profile_name">hello {username}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================================== */
  /* Mobile View */
  gap: 1rem;
  display: flex;
  align-items: center;
  color: var(--black-color);

  .date {
    width: 40%;
    font-weight: 800;
    font-size: 0.9rem;
  }

  .profile_details {
    gap: 1rem;
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    border-left: 2px solid var(--black-color);
  }

  .profile_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    object-position: 0% 0%;
  }

  .profile_img {
    width: 62px;
    height: 62px;
    color: white;
    display: flex;
    font-size: 1.5rem;
    position: relative;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: var(--bg-black-color);
    background-color: var(--black-color);
  }

  .profile_name {
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: capitalize;
  }

  .edit_container {
    right: 0;
    bottom: 0;
    color: white;
    display: flex;
    padding: 0.2rem;
    font-size: 1rem;
    border-radius: 5px;
    position: absolute;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        to bottom,
        #06511c,
        #06511dab,
        #06511d63,
        #947b00de,
        #947b00c6,
        #947b00
      ),
      #947b00;
  }

  .open_file {
    display: none;
  }

  /* ============================================================ */
  /* Ipad View */
  @media screen and (width >=764px) {
    .date {
      font-size: 1.1rem;
    }

    .profile_img {
      width: 80px;
      height: 80px;
    }

    .profile_name {
      font-size: 1.2rem;
    }

    .edit_container {
      font-size: 1.4rem;
    }
  }

  /* ============================================================ */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    justify-content: end;

    .date {
      display: flex;
      justify-content: end;
    }
  }
`;

export default ProfileNav;
