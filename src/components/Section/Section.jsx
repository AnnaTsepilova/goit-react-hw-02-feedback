import PropTypes from 'prop-types';
import { SubTitle } from 'components/Counter/Counter.styled';

export default function Section({ title, children }) {
  return (
    <>
      {title && <SubTitle>{title}</SubTitle>}
      {children}
    </>
  );
}
