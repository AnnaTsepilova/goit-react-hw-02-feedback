import { FeedbackOptionsWrapper, Button } from 'components/App.styled';

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
