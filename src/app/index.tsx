import React, { useEffect, useState } from 'react';
import Intro from './components/intro';
import Navigation from './components/navigation';
import AboutMe from './components/about';
import ContactMe from './components/contactme';
import Skills from './components/skills';
import Exprience from './components/exprience';
import Education from './components/education';

import './styles.scss';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);

      setTimeout(() => {
        setShowNav(true);
      }, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? <Intro /> :
        <div id="main-content">
          <Navigation show={showNav} />
          <div className="content" id="content">
            <div id="info" className="section">
              <AboutMe />
            </div>
            <div id="experience" className="section">
              <Exprience />
            </div>
            <div id="education" className="section">
              <Education />
            </div>
            <div id="skills" className="section">
              <Skills />
            </div>
            <div id="contactme" className="section">
              <ContactMe />
            </div>
          </div>
        </div>
      }
    </>
  )
};

export default App;