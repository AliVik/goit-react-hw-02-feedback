import PropTypes from "prop-types";
import * as styles from "./StatisticsStyles";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <styles.FeedbackList>
        <styles.FeedbackListItem>Good: {good}</styles.FeedbackListItem>
        <styles.FeedbackListItem>Neutral: {neutral}</styles.FeedbackListItem>
        <styles.FeedbackListItem>Bad: {bad}</styles.FeedbackListItem>
        <styles.FeedbackListItem>Total: {total}</styles.FeedbackListItem>
        <styles.FeedbackListItem>
          Positive feedback: {positivePercentage}%
        </styles.FeedbackListItem>
      </styles.FeedbackList>
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
