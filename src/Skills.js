import React from 'react';
import { TitleHead } from './components/macroComponents/TitleHead';
import { SkillCard } from './components/macroComponents/SkillCard';

import html from './assets/skills/html.png';
import css from './assets/skills/css.png';
import js from './assets/skills/js.png';
import bootstrap from './assets/skills/bootstrap.png';
import react from './assets/skills/react.png';
import github from './assets/skills/github.png';
import sass from './assets/skills/sass.png';
import xd from './assets/skills/xd.png';
import illustrator from './assets/skills/illustrator.png';
import mongodb from './assets/skills/mongodb.png';
import node from './assets/skills/node.png';
import next from './assets/skills/next.png';
import sql from './assets/skills/sql.png';


export const Skills = () => (
    <div className="px-3">
        <TitleHead>SKILLS</TitleHead>
        <div className="container border rounded">
            <div className="row ProjectContainer">
                <SkillCard name="Hyper Text Markup Language" href="https://developer.mozilla.org/en-US/docs/Web/HTML" icon={html} />
                <SkillCard name="Cascading Style Sheets" href="https://www.w3schools.com/css/" icon={css} />
                <SkillCard name="javascript" href="https://www.w3schools.com/js/" icon={js} />
                <SkillCard name="sass" href="https://sass-lang.com/" icon={sass} />
                <SkillCard name="bootstrap" href="https://getbootstrap.com/" icon={bootstrap} />
                <SkillCard name="react" href="https://reactjs.org/" icon={react} />
                <SkillCard name="next" href="https://nextjs.org/en/" icon={next} />
                <SkillCard name="mongodb" href="https://www.mongodb.com/" icon={mongodb} />
                <SkillCard name="sql" href="https://www.w3schools.com/sql/" icon={sql} />
                <SkillCard name="node" href="https://nodejs.org/en/" icon={node} />
                <SkillCard name="github" href="https://github.com/" icon={github} />
                <SkillCard name="adobe XD" href="https://www.adobe.com/products/xd.html" icon={xd} />
                <SkillCard name="adboe illustrator" href="https://www.adobe.com/products/illustrator/free-trial-download.html" icon={illustrator} />
            </div>
        </div>

    </div>
)