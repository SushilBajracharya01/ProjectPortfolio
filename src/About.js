import React from 'react';
import { TitleHead } from './components/macroComponents/TitleHead';

import proPic from './assets/propic.jpg';

export const About = () => (

    <div>
        <TitleHead>ABOUT <span style={{ color: '#3377ff' }}>ME</span></TitleHead>
        <div className="container border rounded">
            <div className="row ProjectContainer">
                <p align="center" className="col-12 col-lg-6 aboutMeImg">
                    <img src={proPic} className="proPicStyle" alt="sushil profile pic" />
                </p>
                <div className="text aboutMeP col-12 col-lg-6 mt-1">
                    <p>
                        My name is Sushil Bajracharya, I am a Front-End Developer with experience on web development of over a year. I am a final year bachelor's student currently studying Bachelors of Science in Computer Science and Information Technology (BSc.CSIT).
                </p>
                    <p>Before Web development, I had been involved in other programming languages like C, C++, python and game development using unity.
                        I  am fueled by my passion for learning and creating solutions for making lives easier. I consider myself to be 'forever student' eager to learn about technology and management.
                </p>
                    <p>
                        I am currently developing myself to be a better web developer and I am always interested in a challenges.
                </p>
                    <p> Reach out to bajracharya.sushil01@gmail.com to connect!</p>

                </div>
            </div>
        </div>

    </div>
)
