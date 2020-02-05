import React from 'react';

import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ContactCard } from './components/macroComponents/ContactCard';

import { TitleHead } from './components/macroComponents/TitleHead';
export const Contact = () => (
    <div>
        <TitleHead>CONTACT ME</TitleHead>

        <div className="container mt-5">
            <div className="row">
                <ContactCard Icon={faEnvelope} href="bajracharya.sushil01@gmail.com" />
                <ContactCard Icon={faLinkedin} href="https://www.linkedin.com/in/sushilbajracharya/" />
                <ContactCard Icon={faTwitter} href="https://twitter.com/SushilBajra11" />
            </div>
            <div className="row">
                Made By Sushil Bajracharya
            </div>
        </div>
    </div>
)