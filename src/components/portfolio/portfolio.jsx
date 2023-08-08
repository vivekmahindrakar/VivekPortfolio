import React from "react";
import "./Portfolio.css";
import AboutImg from "../../assets/work1.jpg";
import AboutImga from "../../assets/work2.jpg";
import AboutImgb from "../../assets/work3.jpg";

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>
            <div class="portfolio__container container">
                <div>

                    <div class="portfolio__content grid">
                        <img src={AboutImg} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Child Trafficking Mitigating System</h3>
                            <p className="portfolio__description"> Child Trafficking Mitigating system is a solution to child trafficking,child labour and child abuses.
                                We designed a Flutter application which can be used by common citizens to map unattended childs on street to the already registered victims, if
                                found, alert is sent to the nearest police station</p>
                            <a href="#" className="button button--flex button--small portfolio__button">Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                    <br />

                    <div class="portfolio__content grid">
                        <img src={AboutImga} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Catelog App</h3>
                            <p className="portfolio__description">Developed an E-commerce app clone where in the users can buy products and get them delivered. It was a basic application while i was learning
                                Flutter development it involved key concepts like State Management using Provider and UI design using velocityX</p>
                            <a href="#" className="button button--flex button--small portfolio__button">Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                    <br />

                    <div class="portfolio__content grid">
                        <img src={AboutImgb} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Smart Lecture App</h3>
                            <p className="portfolio__description"> WUse the Smart Lecture App to keep doing your termwork even if you are stuck at home. The App allows you to collaborate you with your teachers to
                                continue your learning.
                                Smart lecture provides an efficient way to distributes notes /assessments to the students and grade the submitted assessment digitally.</p>
                            <a href="#" className="button button--flex button--small portfolio__button">Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Portfolio

