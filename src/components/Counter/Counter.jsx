import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CounterContainer,
  StatisticsWrapper,
  SubTitle,
  StatisticsList,
  StatisticsItem,
  Text,
  CounterValue,
} from './Counter.styled';

import Controls from '../Controls/Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

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
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, number) => {
      return acc + number;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / total
    );
    return positiveFeedbackPercentage;
  };

  render() {
    return (
      <CounterContainer>
        <Controls
          onBtnGood={this.handleBtnGood}
          onBtnNeutral={this.handleBtnNeutral}
          onBtnBad={this.handleBtnBad}
        />
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
            <StatisticsItem>
              <Text>Total:</Text>
              <CounterValue>{this.countTotalFeedback()}</CounterValue>
            </StatisticsItem>
            <StatisticsItem>
              <Text>Positive feedback:</Text>
              <CounterValue>
                {this.countPositiveFeedbackPercentage()}%
              </CounterValue>
            </StatisticsItem>
          </StatisticsList>
        </StatisticsWrapper>
      </CounterContainer>
    );
  }
}

export default Counter;
