import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { CodeBtn } from './macroComponents/CodeBtn';
import { DemoBtn } from './macroComponents/DemoBtn';


const ProjectCard = (props) => {
    const { img, title, description, codeLink, demoLink } = props;
    return (
        <div className="col-md-4">
            <div className="projectCard card text-center my-3" >

                <div className="overflow">
                    <LazyLoadImage
                        alt={title}
                        height="140"
                        src={img}    
                        effect="blur"
                        className="card-img-top"
                    />
                </div>


                <div className="card-body text-dark">

                    <h4 className="card-title text-left heading">
                        {title}
                    </h4>

                    <p className="card-text text text-left pj-description">
                        {description}
                    </p>

                    <div className="row">
                        <div className="col">
                            <CodeBtn href={codeLink} />
                        </div>
                        <div className="col">
                            <DemoBtn href={demoLink} />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ProjectCard;