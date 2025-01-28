import React from "react";
import styled from "styled-components";
const Level = () => {
  const handleText = (e) => {
    const id = e.target.dataset.id;
    if (id) {
      const article = document.querySelector(`#${id}`);
      const article_containers = document.querySelectorAll(
        ".article_container "
      );
      const enroll_btn = document.querySelectorAll(".enrolled");
      const articles = document.querySelectorAll(".title_content");

      if (e.target.classList.contains("level_title")) {
        articles.forEach((all_articles) => {
          all_articles.classList.remove("line");

          e.target.parentElement.classList.add("line");
        });

        enroll_btn.forEach((btns) => {
          btns.classList.remove("active");

          e.target.nextElementSibling.classList.add("active");
        });
      }

      article_containers.forEach((container) => {
        container.classList.remove("active");
      });

      article.classList.add("active");
    }
  };
  return (
    <Wrapper>
      <div className="title_container" onClick={handleText}>
        <div className="title_content line" data-id="level1">
          <h2 className="level_title" data-id="level1">
            level 1
          </h2>
          <button className="enrolled active">enrolled</button>
        </div>

        <div className="title_content" data-id="level2">
          <h2 className="level_title" data-id="level2">
            level 2
          </h2>
          <button className="enrolled">enrolled</button>
        </div>

        <div className="title_content" data-id="level3">
          <h2 className="level_title" data-id="level3">
            level 3
          </h2>
          <button className="enrolled">enrolled</button>
        </div>

        <div className="title_content" data-id="level4">
          <h2 className="level_title" data-id="level4">
            level 4
          </h2>
          <button className="enrolled">enrolled</button>
        </div>
      </div>

      <div className="articles_container">
        <div className="article_container active" id="level1">
          <div className="article">
            <p>Duration: 1 Year(s)</p>
            <p> Start date: 8 January 2024</p>
            <p>Site: Miva Open University </p>
            <p> Study Mode: Full Time (Distance) </p>
            <p>Enrolled On: 30 January 2024</p>
          </div>
          <div className="proof_container">
            <button className="proof_btn">proof of enrollment</button>
            <h2 className="successful">Enrollment confirmed</h2>
          </div>
        </div>

        <div className="article_container" id="level2">
          <div className="article">
            <p>Duration: 2 Year(s)</p>
            <p> Start date: 8 January 2024</p>
            <p>Site: Miva Open University </p>
            <p> Study Mode: Full Time (Distance) </p>
            <p>Enrolled On: 30 January 2024</p>
          </div>
          <div className="proof_container">
            <button className="proof_btn">proof of enrollment</button>
            <h2 className="successful">Enrollment confirmed</h2>
          </div>
        </div>

        <div className="article_container" id="level3">
          <div className="article">
            <p>Duration: 3 Year(s)</p>
            <p> Start date: 8 January 2024</p>
            <p>Site: Miva Open University </p>
            <p> Study Mode: Full Time (Distance) </p>
            <p>Enrolled On: 30 January 2024</p>
          </div>
          <div className="proof_container">
            <button className="proof_btn">proof of enrollment</button>
            <h2 className="successful">Enrollment confirmed</h2>
          </div>
        </div>

        <div className="article_container" id="level4">
          <div className="article">
            <p>Duration: 4 Year(s)</p>
            <p> Start date: 8 January 2024</p>
            <p>Site: Miva Open University </p>
            <p> Study Mode: Full Time (Distance) </p>
            <p>Enrolled On: 30 January 2024</p>
          </div>
          <div className="proof_container">
            <button className="proof_btn">proof of enrollment</button>
            <h2 className="successful">Enrollment confirmed</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================= */
  /* Mobile View */
  gap: 1rem;
  display: flex;
  padding-bottom: 2rem;
  flex-direction: column;
  border-top: 2px solid var(--bg-black-color);
  border-bottom: 2px solid var(--bg-black-color);

  .title_container {
    display: flex;
    justify-content: space-between;
  }

  .title_content {
    gap: 0.5rem;
    display: flex;
    align-items: end;
    padding-block: 0.7rem;
  }

  .level_title {
    all: unset;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .enrolled {
    color: white;
    display: none;
    font-size: 0.6rem;
    border-radius: 5px;
    height: max-content;
    padding: 0.1rem 0.2rem;
    text-transform: capitalize;
    background-color: #06511c;
  }

  .article_container {
    gap: 1rem;
    display: none;
    padding: 1rem 0.5rem;
    padding-right: 0;
    color: black !important;
    background-color: var(--clr-darkgray);
  }

  .article {
    font-weight: 600;
    font-size: 0.6rem;
  }

  .proof_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .proof_btn {
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.65rem;
    border-radius: 10px;
    text-transform: capitalize;
    background-color: #c79f00;
  }

  .successful {
    display: none;
    font-weight: 800;
    padding: 0.5rem 0;
    border: 2px solid;
    font-size: 0.8rem;
    text-align: center;
    border-radius: 10px;
    background-color: black;
    color: var(--clr-lighter-green);
  }

  /* ========================================================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .level_title {
      font-size: 1.2rem;
    }

    .enrolled {
      font-size: 0.9rem;
    }

    .article_container {
      padding: 1rem 2rem;
      justify-content: space-between;
    }

    .article {
      font-size: 0.95rem;
    }

    .proof_btn {
      font-size: 1rem;
    }
  }

  .active {
    display: flex;
  }

  .line {
    border-bottom: 3px solid var(--bg-black-color);
  }
`;

export default Level;
