import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CounterContainer,
  StatisticsWrapper,
  SubTitle,
} from './Counter.styled';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
//import Section from 'components/Section/Section';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  options = [
    {
      btnName: 'Good',
    },
    {
      btnName: 'Neutral',
    },
    {
      btnName: 'Bad',
    },
  ];

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

  onLeaveFeedback = event => {
    switch (event.target.dataset.btn) {
      case 'Good':
        this.handleBtnGood();
        break;
      case 'Neutral':
        this.handleBtnNeutral();
        break;
      case 'Bad':
        this.handleBtnBad();
        break;
    }
  };

  render() {
    return (
      <CounterContainer>
        <Section>
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <StatisticsWrapper>
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        </StatisticsWrapper>
      </CounterContainer>
    );
  }
}

export default Counter;
