import React, { useState } from "react";

function TransferForm({ onTransfer }) {

    const [fromAcc, setFromAcc] = useState("");
    const [toAcc, setToAcc] = useState("");
    const [transferAmount, setTransferAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fromAcc || !toAcc || !transferAmount) {
            alert("Please fill all fields.");
            return;
        }

        onTransfer({
            fromAcc,
            toAcc,
            transferAmount: Number(transferAmount)
        });

        setFromAcc("");
        setToAcc("");
        setTransferAmount("");
    };

    return (
        <div className="dashboard-card">

            <div className="dashboard-card-header">
                <div>
                    <h5>Transfer Money</h5>
                    <p>Send money between accounts</p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label>From Account</label>

                    <select
                        className="form-select"
                        value={fromAcc}
                        onChange={(e) => setFromAcc(e.target.value)}
                    >
                        <option value="">Select account</option>
                        <option value="Checking Account">
                            Checking Account
                        </option>
                        <option value="Savings Account">
                            Savings Account
                        </option>
                    </select>
                </div>

                <div className="mb-3">
                    <label>To Account</label>

                    <select
                        className="form-select"
                        value={toAcc}
                        onChange={(e) => setToAcc(e.target.value)}
                    >
                        <option value="">Select account</option>
                        <option value="Checking Account">
                            Checking Account
                        </option>
                        <option value="Savings Account">
                            Savings Account
                        </option>
                    </select>
                </div>

                <div className="mb-3">
                    <label>Amount</label>

                    <div className="input-group">
                        <span className="input-group-text">$</span>

                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter amount"
                            min="1"
                            value={transferAmount}
                            onChange={(e) =>
                                setTransferAmount(e.target.value)
                            }
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    <i className="bi bi-send me-2"></i>
                    Transfer Money
                </button>

            </form>

        </div>
    );
}

export default TransferForm;