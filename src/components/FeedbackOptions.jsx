import styled from "styled-components";
import React from "react";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className="Feedback__list">
      {options.map((option) => {
        return (
          <li className="Feedback__item" key={option}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
