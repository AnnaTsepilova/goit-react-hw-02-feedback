import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  max-width: 460px;
  margin-top: ${props => props.theme.space[7]}px;
  margin-bottom: ${props => props.theme.space[7]}px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.shadows.boxShadow};
  background-color: ${props => props.theme.colors.background};

  tr:nth-child(even) {
    background-color: ${props => props.theme.colors.backgroundSecondary};
  }
`;

export const TableHeadRow = styled.th`
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.background};
  background-color: #00bcd5;
  border: 1px solid #dddddd;
`;

export const TableBodyRow = styled.td`
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  border: 1px solid #dddddd;
`;
