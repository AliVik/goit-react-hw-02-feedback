import styled from "styled-components";

export const SectionElem = styled.section`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 50vw;
  background-color: rgba(235, 235, 235, 0.5);

  :first-child {
    margin-top: 15vh;
    box-shadow: -2px 23px 30px -5px rgba(64, 216, 129, 0.6) inset;
  }

  :last-child {
    padding-top: 20px;
    box-shadow: -2px -24px 30px -5px rgba(64, 216, 129, 0.6) inset;
  }
`;

export const Header = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
