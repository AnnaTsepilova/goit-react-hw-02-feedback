import styled from 'styled-components';

export const Description = styled.div`
  margin: auto;
  max-width: 360px;
  margin-top: ${props => props.theme.space[7]}px;
  padding-top: ${props => props.theme.space[6]}px;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border-radius: ${props => props.theme.radii.normal};
  font-size: ${props => props.theme.fontSizes.s}px;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  padding: 5px;
  max-width: 100%;
  height: auto;
  border-radius: ${props => props.theme.radii.round};
  border: 2px solid ${props => props.theme.colors.borderColor};
`;

export const Name = styled.p`
  margin-top: ${props => props.theme.space[5]}px;
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Tag = styled.p`
  margin-top: ${props => props.theme.space[5]}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.secondary};
`;

export const Location = styled.p`
  margin-top: ${props => props.theme.space[5]}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.secondary};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.space[6]}px;

  background-color: ${props => props.theme.colors.backgroundSecondary};
`;

export const StatsCell = styled.li`
  width: 120px;
  display: block;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-left: 1px solid ${props => props.theme.colors.borderColor};
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${props => props.theme.space[3]}px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 20px;
`;
