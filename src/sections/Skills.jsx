import React, { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaServer,
  FaCss3Alt,
  FaHtml5,
  FaCode,
  FaCloud,
  FaTools
} from 'react-icons/fa';
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiJest,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase
} from 'react-icons/si';
import { motion, AnimatePresence } from 'motion/react';

const skillsData = {
  'Frontend': [
    {
      icon: <SiJavascript size={32} />,
      name: 'JavaScript',
      color: '#F7DF1E'
    },
    {
      icon: <SiTypescript size={32} />,
      name: 'TypeScript',
      color: '#3178C6'
    },
    {
      icon: <FaReact size={32} />,
      name: 'React.js',
      color: '#61DAFB'
    },
    {
      icon: <SiNextdotjs size={32} />,
      name: 'Next.js',
      color: '#000000'
    },
    {
      icon: <FaHtml5 size={32} />,
      name: 'HTML5',
      color: '#E34F26'
    },
    {
      icon: <FaCss3Alt size={32} />,
      name: 'CSS3',
      color: '#1572B6'
    },
    {
      icon: <SiTailwindcss size={32} />,
      name: 'Tailwind CSS',
      color: '#06B6D4'
    }
  ],
  'Backend': [
    {
      icon: <FaNodeJs size={32} />,
      name: 'Node.js',
      color: '#339933'
    },
    {
      icon: <SiExpress size={32} />,
      name: 'Express.js',
      color: '#000000'
    },
    {
      icon: <SiMongodb size={32} />,
      name: 'MongoDB',
      color: '#47A248'
    },
    {
      icon: <SiMysql size={32} />,
      name: 'MySQL',
      color: '#4479A1'
    },
    {
      icon: <FaServer size={32} />,
      name: 'REST APIs',
      color: '#00B4D8'
    }
  ],
  'DevOps & Cloud': [
    {
      icon: <FaDocker size={32} />,
      name: 'Docker',
      color: '#2496ED'
    }
  ],
  'Testing & Tools': [
    {
      icon: <SiPostman size={32} />,
      name: 'Postman',
      color: '#FF6C37'
    },
    {
      icon: <SiJest size={32} />,
      name: 'Jest',
      color: '#C21325'
    },
    {
      icon: <FaTools size={32} />,
      name: 'Tools',
      color: '#6C63FF'
    }
  ]
};

const categoryIcons = {
  'Frontend': <FaCode size={24} />,
  'Backend': <FaServer size={24} />,
  'DevOps & Cloud': <FaCloud size={24} />,
  'Testing & Tools': <FaTools size={24} />
};

const Skills = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Object.keys(skillsData)];

  const getFilteredSkills = () => {
    if (activeCategory === 'All') {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeCategory] || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '80px 40px',
      background: theme === 'dark' ? 'rgba(10,10,10,0.8)' : 'rgba(245,245,245,0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
       

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '10px 24px',
                borderRadius: '30px',
                border: activeCategory === category ? '2px solid #6c63ff' : '1px solid var(--card-border)',
                background: activeCategory === category ? 'rgba(108, 99, 255, 0.15)' : 'var(--card-bg)',
                color: activeCategory === category ? '#6c63ff' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.borderColor = '#6c63ff';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {category !== 'All' && categoryIcons[category]}
              {category}
              {category !== 'All' && (
                <span style={{
                  background: activeCategory === category ? 'rgba(108, 99, 255, 0.2)' : 'rgba(255,255,255,0.1)',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  {skillsData[category].length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px'
            }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                style={{
                  background: 'var(--card-bg)',
                  borderRadius: '20px',
                  padding: '24px',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--shadow)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(108, 99, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow)';
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '16px',
                  background: `${skill.color}20`,
                  color: skill.color,
                  fontSize: '28px'
                }}>
                  {skill.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: 0
                  }}>
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '40px',
          padding: '20px',
          background: 'var(--card-bg)',
          borderRadius: '16px',
          border: '1px solid var(--card-border)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6c63ff' }}>
              {Object.values(skillsData).flat().length}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Total Skills</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6c63ff' }}>
              {Object.keys(skillsData).length}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Categories</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6c63ff' }}>
              {skillsData.Frontend.length}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Frontend Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
