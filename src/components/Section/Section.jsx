import PropTypes from "prop-types";
import * as styles from "./SectionStyles";

export default function Section({ title, children }) {
  return (
    <styles.SectionElem>
      <styles.Header>{title}</styles.Header>
      {children}
    </styles.SectionElem>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
