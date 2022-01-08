import React from "react";
import styled from "styled-components";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h2 className="Feedback__title">Statistics</h2>
      <ul className="Feedback__list">
        <li className="Feedback__item">Good: {good}</li>
        <li className="Feedback__item">Neutral: {neutral}</li>
        <li className="Feedback__item">Bad: {bad}</li>
        <li className="Feedback__item">Total: {total}</li>
        <li className="Feedback__item">
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </>
  );
}
