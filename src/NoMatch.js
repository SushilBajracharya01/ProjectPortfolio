import React from 'react';
import { TitleHead } from './components/macroComponents/TitleHead';
import Error404 from './assets/error404.svg';


export const NoMatch = () => (
    <div className="px-3">
        <TitleHead>ERROR</TitleHead>

        <div className="container border rounded">

            {/* <div className="row ProjectContainer errorBox" style={{
                background: `url(${Error404})`
            }}>
                <div className="error">
                    <div className="display-4 ">ERROR 404</div>
                    <p className="lead">Page Not Found</p>
                </div>
            </div> */}

            <div className="row ProjectContainer">
                <div className="m-auto">
                    <span className="d-flex justify-content-center">
                        <img src={Error404} alt="Error404" className="error404"/>
                    </span>
                    <div className="ErrorTxt text-center">
                        <div className="display-4">
                            Error 404
                        </div> 
                        <div className="lead">
                            Page Not Found
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)