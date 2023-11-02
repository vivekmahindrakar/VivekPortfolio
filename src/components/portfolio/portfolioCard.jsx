import React from 'react'
import "./Portfolio.css";

const portfolioCard = ({ aboutImg, projectName, projectDescription, projectLink }) => {
    return (
        <div class="portfolio__content grid">
            <img src={aboutImg} alt="" className="portfolio__img" />
            <div className="portfolio__data">
                <h3 className="portfolio__title">{projectName}</h3>
                <p className="portfolio__description"> {projectDescription}</p>
                <a href={projectLink} className="button button--flex button--small portfolio__button">View project
                    <i className="uil uil-arrow-right button__icon"></i>
                </a>
            </div>
        </div>
    )
}

export default portfolioCard
