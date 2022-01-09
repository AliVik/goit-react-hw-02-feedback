import PropTypes from "prop-types";
import { SectionElem, Header } from "./SectionStyles";

export default function Section({ title, children }) {
  return (
    <SectionElem>
      <Header>{title}</Header>
      {children}
    </SectionElem>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
