import React, { useState } from "react";
import SellItemModal from "./SellItemModal";

function SellBanner({ onItemAdded }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSell = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (

        <>

            <section className="sell-banner-section">

                <div className="container">

                    <div className="sell-banner">

                        <div>

                            <span className="sell-badge">
                                <i className="bi bi-plus-circle"></i>
                                Start selling today
                            </span>

                            <h2>
                                Have something to sell?
                            </h2>

                            <p>
                                Turn your unused items into cash.
                                List your products on LoopMart in minutes.
                            </p>

                        </div>


                        <button
                            className="btn btn-primary"
                            onClick={handleSell}
                        >
                            <i className="bi bi-plus-lg"></i>
                            {" "}Sell an Item
                        </button>

                    </div>

                </div>

            </section>


            <SellItemModal
                isOpen={isModalOpen}
                onClose={handleClose}
                onItemAdded={onItemAdded}
            />

        </>

    );
}

export default SellBanner;