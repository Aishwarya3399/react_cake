import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Wallet.css';

const Wallet = () => {
  const [rewardCredits, setRewardCredits] = useState(100);
  const [rewardHistory, setRewardHistory] = useState([]);

  useEffect(() => {
    const initialHistory = [
      { date: "2024-01-01", amount: 50 },
      { date: "2024-02-01", amount: 30 },
      { date: "2024-03-01", amount: 20 },
    ];

    const storedCredits = parseInt(localStorage.getItem("rewardCredits"), 10) || 100;
    const storedHistory =
      JSON.parse(localStorage.getItem("rewardHistory")) || initialHistory;

    if (!localStorage.getItem("rewardHistory")) {
      localStorage.setItem("rewardHistory", JSON.stringify(initialHistory));
    }

    setRewardCredits(storedCredits);
    setRewardHistory(storedHistory);
  }, []);

  return (
    <div className="pb-5 pt-2 col-lg-12">
      <div className="row">
        <div className="col-lg-2 mt-5 side-card text-center align-self-top">
          <div className="sticky-filter mt-4">
            <Link className="nav-link active mt-4 mx-2 mb-3" to="/profile">
              My Account
            </Link>
            <Link className="nav-link mt-3 mx-2 mb-3" to="/orders">
              My Orders
            </Link>
            <Link className="nav-link mt-3 mx-2 mb-3" to="/wishlist">
              My Wishlist
            </Link>
            <Link className="nav-link mt-3 mx-2 mb-3" to="/wallet">
              My Wallet
            </Link>
              <Link className="nav-link mt-3 mx-2 mb-4" to="/manage-address">Manage Address</Link>
          </div>
        </div>
        <div className="container col-lg-4 text-center mt-2">
          <h2 className="mb-4 text-center">Wallet Details</h2>
          <div className="container mt-5">
            <div id="rewardBalance" className="mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Reward Credits Balance</h5>
                  <p className="card-text">
                    You have <strong>{rewardCredits}</strong> reward credits.
                  </p>
                </div>
              </div>
            </div>
            <div id="rewardHistory">
              {rewardHistory.length === 0 ? (
                <p className="text-center">No reward history available.</p>
              ) : (
                rewardHistory.map((historyItem, index) => (
                  <div className="card mb-3" key={index}>
                    <div className="card-body">
                      <h5 className="card-title">Transaction {index + 1}</h5>
                      <p className="card-text">
                        Date: {historyItem.date} <br />
                        Amount: {historyItem.amount} credits
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
