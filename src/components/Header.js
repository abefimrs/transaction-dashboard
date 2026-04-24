function Header({ totalCount, filteredCount }) {
  return (
    <div>
      <h1>Transaction Dashboard</h1>
      <p>Showing {filteredCount} of {totalCount} transactions</p>
    </div>
  );
}
export  default Header;