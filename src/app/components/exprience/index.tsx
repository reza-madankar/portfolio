import React from 'react';

import './styles.scss';

const Exprience: React.FC = () => {

    return (
        <>
            <h1>Experience</h1>
            <div className="description">
                <div>
                    <img src="/resources/images/TTlogo.svg" />
                    <div>
                        <h2>Trading Terminal</h2>
                        <span>Senior Software Developer</span>
                        <span>Nov 2023 - Present</span>
                        <span>Software Engineer II</span>
                        <span>Jan 2021 - Nov 2023</span>
                    </div>
                </div>
                <div>
                    <img src="/resources/images//enbank.png" />
                    <div>
                        <h2>EN Bank</h2>
                        <span>Software Engineer II</span>
                        <span>Apr 2018 - Oct 2020</span>
                    </div>
                </div>
                <div>
                    <img src="/resources/images/navaco.jpg" />
                    <div>
                        <h2>Navaco</h2>
                        <span>Software Engineer II</span>
                        <span>Dec 2012 - Feb 2018</span>
           
                    </div>
                </div>
            </div>
        </>
    );
};

export default Exprience;