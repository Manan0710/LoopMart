import React from "react";

function TransactionTable({ transactions }) {
    return (
        <div className="dashboard-card">

            <div className="dashboard-card-header">
                <div>
                    <h5>Recent Transactions</h5>
                    <p>Latest account activity</p>
                </div>

                <button className="dashboard-link">
                    View All
                </button>
            </div>

            <div className="table-responsive">

                <table className="table align-middle mb-0">

                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th className="text-end">Amount</th>
                        </tr>
                    </thead>

                    <tbody>

                        {transactions.map((transaction) => (

                            <tr key={transaction.id}>

                                <td>
                                    <div className="transaction-name">
                                        <div className="transaction-icon">
                                            <i className={transaction.icon}></i>
                                        </div>

                                        <span>
                                            {transaction.description}
                                        </span>
                                    </div>
                                </td>

                                <td>
                                    {transaction.date}
                                </td>

                                <td>
                                    <span className="category-badge">
                                        {transaction.category}
                                    </span>
                                </td>

                                <td
                                    className={`text-end fw-semibold ${
                                        transaction.type === "income"
                                            ? "amount-income"
                                            : "amount-expense"
                                    }`}
                                >
                                    {transaction.type === "income"
                                        ? "+"
                                        : "-"}
                                    ${transaction.amount.toLocaleString()}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default TransactionTable;