import React from 'react'

const skill = ({ skillName, experience }) => {
    return (
        <div className="skills__data">
            <i class="uil uil-comment-verify"></i>

            <div>
                <h3 className="skills__name">{skillName}</h3>
                <span className="skills__level">{experience}</span>
            </div>
        </div>
    )
}

export default skill;