import React from 'react';

import './styles.scss';

const Education: React.FC = () => {

    return (
        <>
            <h1>Education</h1>
            <div className="description">
                <div>
                    <div>
                        <h2>Master Degree</h2>
                        <h3>Islamic Azad Univesity</h3>
                        <span>Computer/Information Technology Administration and Management </span>
                        <span>Apr 2018 - Oct 2020</span>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Bachelor Degree</h2>
                        <h3>Ghiyasedin Jamshid Kashani</h3>
                        <span>Software engineering</span>
                        <span>Apr 2018 - Oct 2020</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;