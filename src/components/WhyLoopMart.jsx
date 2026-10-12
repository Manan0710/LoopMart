import React from "react";

function WhyLoopMart() {

    const features = [
        {
            icon: "bi-shield-check",
            title: "Safe & Secure",
            description:
                "Shop confidently with a simple and secure marketplace experience."
        },
        {
            icon: "bi-people",
            title: "Real People",
            description:
                "Connect directly with buyers and sellers from around you."
        },
        {
            icon: "bi-globe2",
            title: "Worldwide",
            description:
                "Discover products and opportunities from people everywhere."
        },
        {
            icon: "bi-lightning-charge",
            title: "Easy & Fast",
            description:
                "List products quickly and find what you need without hassle."
        }
    ];

    return (

        <section className="why-section">

            <div className="container">

                <div className="section-heading">

                    <div>

                        <h2>
                            Why LoopMart?
                        </h2>

                        <p>
                            Everything you need for a better marketplace experience.
                        </p>

                    </div>

                </div>


                <div className="row g-4">

                    {features.map((feature) => (

                        <div
                            className="col-md-6 col-lg-3"
                            key={feature.title}
                        >

                            <div className="why-card">

                                <div className="why-icon">

                                    <i
                                        className={`bi ${feature.icon}`}
                                    ></i>

                                </div>

                                <h5>
                                    {feature.title}
                                </h5>

                                <p>
                                    {feature.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default WhyLoopMart;