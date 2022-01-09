import * as styles from "./FeedbackOptionsStyles";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <styles.FeedbackList>
      {options.map((option) => {
        return (
          <styles.FeedBackListItem key={option}>
            <styles.Button
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </styles.Button>
          </styles.FeedBackListItem>
        );
      })}
    </styles.FeedbackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
