import PropTypes from "prop-types";
import * as styles from "./NotificationStyle";

export default function Notification({ message }) {
  return <styles.Notification>{message}</styles.Notification>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
