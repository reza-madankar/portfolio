import React from 'react';

import './styles.scss';

const Intro: React.FC = () => {
    return (<div className="intro">

        <svg viewBox="0 0 400 150" className="mrm">
            <g transform="translate(50, 0)">
                <text x="0" y="100" className="text-fill">M</text>
                <text x="100" y="100" className="text-fill">R</text>
                <text x="200" y="100" className="text-fill">M</text>
            </g>

            <g transform="translate(50, 0)">
                <text x="0" y="100" className="text-outline animateM">M</text>
                <text x="100" y="100" className="text-outline animateR">R</text>
                <text x="200" y="100" className="text-outline animateM2">M</text>
            </g>
        </svg>
        <svg viewBox="-2015 -2000 4030 4030" xmlns="http://www.w3.org/2000/svg" className="leaf">
            <path
                d="m -83.07695,1875 41.53847,-796.6154 A 87.692308,87.692308 0 0 0 -144.00002,987.92308 L -936.9231,1127.3077 -829.84618,831.92308 a 60,60 0 0 0 -18.46154,-67.38462 L -1716.9231,61.153846 -1521.2308,-30.23077 a 60,60 0 0 0 31.3846,-72.92308 l -171.6923,-528 L -1161.2308,-525 a 60,60 0 0 0 67.3846,-35.07692 l 96.9231,-228 L -606.46156,-369 a 60,60 0 0 0 102.46154,-52.61538 l -188.3077,-971.07692 301.84616,174.4615 a 60,60 0 0 0 84,-24.923 L -2e-5,-1845 l 306.46154,601.8462 a 60,60 0 0 0 84,24.923 l 301.84615,-174.4615 -188.30769,971.07692 A 60,60 0 0 0 606.46152,-369 l 390.46153,-419.07692 96.92305,228 A 60,60 0 0 0 1161.2307,-525 l 500.3077,-106.15385 -171.6923,528 a 60,60 0 0 0 31.3846,72.92308 L 1716.9231,61.153846 848.30767,764.53846 a 60,60 0 0 0 -18.46154,67.38462 L 936.92305,1127.3077 143.99998,987.92308 A 87.692308,87.692308 0 0 0 41.53844,1078.3846 L 83.0769,1875 Z" />
        </svg>
    </div>);
};

export default Intro;