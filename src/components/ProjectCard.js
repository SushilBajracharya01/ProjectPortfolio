import React from 'react';

import { CodeBtn } from './macroComponents/CodeBtn';
import { DemoBtn } from './macroComponents/DemoBtn';




const ProjectCard = (props) => {
    const { img, title, description, codeLink, demoLink } = props;
    return (
        <div className="col-md-4">
            <div className="projectCard card text-center my-3" >

                <div className="overflow">
                    <img src={img} alt={title} className="card-img-top" />
                </div>


                <div className="card-body text-dark">

                    <h4 className="card-title text-left heading">
                        {title}
                    </h4>

                    <p className="card-text text text-left pj-description">
                        {description}
                    </p>

                    <div className="row">
                        <div  className="col">
                            <CodeBtn href={codeLink}/>
                        </div>
                        <div  className="col">
                            <DemoBtn href={demoLink}/>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ProjectCard;