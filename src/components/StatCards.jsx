import React from "react";

function StatCards({ stats }) {
    return (
        <div className="row g-4 mb-4">

            <div className="col-md-4">
                <div className="dashboard-stat-card">
                    <div>
                        <p>Total Balance</p>
                        <h3>${stats.balance.toLocaleString()}</h3>
                    </div>

                    <div className="stat-icon blue">
                        <i className="bi bi-wallet2"></i>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="dashboard-stat-card">
                    <div>
                        <p>Monthly Income</p>
                        <h3>${stats.income.toLocaleString()}</h3>
                    </div>

                    <div className="stat-icon green">
                        <i className="bi bi-arrow-down-left"></i>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="dashboard-stat-card">
                    <div>
                        <p>Monthly Expenses</p>
                        <h3>${stats.expenses.toLocaleString()}</h3>
                    </div>

                    <div className="stat-icon red">
                        <i className="bi bi-arrow-up-right"></i>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default StatCards;