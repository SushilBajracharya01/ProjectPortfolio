import React from 'react';
import styled from 'styled-components';

import ProjectCard from './components/ProjectCard';

import pollMaster from './assets/homescreen.png';

const TitleHead = styled.h1`
    text-align: center !important;
    font-family: 'Anton', sans-serif;
`;

const Pj = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
)

const ProjectContainer = styled(Pj)`
    height: 85vh;
    overflow-y: scroll;

`;
export const Project = () => (

    <div>
        <TitleHead className="mb-4">PROJECTS</TitleHead>
        <div className="container border rounded">

            <ProjectContainer className="row">
                <ProjectCard 
                    img={pollMaster} 
                    title="Poll Master" 
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam illo nulla deserunt sapiente a"
                    codeLink="https://github.com/SushilBajracharya01/poll-master"
                    demoLink="https://pollmaster-v2.herokuapp.com/"
                 />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                
            </ProjectContainer>
        </div>

    </div>
)