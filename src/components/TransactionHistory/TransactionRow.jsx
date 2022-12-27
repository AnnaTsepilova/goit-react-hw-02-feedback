import PropTypes from 'prop-types';
import { TableBodyRow } from './TransactionHistory.styled';

export default function TransactionRow({ type, amount, currency }) {
  return (
    <tr>
      <TableBodyRow>{type}</TableBodyRow>
      <TableBodyRow>{amount}</TableBodyRow>
      <TableBodyRow>{currency}</TableBodyRow>
    </tr>
  );
}

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
