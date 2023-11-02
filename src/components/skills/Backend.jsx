import React from "react";
import Skill from "./skill"
const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <Skill skillName="MongoDB" experience="Intermediate" />
                    <Skill skillName="Node.js" experience="Intermediate" />
                    <Skill skillName="Express" experience="Advance" />

                </div>

                <div className="skills__group">

                    <Skill skillName="Rest API" experience="Intermediate" />
                    <Skill skillName="Firebase" experience="Advance" />
                    <Skill skillName="MySQL" experience="Advance" />

                </div>
            </div>
        </div>
    );
};
export default Backend;
