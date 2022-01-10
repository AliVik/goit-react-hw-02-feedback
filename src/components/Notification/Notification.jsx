import PropTypes from "prop-types";
import { NotificationStyled } from "./NotificationStyle";

export default function Notification({ message }) {
  return <NotificationStyled>{message}</NotificationStyled>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
