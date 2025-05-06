import React, { useEffect } from 'react';

import './styles.scss';

interface NavigationProps {
    show: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ show }) => {

    function typeTitle(element: HTMLElement, callback?: () => void) {
        const fullText = element.dataset.text || element.innerText;
        element.innerText = '';
        let index = 0;

        const interval = setInterval(() => {
            element.innerText += fullText[index];
            index++;
            if (index >= fullText.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 50);
    }

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({ behavior: 'smooth' });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.getElementById('link-' + id);
        if (activeLink) activeLink.classList.add('active');

        document.querySelectorAll('.section').forEach(s => {
            s.classList.remove('show');
            const img = s.querySelector('img');
            if (img) img.classList.remove('show');

            const h1 = s.querySelector('h1') as HTMLElement;
            const desc = s.querySelector('.description') as HTMLElement;
            if (h1 && h1.dataset.text) h1.innerText = h1.dataset.text;
            if (desc) desc.style.opacity = '0';
        });

        const img = section.querySelector('img');
        const title = section.querySelector('h1') as HTMLElement;
        const paragraph = section.querySelector('.description') as HTMLElement;

        if (img) img.classList.add('show');
        section.classList.add('show');

        setTimeout(() => {
            if (title) {
                typeTitle(title, () => {
                    if (paragraph) paragraph.style.opacity = '1';
                });
            }
        }, 500);
    };

    useEffect(() => {
        scrollToSection('info');
    }, []);

    return (
        <nav className={show ? 'show' : ''}>
            <a onClick={() => scrollToSection('info')} className="active">About Me</a>
            <a onClick={() => scrollToSection('experience')}>Experience</a>
            <a onClick={() => scrollToSection('education')}>Education</a>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
            <a onClick={() => scrollToSection('contactme')}>Contact Me</a>
        </nav>
    );
};

export default Navigation;