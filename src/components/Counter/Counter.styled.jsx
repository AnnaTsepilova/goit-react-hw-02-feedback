import styled from 'styled-components';

export const Title = styled.h1`
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;

export const CounterContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const CounterControls = styled.div`
  display: flex;
  gap: 10px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 100px;
  height: 40px;

  margin-left: auto;
  margin-right: auto;

  text-align: center;
  border-radius: 4px;
  border-width: 0;
  color: #fff;
  background-color: #54a5e7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;

  cursor: pointer;
  outline: rgba(0, 0, 0, 0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #fff;
    color: #54a5e7;
  }
`;

export const StatisticsWrapper = styled.div`
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
`;

export const SubTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
`;

export const StatisticsList = styled.ul`
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
`;

export const StatisticsItem = styled.li`
  display: flex;
`;

export const Text = styled.p`
  margin-right: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: 20px;
`;

export const CounterValue = styled(Text)``;
