import React, { useState, useEffect } from 'react';
import RotatingText from '../components/RotatingText/RotatingText';
import Hyperspeed from '../components/Hyperspeed/Hyperspeed';
import { FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { motion } from 'motion/react';

const Hero = ({ theme, toggleTheme }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const isDark = theme === 'dark';

  const roles = [
    'Full Stack Web Developer',
    'React.js Developer',
    'Problem Solver',
    'Creative Thinker'
  ];

  // Typing effect
  useEffect(() => {
    if (isHovering) return;

    const currentText = roles[textIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % roles.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, isHovering]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      position: 'relative',
      zIndex: 2,
      overflow: 'hidden',
      background: isDark ? 'rgba(10,10,10,0.7)' : 'rgba(245,245,245,0.85)',
      backdropFilter: 'blur(2px)',
      width: '100%'
    }}>
      {/* Hyperspeed Background - Only visible in dark mode */}
      <Hyperspeed isVisible={isDark} />

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px',
          color: 'var(--text-primary)',
          transition: 'all 0.3s ease',
          boxShadow: 'var(--shadow)'
        }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </motion.button>

      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '900px',
        position: 'relative',
        zIndex: 1,
        padding: '0 15px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: 'clamp(2.2rem, 8vw, 5rem)',
            fontWeight: '800',
            marginBottom: '10px',
            color: 'var(--text-primary)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Hi, I'm
            <br />
            <span style={{ color: 'var(--accent)' }}>Rahul Tankhiwale</span>
          </h1>
        </motion.div>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 2rem)',
            marginBottom: '20px',
            color: 'var(--text-secondary)',
            minHeight: 'clamp(50px, 8vh, 70px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span style={{ color: 'var(--accent)' }}>✦</span>
          <span style={{ position: 'relative' }}>
            {isHovering ? (
              <RotatingText
                texts={roles}
                mainClassName="justify-center"
                staggerFrom="first"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-120%', opacity: 0 }}
                staggerDuration={0.03}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={1500}
              />
            ) : (
              <span style={{ position: 'relative' }}>
                {displayText}
                <span style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.2em',
                  backgroundColor: 'var(--accent)',
                  marginLeft: '2px',
                  animation: 'blink 0.7s infinite'
                }} />
              </span>
            )}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            marginBottom: '30px',
            lineHeight: '1.8',
            padding: '0 10px'
          }}
        >
          Results-driven Full Stack Web Developer with experience in designing, developing, testing, and maintaining 
          scalable web applications. Skilled in ReactJS, Node.js, SQL, and RESTful APIs, with strong analytical and 
          problem-solving abilities.
        </motion.p>

        {/* Contact Info Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '30px',
            padding: '12px 20px',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '750px',
            background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
          }}
        >
          <motion.div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.8rem, 0.9vw, 0.9rem)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope style={{ color: 'var(--accent)' }} />
            <span>rahultankhiwale14@gmail.com</span>
          </motion.div>
          <motion.div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.8rem, 0.9vw, 0.9rem)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone style={{ color: 'var(--accent)' }} />
            <span>+91-7875398831</span>
          </motion.div>
          <motion.div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.8rem, 0.9vw, 0.9rem)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <FaMapMarkerAlt style={{ color: 'var(--accent)' }} />
            <span>Pune, Maharashtra</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '600px'
          }}
        >
          <motion.button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              flex: '1 1 auto',
              minWidth: '140px'
            }}
          >
            View My Work
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              flex: '1 1 auto',
              minWidth: '140px'
            }}
          >
            Get In Touch
          </motion.button>
          <motion.a 
            href="https://drive.google.com/file/d/1OGuVOPQxfaw0JZ0l37mn1cz7_ElfJDg_/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              flex: '1 1 auto',
              minWidth: '140px'
            }}
          >
            <FaDownload size={16} />
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <motion.a 
            href="https://github.com/rahul-tankhiwale" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(24px, 3vw, 28px)', 
              transition: 'color 0.3s' 
            }}
            whileHover={{ scale: 1.2, color: 'var(--accent)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/rahul-tankhiwale-5a91b9213" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(24px, 3vw, 28px)', 
              transition: 'color 0.3s' 
            }}
            whileHover={{ scale: 1.2, color: 'var(--accent)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(24px, 3vw, 28px)', 
              transition: 'color 0.3s' 
            }}
            whileHover={{ scale: 1.2, color: 'var(--accent)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
