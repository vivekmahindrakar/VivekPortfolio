import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, steToggleState] = useState(1);

    const toggleTab = (index) => {
        steToggleState(index); 
    }
    return(
     <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div 
            className={
                toggleState === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
            >
                <i className="uil uil-graduation-cap qualification__icon">Education</i>
            </div>

            <div 
            className={
                toggleState === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
            >
                <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
            </div>
        </div>

        <div className="qualification__sections">
            <div className={
                toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content" 
                }
                >
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Engineering</h3>
                        <span className="qualification__subtitle">Savitribai Phule Pune University - University</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2023 present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Diploma</h3>
                        <span className="qualification__subtitle">Government Polytechnic Pune - Institute</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2017 - 2020
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">SSC</h3>
                        <span className="qualification__subtitle">YMCAs Maharastra English School Pune - Institute</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2017
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

            </div>

            <div className={
                toggleState === 2 
                ? "qualification__content qualification__content-active" 
                : "qualification__content" 
                }
                >
                
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Graduate Engineer Trainee</h3>
                        <span className="qualification__subtitle">VOIS</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2023
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">React Developer</h3>
                        <span className="qualification__subtitle">Botspot AI</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022
                        </div>
                    </div>
                </div>
                    
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Full Stack Web Developer</h3>
                        <span className="qualification__subtitle">Value Wealth Creator</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021 - 2021
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>


            </div>
        </div>
      </div>
       </section>
    )
}
export default Qualification