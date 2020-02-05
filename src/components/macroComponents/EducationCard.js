import React from 'react';

import './EducationCard.css'

export const EducationCard = (props) => {
    const { href, courseName, InstitutionName, InstitutionLocation, courseYear } = props;
    return (
        <div className="col-12">
            <div className="my-2 EducationCard p-3">
                <a href={href} target="_blank" rel="noopener noreferrer"  className="InsName">
                    {InstitutionName}
                </a>
                <p className="lead font-italic">{InstitutionLocation}</p>
                <ul>
                    <li>{courseName}</li>
                </ul>

            </div>
        </div>
    )
}