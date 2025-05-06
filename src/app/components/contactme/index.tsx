import React from 'react';

import './styles.scss';

const ContactMe: React.FC = () => {

    return (
        <>
            <h1>Contact Me</h1>
            <div className="description">
                <ul>
                    <li>
                        <a href="tel:6047718944">Phone: 604-771-8944</a>
                    </li>
                    <li>
                        <a href="mailto:reza.madankar@yahoo.com">Email: reza.madankar@yahoo.com</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/reza-madankar-64720680" target="_blank" rel="noopener noreferrer">
                            LinkedIn: View Profile
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactMe;