import React from 'react';

import './styles.scss';

const Skills: React.FC = () => {

    return (
        <>
            <h1>Skills</h1>
            <div className="description">
                <div className="skills-container">
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <h2>Front-End</h2>
                            </div>
                            <div className="card-back">
                                <p>HTML, JavaScript, ES6, TypeScript, ReactJs, Nextjs, Material UI, Bootstrap, Less, Sass</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <h2>Back-End</h2>
                            </div>
                            <div className="card-back">
                                <p>ASP.NET Core, .NET Framework, ASP.NET Web API, Node.js</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <h2>Database</h2>
                            </div>
                            <div className="card-back">
                                <p>SQL Server, Oracle, MongoDB, Redis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;