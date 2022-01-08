import styled from "styled-components";
import React from "react";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className="Feedback__list">
        <li className="Feedback__item">
          <button type="button" onClick={this.onGoodBtnClick}>
            Good
          </button>
        </li>
        <li className="Feedback__item">
          <button type="button" onClick={this.onNeutralBtnClick}>
            Neutral
          </button>
        </li>
        <li className="Feedback__item">
          <button type="button" onClick={this.onBadBtnClick}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
}
