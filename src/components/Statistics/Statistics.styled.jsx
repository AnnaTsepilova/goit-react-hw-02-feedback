import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  width: 100%;
  max-width: 360px;
  margin-top: ${props => props.theme.space[7]}px;
  margin-bottom: ${props => props.theme.space[7]}px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.shadows.boxShadow};
`;

export const StatTitle = styled.h2`
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.background};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundSecondary};
`;

export const StatItemCss = styled.li`
  width: 90px;
  display: block;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-left: 1px solid ${props => props.theme.colors.borderColor};
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
`;

export const StatPercentage = styled.span`
  display: block;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 20px;
`;
