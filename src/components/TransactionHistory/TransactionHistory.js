import React from 'react';
import PropTypes from 'prop-types';
import {
  transactionTable,
  transactionItem,
} from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={transactionTable}>
    <thead>
      <tr>
        <th className={transactionItem}>Type</th>
        <th className={transactionItem}>Amount</th>
        <th className={transactionItem}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={transactionItem}>{type}</td>
          <td className={transactionItem}>{amount}</td>
          <td className={transactionItem}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
