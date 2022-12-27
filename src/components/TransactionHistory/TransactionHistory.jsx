import PropTypes from 'prop-types';
import { TableContainer, TableHeadRow } from './TransactionHistory.styled';
import TransactionRow from './TransactionRow';

export default function TransactionHistory({ transactions }) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <TableHeadRow>Type</TableHeadRow>
          <TableHeadRow>Amount</TableHeadRow>
          <TableHeadRow>Currency</TableHeadRow>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <TransactionRow
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </TableContainer>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
