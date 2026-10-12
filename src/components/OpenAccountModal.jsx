import React, { useState } from "react";

function OpenAccountModal({ onOpenAccount }) {

    const [accountType, setAccountType] = useState("");
    const [accountName, setAccountName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!accountName || !accountType) {
            alert("Please fill all fields.");
            return;
        }

        onOpenAccount({
            accountName,
            accountType
        });

        setAccountName("");
        setAccountType("");
    };

    return (
        <div
            className="modal fade"
            id="newAccountModal"
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered">

                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">
                            Open New Account
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="modal-body">

                            <div className="mb-3">
                                <label className="form-label">
                                    Account Holder Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={accountName}
                                    onChange={(e) =>
                                        setAccountName(e.target.value)
                                    }
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Account Type
                                </label>

                                <select
                                    className="form-select"
                                    value={accountType}
                                    onChange={(e) =>
                                        setAccountType(e.target.value)
                                    }
                                >
                                    <option value="">
                                        Select account type
                                    </option>

                                    <option value="Savings">
                                        Savings Account
                                    </option>

                                    <option value="Current">
                                        Current Account
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div className="modal-footer">

                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Open Account
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}

export default OpenAccountModal;