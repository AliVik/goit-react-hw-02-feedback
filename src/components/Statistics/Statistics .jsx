import PropTypes from "prop-types";
import { FeedbackList, FeedbackListItem } from "./StatisticsStyles";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <FeedbackList>
        <FeedbackListItem>Good: {good}</FeedbackListItem>
        <FeedbackListItem>Neutral: {neutral}</FeedbackListItem>
        <FeedbackListItem>Bad: {bad}</FeedbackListItem>
        <FeedbackListItem>Total: {total}</FeedbackListItem>
        <FeedbackListItem>
          Positive feedback: {positivePercentage}%
        </FeedbackListItem>
      </FeedbackList>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
