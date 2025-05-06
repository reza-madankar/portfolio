import React from 'react';

import './styles.scss';

const AboutMe: React.FC = () => {

    return (
        <>
            <img src="resources/images/1.png" alt="Profile Image" className="headerImage" />
            <h1>Mohammad Reza Madankar</h1>
            <div className="description">
                <p>
                    Hello World! I'm a passionate software engineer from the beautiful city of Vancouver, Canada. I spend my
                    days
                    (and quite often, my nights too!) immersed in the fascinating world of code, weaving complex algorithms,
                    designing clean architectures, and creating intuitive user interfaces. But there's more to me than just
                    code.
                    <br />
                    I'm also a self-proclaimed coffeeholic! I believe that behind every successful piece of software is a
                    substantial amount of coffee. Whether I'm exploring local coffee shops or brewing a fresh cup at home,
                    you'll
                    often find me with a steaming mug in hand as I delve into my next coding adventure.
                    <br />
                    Welcome to my personal site, where I share my coding projects, technical insights, and occasionally, my
                    favorite coffee brews. Let's embark on this caffeinated coding journey together!
                    <br />
                    <br />
                </p>
                <a href="resources/file/madankar.pdf" download="mohammadrezamadankar-resume.pdf" target="_blank">
                    Check out my Resume</a>
            </div>
        </>
    );
};

export default AboutMe;