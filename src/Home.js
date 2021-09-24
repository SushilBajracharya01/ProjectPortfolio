import React from 'react';
import Typewriter from 'typewriter-effect';

import bgImg from './assets/home1-min.jpg';


const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${bgImg})`,
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}
export const Home = () => (

    <div style={bgStyle}>
        <div className="heading introduction">
            <div className="introTop text">
                Hi, I am
            </div>
            SUSHIL BAJRACHARYA
            <div className="introBottom text">
                <Typewriter
                    options={{
                        strings: ['Front-End Developer', 'CSIT Student'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    </div>

)
