import styled from "styled-components";

export const FeedbackList = styled.ul`
  margin: auto;
  padding: 0;
  padding-bottom: 20px;
  width: 50%;
  text-align: center;
`;

export const FeedbackListItem = styled.li`
  list-style: none;

  :not(:first-child) {
    margin-top: 5px;
  }
`;
