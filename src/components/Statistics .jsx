import styled from "styled-components";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) {
  return (
    <>
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
