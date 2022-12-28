import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  Text,
  CounterValue,
} from 'components/Counter/Counter.styled';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <StatisticsList>
      <StatisticsItem>
        <Text>Good:</Text>
        <CounterValue>{good}</CounterValue>
      </StatisticsItem>
      <StatisticsItem>
        <Text>Neutral:</Text>
        <CounterValue>{neutral}</CounterValue>
      </StatisticsItem>
      <StatisticsItem>
        <Text>Bad:</Text>
        <CounterValue>{bad}</CounterValue>
      </StatisticsItem>
      <StatisticsItem>
        <Text>Total:</Text>
        <CounterValue>{total}</CounterValue>
      </StatisticsItem>
      <StatisticsItem>
        <Text>Positive feedback:</Text>
        <CounterValue>{percentage}%</CounterValue>
      </StatisticsItem>
    </StatisticsList>
  );
}
