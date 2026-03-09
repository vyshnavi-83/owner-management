
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>FinCore ERP</h3>
      <ul>
        <li>Dashboard</li>
        <li>General Ledger</li>
        <li className="active">Owner Management</li>
        <li>Capital Accounts</li>
        <li>Tax Filings</li>
        <li>Audit Logs</li>
      </ul>
    </div>
  );
}
