import PropTypes from 'prop-types';
import {
  FeedbackOptionsWrapper,
  goodButton,
  badButton,
  neutralButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

const components = {
  good: goodButton,
  neutral: neutralButton,
  bad: badButton,
};

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsWrapper>
      {options.map((option, key) => {
        let Button = components[option];
        return (
          <Button
            type="button"
            key={key}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        );
      })}
    </FeedbackOptionsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
