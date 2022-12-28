import PropTypes from 'prop-types';
import { SubTitle } from 'components/App.styled';

export default function Section({ title, children }) {
  return (
    <>
      {title && <SubTitle>{title}</SubTitle>}
      {children}
    </>
  );
}
