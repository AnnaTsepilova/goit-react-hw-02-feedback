import { CounterControls, Button } from '../Counter/Counter.styled';

export default function Controls({ onBtnGood, onBtnNeutral, onBtnBad }) {
  return (
    <CounterControls>
      <Button type="button" onClick={onBtnGood}>
        Good
      </Button>
      <Button type="button" onClick={onBtnNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onBtnBad}>
        Bad
      </Button>
    </CounterControls>
  );
}
