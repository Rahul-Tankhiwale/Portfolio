import React, { useState, useEffect } from 'react';
import { FaUsers, FaEye } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

const VisitorCounter = ({ theme }) => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const getVisitorCount = () => {
      const stored = localStorage.getItem('visitorCount');
      return stored ? parseInt(stored, 10) : 0;
    };

    const hasVisited = sessionStorage.getItem('hasVisited');
    let currentCount = getVisitorCount();
    
    if (!hasVisited) {
      currentCount += 1;
      localStorage.setItem('visitorCount', currentCount.toString());
      sessionStorage.setItem('hasVisited', 'true');
    }
    
    setVisitorCount(currentCount);
  }, []);

  // Auto-hide after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 2
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 20,
            transition: { duration: 0.3 }
          }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999,
            background: theme === 'dark' ? 'rgba(10, 10, 20, 0.85)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            padding: '8px 14px',
            borderRadius: '30px',
            border: `1px solid ${theme === 'dark' ? 'rgba(108, 99, 255, 0.2)' : 'rgba(108, 99, 255, 0.2)'}`,
            boxShadow: '0 4px 20px rgba(108, 99, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'all 0.3s ease'
          }}
          onClick={toggleVisibility}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 8px 30px rgba(108, 99, 255, 0.25)',
            border: '1px solid rgba(108, 99, 255, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#6c63ff',
              position: 'absolute',
              top: '-3px',
              right: '-3px'
            }}
          />
          
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(108, 99, 255, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6c63ff',
            fontSize: '12px'
          }}>
            <FaUsers />
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px'
          }}>
            <motion.span
              key={visitorCount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: 'var(--text-primary)',
                lineHeight: '1'
              }}
            >
              {visitorCount.toLocaleString()}
            </motion.span>
            <span style={{
              fontSize: '10px',
              color: 'var(--text-secondary)',
              opacity: 0.6,
              fontWeight: '500'
            }}>
              visitors
            </span>
          </div>

          {/* Tooltip on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 8px)',
                  right: '0',
                  background: theme === 'dark' ? 'rgba(10, 10, 20, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  border: '1px solid rgba(108, 99, 255, 0.2)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <FaEye style={{ marginRight: '4px', fontSize: '10px', color: '#6c63ff' }} />
                Click to {isVisible ? 'hide' : 'show'}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VisitorCounter;