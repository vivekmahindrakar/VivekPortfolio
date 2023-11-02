import React, { useState } from "react";
import Service from "./service"
import "./services.css"
const Services = () => {
    const [toggleState, steToggleState] = useState(0);

    const toggleTab = (index) => {
        steToggleState(index);
    }
    const WebDevServices = {
        "service1": "Create Responsive Designs",
        "service2": "Minimalism at its best",
        "service3": "I position your company brand.",
        "service4": "Can work with multiple frameworks",
    }
    const AndroidDevServices = {
        "service1": "Create optimised Android Apps",
        "service2": "Testing applications and troubleshooting issues",
        "service3": "Performing maintenance on apps as needed",
        "service4": "Can work with java and kotlin",
    }
    const FlutterDevServices = {
        "service1": "Cross platform development",
        "service2": "I create ux element interactions",
        "service3": "Application Migrations support",
        "service4": "User friendy UI",
        "service5": "Design and mockups of products for companies.",
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <Service service_f_name="Website Developer"
                    service_l_name="UI/UX"
                    toggleNum={1}
                    service_heading="Providing quality work to clients and companies"
                    services={WebDevServices} />

                <Service service_f_name="Flutter"
                    service_l_name="Developer"
                    toggleNum={2}
                    service_heading="Providing quality work to clients and companies"
                    services={FlutterDevServices} />

                <Service service_f_name="Android"
                    service_l_name="Developer"
                    toggleNum={3}
                    service_heading="Providing quality work to clients and companies"
                    services={AndroidDevServices} />


            </div>
        </section>
    )
}
export default Services
