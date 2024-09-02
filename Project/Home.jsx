import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';

const mockTransactions = [
  { id: 1, description: 'Invoice #123', amount: 500, date: '2024-08-01' },
  { id: 2, description: 'Payment from ABC Corp', amount: 300, date: '2024-08-02' },
  { id: 3, description: 'Office Supplies', amount: -100, date: '2024-08-03' },
];

const Home = () => {
  const [metrics] = useState({
    totalIncome: 10000,
    totalExpenses: 4000,
    profit: 6000,
    cashFlow: 5000,
  });

  const location = useLocation();
  const isWelcomePage = location.state?.fromLogin;

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">MyAccountingApp</div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </header>

      {isWelcomePage && (
        <div className="welcome-message">
          <h1>Welcome, Manage your transactions</h1>
        </div>
      )}

      {!isWelcomePage && (
        <>
          <div className="home-content">
            <h1>Welcome to Your Accounting Dashboard</h1>

            <section id="home" className="dashboard-overview">
              <h2>Dashboard Overview</h2>
              <div className="metrics">
                <div className="metric-item">
                  <h3>Total Income</h3>
                  <p>${metrics.totalIncome}</p>
                </div>
                <div className="metric-item">
                  <h3>Total Expenses</h3>
                  <p>${metrics.totalExpenses}</p>
                </div>
                <div className="metric-item">
                  <h3>Profit/Loss</h3>
                  <p>${metrics.profit}</p>
                </div>
                <div className="metric-item">
                  <h3>Cash Flow</h3>
                  <p>${metrics.cashFlow}</p>
                </div>
              </div>
            </section>

            <section className="recent-transactions">
              <h2>Recent Transactions</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTransactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td>{transaction.date}</td>
                      <td>{transaction.description}</td>
                      <td>{transaction.amount > 0 ? `$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="additional-features">
              <h2>Accounting Features</h2>
              <ul>
    <li>
      <p>Gain deep insights into your financial data with advanced analytics tools.</p>
    </li>
    <li>
      <p>Create and manage invoices with ease, and send them directly to your clients.</p>
    </li>
    <li>    
      <p>Plan and monitor your budget to ensure you stay within your financial limits.</p>
    </li>
    <li>
      <p>Automate tax calculations to save time and ensure accuracy.</p>
    </li>
    <li>
      <p>Generate detailed financial reports to analyze your business performance.</p>
    </li>
    <li>
      <p>Handle transactions in multiple currencies effortlessly.</p>
    </li> 
  </ul>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
