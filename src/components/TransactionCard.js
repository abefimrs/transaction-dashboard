function TransactionCard({ transaction }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      backgroundColor: transaction.status === 'success' ? '#f0fff4' : '#fff5f5'
    }}>
      <h3>Transaction #{transaction.id}</h3>
      <p>Amount: {transaction.currency} {transaction.amount}</p>
      <p>Status: <strong>{transaction.status}</strong></p>
    </div>
  );
}

export default TransactionCard;