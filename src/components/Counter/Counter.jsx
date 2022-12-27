import React from 'react';
import {
  CounterContainer,
  CounterControls,
  Button,
  StatisticsWrapper,
  SubTitle,
  StatisticsList,
  StatisticsItem,
  Text,
  CounterValue,
} from './Counter.styled';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <CounterContainer>
        <CounterControls>
          <Button type="button" onClick={this.handleBtnGood}>
            Good
          </Button>
          <Button type="button" onClick={this.handleBtnNeutral}>
            Neutral
          </Button>
          <Button type="button" onClick={this.handleBtnBad}>
            Bad
          </Button>
        </CounterControls>
        <StatisticsWrapper>
          <SubTitle>Statistics</SubTitle>
          <StatisticsList>
            <StatisticsItem>
              <Text>Good:</Text>
              <CounterValue>{this.state.good}</CounterValue>
            </StatisticsItem>
            <StatisticsItem>
              <Text>Neutral:</Text>
              <CounterValue>{this.state.neutral}</CounterValue>
            </StatisticsItem>
            <StatisticsItem>
              <Text>Bad:</Text>
              <CounterValue>{this.state.bad}</CounterValue>
            </StatisticsItem>
          </StatisticsList>
        </StatisticsWrapper>
      </CounterContainer>
    );
  }
}

export default Counter;
