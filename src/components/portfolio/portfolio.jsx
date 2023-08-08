import React from "react";
import "./Portfolio.css";
import AboutImg from "../../assets/work1.jpg";
import AboutImga from "../../assets/work2.jpg";
import AboutImgb from "../../assets/work3.jpg";

const Portfolio = () => {
    return(
        <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div class="portfolio__container container">
        <div>

            <div class="portfolio__content grid">
            <img src={AboutImg} alt="" className="portfolio__img" />
            <div className="portfolio__data">
                <h3 className="portfolio__title">Modern Website</h3>
                <p className="portfolio__description"> Website adaptable to all devices, with and animated interactions</p>
                <a href="#" className="button button--flex button--small portfolio__button">Demo
                <i className="uil uil-arrow-right button__icon"></i> 
                </a>
            </div>
            </div>
             <br />

            <div class="portfolio__content grid">
            <img src={AboutImga} alt="" className="portfolio__img" />
            <div className="portfolio__data">
                <h3 className="portfolio__title">Brand Design</h3>
                <p className="portfolio__description"> Website adaptable to all devices, with and animated interactions</p>
                <a href="#" className="button button--flex button--small portfolio__button">Demo
                <i className="uil uil-arrow-right button__icon"></i> 
                </a>
            </div>
            </div>
            <br/>

            <div class="portfolio__content grid">
            <img src={AboutImgb} alt="" className="portfolio__img" />
            <div className="portfolio__data">
                <h3 className="portfolio__title">Online Store</h3>
                <p className="portfolio__description"> Website adaptable to all devices, with and animated interactions</p>
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

