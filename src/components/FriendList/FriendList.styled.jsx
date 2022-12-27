import styled from 'styled-components';

export const FriendListBox = styled.ul`
  width: 100%;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.space[7]}px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  min-width: 64px;
  height: auto;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[5]}px;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.boxShadow};
`;

export const FriendStatus = styled.span`
  display: inline-block;
  margin-right: ${props => props.theme.space[5]}px;
  height: 16px;
  width: 16px;
  background-color: ${props =>
    props.color === 'true' ? `#4caf50` : `#f44336`};
  /* background-color: ${props => (props.color ? `#4caf50` : `#f44336`)}; */
  border-radius: ${props => props.theme.radii.round};
  color: ${props => props.theme.colors.primary};
`;

export const FriendAvatar = styled.img`
  display: block;
  margin-right: ${props => props.theme.space[5]}px;
  max-width: 100%;
  height: auto;
`;

export const FriendName = styled.p`
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;
