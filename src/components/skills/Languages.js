import React from "react";
import Skill from "./skill"
const Languages = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Languages</h3>

            <div className="skills__box">
                <div className="skills__box">
                    <div className="skills__group">
                        <Skill skillName="C" experience="Advance" />
                        <Skill skillName="CPP" experience="Advance" />
                        <Skill skillName="JAVA" experience="Intermediate" />

                    </div>

                    <div className="skills__group">

                        <Skill skillName="Python" experience="Beginner" />


                    </div>
                </div>
            </div>

        </div>
    );
};
export default Languages;
