import React from 'react';
import styled from 'styled-components';

import { TitleHead } from './components/macroComponents/TitleHead';
import ProjectCard from './components/ProjectCard';


import pollMaster from './assets/pollmaster-homescreen.png';
import GoalSet from './assets/goal-set.png';
import TodoApp from './assets/todo-home.png';
import PokeDex from './assets/pokemon-Home.png';



const ProjectContainer = styled.div`
    height: 80vh;
    overflow-y: scroll;

`;

export const Project = () => (

    <div>
        <TitleHead>PROJECTS</TitleHead>
        <div className="container border rounded">

            <ProjectContainer className="row">
                <ProjectCard 
                    img={pollMaster} 
                    title="Poll Master" 
                    description="Poll master is a Web app which is built with MERN Stack. It is simple web app where you can vote on polls created by others and also create your own polls."
                    codeLink="https://github.com/SushilBajracharya01/poll-master"
                    demoLink="https://pollmaster-v2.herokuapp.com/"
                />
                <ProjectCard 
                    img={GoalSet} 
                    title="Goal-Set" 
                    description="Goal-Set is a Todo List like app, built with Mongodb, Express, Ejs, and NodeJs. We can Add Goals and Mark them as complete."
                    codeLink="https://github.com/SushilBajracharya01/Goal-Set"
                    demoLink="https://nodeworkshop-sushil.herokuapp.com/"
                />
                <ProjectCard 
                 img={TodoApp} 
                 title="The Todo App" 
                 description="The Todo App is React/Redux web app with a beautiful User Interface to keep track of the Todo items. "
                 codeLink="https://github.com/SushilBajracharya01/the-todo-app/tree/master"
                 demoLink="https://sushilbajracharya01.github.io/the-todo-app/"
                />
                <ProjectCard 
                    img={PokeDex} 
                    title="PokeDex" 
                    description="A mini-encyclopedia of Pokémon species, types, evolutions, and moves. It is created using React, PokeAPI and speaktts package."
                    codeLink="https://github.com/SushilBajracharya01/PokeDex"
                    demoLink="https://sushilbajracharya01.github.io/PokeDex/"
                />
                
            </ProjectContainer>
        </div>

    </div>
)