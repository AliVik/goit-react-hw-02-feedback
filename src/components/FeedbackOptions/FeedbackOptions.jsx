import PropTypes from "prop-types";
import {
  FeedbackList,
  FeedBackListItem,
  Button,
} from "./FeedbackOptionsStyles";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackList>
      {options.map((option) => {
        return (
          <FeedBackListItem key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </FeedBackListItem>
        );
      })}
    </FeedbackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
