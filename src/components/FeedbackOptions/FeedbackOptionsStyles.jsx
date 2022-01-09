import styled from "styled-components";

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 0;
`;
export const FeedBackListItem = styled.li`
  list-style: none;
  width: 60px;
  height: 30px;

  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 100%;
`;
