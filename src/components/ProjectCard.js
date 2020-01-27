import React from 'react';
import styled from 'styled-components';

import Button from './Button';


// const Button = ({ href, children }) => (
//     <a className={`btn`} href={href}>
//         {children}
//     </a>
// )
// const Button = styled.div`
//     border-radius: 0.3rem;
//     background-color: skyblue;
//     padding: 0.5rem;
//     color: white;
//     cursor: pointer;
// `

const CodeBtn = styled(Button)`
    background-color: pink !important;
    color: black !important;
    border: black !important
`


const ProjectCard = (props) => {
    const { img, title, description, codeLink } = props;
    return (
        <div className="col-md-4">
            <div className="projectCard card text-center my-3" >
                <div className="overflow">
                    <img src={img} alt="fot0 0" className="card-img-top" />

                    {/* <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" alt="fot0 0" className="card-img-top" /> */}
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title text-left heading">
                        {title}
                    </h4>
                    <p className="card-text text text-left">
                        {description}
                    </p>
                    <div className="row">
                        <div  className="col">
                            <CodeBtn href={codeLink} btnName="Code" />
                        </div>
                        <div  className="col">
                            <Button>Click me</Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;