import React from 'react';
import { TitleHead } from './components/macroComponents/TitleHead';
import Error404 from './assets/error404.png';


export const NoMatch = () => (
    <div className="px-3">
        <TitleHead>ERROR</TitleHead>

        <div className="container border rounded">

            <div className="row ProjectContainer errorContainer" style={{
                background: `url(${Error404})`
            }}>
                <div className="error">
                <TitleHead>ERROR 404</TitleHead>

                </div>
            </div>

        </div>
    </div>
)