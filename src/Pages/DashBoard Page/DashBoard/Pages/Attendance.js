import React from "react";
import ScrollToTop from "../../../../ScrollToTop";
import styled from "styled-components";
const Attendance = () => {
  return (
    <Wrapper>
      <ScrollToTop />

      <div className="attend_container">
        <h2 className="title">Student Attendance</h2>

        <div className="table_container">
          <table className="student">
            <tr>
              <th>student Name</th>
              <th>class</th>
              <th>date</th>
              <th>status</th>
            </tr>

            <tr>
              <td>John Doe</td>
              <td>Grade 10</td>
              <td>2025-01-12</td>
              <td>
                <button className="btn btn-outline-success">present</button>
              </td>
            </tr>

            <tr>
              <td>Jane Smith</td>
              <td>Grade 10</td>
              <td>2025-01-12</td>
              <td>
                <button className="btn btn-outline-danger">absent</button>
              </td>
            </tr>

            <tr>
              <td>Emily Johnson</td>
              <td>Grade 10</td>
              <td>2025-01-12</td>
              <td>
                <button className="btn btn-outline-success">present</button>
              </td>
            </tr>

            <tr>
              <td>Michael Brown</td>
              <td>Grade 10</td>
              <td>2025-01-12</td>
              <td>
                <button className="btn btn-outline-danger">absent</button>
              </td>
            </tr>

            <tr>
              <td>Sarah Wilson</td>
              <td>Grade 10</td>
              <td>2025-01-12</td>
              <td>
                <button className="btn btn-outline-success">present</button>
              </td>
            </tr>

            <tr>
              <td>David Lee</td>
              <td>Grade 10</td>
              <td>2025-01-12</td>
              <td>
                <button className="btn btn-outline-danger">absent</button>
              </td>
            </tr>

            <tr>
              <td>Laura Martinez</td>
              <td>Grade 10</td>
              <td>2025-01-12</td>
              <td>
                <button className="btn btn-outline-success">present</button>
              </td>
            </tr>

            <tr>
              <td>James Taylor</td>
              <td>Grade 10</td>
              <td>2025-01-12</td>
              <td>
                <button className="btn btn-outline-danger">absent</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ==================================================== */
  /* Mobile View */
  padding-block: 3rem;

  .attend_container {
    gap: 1rem;
    display: flex;
    padding: 1rem 0.7rem;
    flex-direction: column;
    color: var(--black-color);
    border: 2px solid var(--bg-black-color);
    box-shadow: 1px 1px 10px 6px var(--clr-darkgray);
  }

  .student {
    width: max-content;
    border-collapse: collapse;
  }

  .table_container {
    overflow-x: auto;
  }

  .student td,
  .student th {
    padding: 8px;
    font-size: 0.9rem;
    text-align: center;
    text-transform: capitalize;
    border: 2px solid var(--clr-charcoal-color);
  }

  .student td {
    font-size: 0.8rem;
    padding: 8px 1.8rem;
  }

  .student tr:nth-child(odd) {
    color: var(--bg-black-color);
    background-color: var(--clr-darkgray);
  }

  .student th {
    color: white;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--clr-darkgreen);
  }

  .btn {
    font-size: 0.8rem;
    text-transform: capitalize;
  }

  /* ==================================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .student {
      width: 100%;
    }

    .student th {
      font-size: 1.2rem;
    }

    :is(.student td, .btn) {
      font-size: 1rem;
    }

    .title {
      font-size: 1.4rem;
    }
  }
`;

export default Attendance;
