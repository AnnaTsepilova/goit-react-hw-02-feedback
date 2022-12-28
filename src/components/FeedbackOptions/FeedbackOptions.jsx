import PropTypes from 'prop-types';
import {
  FeedbackOptionsWrapper,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsWrapper>
      {options.map((option, key) => (
        <Button
          type="button"
          key={key}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </FeedbackOptionsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
