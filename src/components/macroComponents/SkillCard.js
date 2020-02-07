import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const SkillCard = (props) => {
    const { href, name, icon } = props;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card my-2 projectCard">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <div className="my-2">
                        <LazyLoadImage
                            alt={name}
                            height="140"
                            src={icon} 
                            title={name}
                            effect="blur"
                            className="card-img-top"
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
