import React, { useState } from "react";
import "./services.css"
const Service = ({ service_f_name, service_l_name, toggleNum, service_heading, services }) => {
    const [toggleState, steToggleState] = useState(0);

    const toggleTab = (index) => {
        steToggleState(index);
    }

    var arr = [];
    Object.keys(services).forEach(function (key) { arr.push(services[key]) })



    return (
        <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">{service_f_name} <br /> {service_l_name}</h3>
            </div>

            <span onClick={() => toggleTab(toggleNum)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === toggleNum ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">{service_f_name} {service_l_name}</h3>
                    <p className="services__modal-description">{service_heading}</p>

                    <ul className="services__modal-services grid">
                        {arr.map(item => <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">{item}</p>
                        </li>)}

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Service