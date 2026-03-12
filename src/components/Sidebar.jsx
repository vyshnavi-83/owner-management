import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">FinCore ERP</h2>

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