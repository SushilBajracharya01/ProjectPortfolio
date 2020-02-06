import React from 'react';

export const SkillCard = (props) => {
    const { href, name, icon } = props;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card my-2 projectCard">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <div className="my-2">
                        <img src={icon} alt={name} className="card-img-top" height="140" title={name}/>
                    </div>
                </a>
            </div>
        </div>
    )
}
