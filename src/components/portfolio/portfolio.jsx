import React from "react";
import "./Portfolio.css";
import AboutImg from "../../assets/ctms.jpg";
import AboutImga from "../../assets/catelog.jpg";
import AboutImgb from "../../assets/smartLecture.jpg";
import AboutImgc from "../../assets/ValueWealth.jpg";
import AboutImgd from "../../assets/tazakhabar.jpg";
import AboutImge from "../../assets/botspotAI.jpg";
import ProjectCard from "./portfolioCard"

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>
            <div class="portfolio__container container">
                <div>
                    <ProjectCard aboutImg={AboutImg}
                        projectName="Child Trafficking Mitigating System"
                        projectLink="https://github.com/vivekmahindrakar/ctms"
                        projectDescription="Child Trafficking Mitigating system is a solution to child trafficking,child labour and child abuses.
                                We designed a Flutter application which can be used by common citizens to map unattended childs on street to the already registered victims, if
                                found, alert is sent to the nearest police station"
                    />

                    <br />
                    <ProjectCard aboutImg={AboutImga}
                        projectName="Catelog App"
                        projectLink="https://github.com/vivekmahindrakar/catelogApp"
                        projectDescription="Developed an E-commerce app clone where in the users can buy products and get them delivered. It was a basic application while i was learning
                                Flutter development it involved key concepts like State Management using Provider and UI design using velocityX" />

                    <br />
                    <ProjectCard aboutImg={AboutImgb}
                        projectName="Smart Lecture App"
                        projectLink="https://smartlecture.web.app"
                        projectDescription="Use the Smart Lecture App to keep doing your termwork even if you are stuck at home. The App allows you to collaborate you with your teachers to
                                continue your learning.
                                Smart lecture provides an efficient way to distributes notes /assessments to the students and grade the submitted assessment digitally." />
                    <br />
                    <ProjectCard aboutImg={AboutImgc}
                        projectName="Value Wealth Creators"
                        projectLink="https://github.com/vivekmahindrakar/Value-Wealth"
                        projectDescription="Created a website for showing the online presence of Value Wealth creator for user registrations and e-learnings."
                    />
                    <br />
                    <ProjectCard aboutImg={AboutImgd}
                        projectName="Taza Khabar"
                        projectLink="https://github.com/vivekmahindrakar/taza-khabar"
                        projectDescription="A news app which fetches news articles from 'Rapid API' a free api and categorizes news in 5 categories on daily basis"
                    />
                    <br />
                    <ProjectCard aboutImg={AboutImge}
                        projectName="Botspot AI"
                        projectLink="https://github.com/vivekmahindrakar/botspotai-assignment"
                        projectDescription="This was my internship project wherein, i was appointed as React developer my job was to convert figma designs to React code using JS"
                    />
                    <br />


                </div>
            </div>
        </section>
    )
}
export default Portfolio

