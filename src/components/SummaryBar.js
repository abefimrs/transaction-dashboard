function SummaryBar({ transactions }) {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  const successful = transactions.filter(t => t.status === 'success').length;

  return (
    <div style={{ display: 'flex', gap: '16px', margin: '16px 0' }}>
      <div style={{ padding: '12px', background: '#f0fff4', borderRadius: '8px' }}>
        <strong>Total Amount:</strong> ${total}
      </div>
      <div style={{ padding: '12px', background: '#EBF3FF', borderRadius: '8px' }}>
        <strong>Successful:</strong> {successful}
      </div>
    </div>
  );
}

export  default SummaryBar;