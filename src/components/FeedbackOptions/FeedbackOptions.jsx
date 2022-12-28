import {
  FeedbackOptionsWrapper,
  Button,
} from 'components/Counter/Counter.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsWrapper>
      {options.map((item, key) => (
        <Button
          type="button"
          key={key}
          onClick={onLeaveFeedback}
          data-btn={item.btnName}
        >
          {item.btnName}
        </Button>
      ))}
    </FeedbackOptionsWrapper>
  );
}
