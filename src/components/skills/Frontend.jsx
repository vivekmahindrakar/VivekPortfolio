import React from "react";
import Skill from "./skill"
const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend</h3>

            <div className="skills__box">
                <div className="skills__box">
                    <div className="skills__group">
                        <Skill skillName="HTML" experience="Advance" />
                        <Skill skillName="CSS" experience="Advance" />
                        <Skill skillName="Bootstrap" experience="Intermediate" />

                    </div>

                    <div className="skills__group">

                        <Skill skillName="UI design" experience="Beginner" />
                        <Skill skillName="Javascript" experience="Intermediate" />

                    </div>
                </div>
            </div>

        </div>
    );
};
export default Frontend;
