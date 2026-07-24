import React, { useState, useEffect } from 'react';
import Hyperspeed from './components/Hyperspeed/Hyperspeed';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import VisitorCounter from './components/VisitorCounter';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.style.background = theme === 'dark' ? '#0a0a0a' : '#b0d1f7';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`app ${theme}`}>
      {/* Hyperspeed Background - only visible in dark mode */}
      {theme === 'dark' && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.6,
          pointerEvents: 'none'
        }}>
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              colors: {
                roadColor: 0x1a1a2e,
                islandColor: 0x16213e,
                background: 0x0a0a0a,
                shoulderLines: 0x6c63ff,
                brokenLines: 0x6c63ff,
                leftCars: [0xff6b6b, 0x6c63ff, 0xff9f43],
                rightCars: [0x00d2ff, 0x6c63ff, 0x00b894],
                sticks: 0x6c63ff
              }
            }}
          />
        </div>
      )}

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero theme={theme} toggleTheme={toggleTheme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Education theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Visitor Counter */}
      <VisitorCounter theme={theme} />
    </div>
  );
};

export default App;