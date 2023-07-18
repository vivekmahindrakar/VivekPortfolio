import React from "react";
import "./qualification.css";

const Qualification = () => {
    return(
     <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
                <i className="uil uil-graduation-cap qualification__icon">Education</i>
            </div>

            <div className="qualification__button button--flex">
                <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
            </div>
        </div>

        <div className="qualification__sections">
            <div className="qualification__content">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"></h3>
                        <span className="qualification__subtitle">Spain - Institute</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></i> 2021 present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
       </section>
    )
}
export default Qualification