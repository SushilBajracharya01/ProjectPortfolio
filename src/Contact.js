import React from 'react';

import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ContactCard } from './components/macroComponents/ContactCard';

import { TitleHead } from './components/macroComponents/TitleHead';


export const Contact = () => (
    <div className="px-3">
        <TitleHead>CONTACT <span style={{ color: '#3377ff' }}>ME</span></TitleHead>

        <div className="mt-5 container rounded">
            <p className="text-center text">
                Hi,<br/> Thank you for visiting my portfolio website, and<br/> If you like my Portfolio and want to connect with me 
            </p>
            <div className="mt-5 row border rounded pt-3">
                <ContactCard Icon={faEnvelope} link="bajracharya.sushil01@gmail.com" title="gmail"/>
                <ContactCard Icon={faLinkedin} href="https://www.linkedin.com/in/sushilbajracharya/" title="LinkedIn" />
                <ContactCard Icon={faTwitter} href="https://twitter.com/SushilBajra11" title="Twitter" />
                <ContactCard Icon={faFacebook} href="https://www.facebook.com/Sushil.Bajracharya01" title="Facebook" />
            </div>
            <p className="text-center text mt-5">
                Thank You <span role="img" aria-label="smile">&#128522;</span>
            </p>
        </div>
    </div>
)