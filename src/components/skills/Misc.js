import React from "react";
import Skill from "./skill"
const Miscellaneous = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Misc & Frameworks</h3>

            <div className="skills__box">
                <div className="skills__box">
                    <div className="skills__group">
                        <Skill skillName="git" experience="Advance" />
                        <Skill skillName="github" experience="Advance" />


                    </div>

                    <div className="skills__group">

                        <Skill skillName="Flutter" experience="Intermediate" />
                        <Skill skillName="React" experience="Intermediate" />


                    </div>
                </div>
            </div>

        </div>
    );
};
export default Miscellaneous;
