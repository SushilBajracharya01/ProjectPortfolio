import React from 'react';

import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ContactCard } from './components/macroComponents/ContactCard';

import { TitleHead } from './components/macroComponents/TitleHead';


export const Contact = () => (
    <div>
        <TitleHead>CONTACT ME</TitleHead>

        <div className="mt-5 container rounded">
            <p className="text-center text">
                Hi,<br/> Thank you for visiting my portfolio website, and<br/> If you like my Portfolio and want to connect with me 
            </p>
            <div className="mt-5 row">
                <ContactCard Icon={faEnvelope} link="bajracharya.sushil01@gmail.com" title="gmail"/>
                <ContactCard Icon={faLinkedin} href="https://www.linkedin.com/in/sushilbajracharya/" title="LinkedIn" />
                <ContactCard Icon={faTwitter} href="https://twitter.com/SushilBajra11" title="Twitter" />
                <ContactCard Icon={faFacebook} href="https://www.facebook.com/Sushil.Bajracharya01" title="Facebook" />
            </div>
        </div>
    </div>
)