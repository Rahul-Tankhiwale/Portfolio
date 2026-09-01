import React from 'react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack/ScrollStack';
import { 
  FaGraduationCap, 
  FaSchool, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaAward,
  FaTrophy,
  FaBookOpen
} from 'react-icons/fa';
import { motion } from 'motion/react';

const educationData = [
  {
    institution: 'Jawaharlal Nehru Engineering College, MGM University',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    period: 'Dec 2020 – Jun 2024',
    location: 'Chh. Sambhaji Nagar, Maharashtra',
    cgpa: '8.0/10',
    type: 'university',
    achievements: [
      'Participated in Hackathon – Techgium (6th Edition)',
      'Worked on ML-based Knowledge Graph creation from documents',
      'Active member of Publicity Team for college events'
    ],
    icon: <FaGraduationCap size={32} />,
    color: '#6c63ff'
  },
  {
    institution: 'Saraswati Bhuvan Education Society Junior College',
    degree: 'Higher Secondary Certificate (PCM)',
    period: 'Mar 2018 – Jun 2020',
    location: 'Chh. Sambhaji Nagar, Maharashtra',
    percentage: '76.62%',
    type: 'college',
    achievements: [
      'Active member of Publicity Team for college events',
      'Participated in various science exhibitions',
      'Selected for inter-college science competitions'
    ],
    icon: <FaSchool size={32} />,
    color: '#00b894'
  },
  {
    institution: 'Oyster English High School',
    degree: 'Secondary School Certificate (SSC)',
    period: 'Jun 2009 – Mar 2018',
    location: 'Chh. Sambhaji Nagar, Maharashtra',
    percentage: '75%+',
    type: 'school',
    achievements: [
      'Active participant in school events and competitions',
      'Strong foundation in Science and Mathematics',
      'Developed early interest in technology and computers'
    ],
    icon: <FaBookOpen size={32} />,
    color: '#fdcb6e'
  }
];

const Education = ({ theme }) => {
  return (
    <section id="education" style={{
      minHeight: '100vh',
      padding: '40px 20px',
      background: theme === 'dark' ? 'rgba(10,10,10,0.8)' : 'rgba(245,245,245,0.8)',
      backdropFilter: 'blur(10px)',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '0 15px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '30px' }}
        >
          <h2 className="section-title" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: 'var(--text-h)',
            marginBottom: '8px'
          }}>
            Education
          </h2>
          <p className="section-subtitle" style={{
            fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
            color: 'var(--text)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
          
          </p>
        </motion.div>

        <div style={{
          height: '65vh',
          maxHeight: '650px',
          minHeight: '350px',
          width: '100%',
          marginTop: '20px',
          position: 'relative'
        }}>
          <ScrollStack
            itemDistance={50}
            itemScale={0.015}
            itemStackDistance={15}
            stackPosition="30%"
            scaleEndPosition="20%"
            baseScale={0.9}
            rotationAmount={0.2}
            blurAmount={1}
          >
            {educationData.map((edu, index) => (
              <ScrollStackItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '200px',
                    background: theme === 'dark' ? '#1f2028' : '#ffffff',
                    borderRadius: '24px',
                    padding: 'clamp(16px, 2.5vw, 28px)',
                    border: `2px solid ${edu.color}30`,
                    boxShadow: 'var(--shadow)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative gradient */}
                  <div style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-15%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: `${edu.color}06`,
                    pointerEvents: 'none'
                  }} />

                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <div style={{
                      width: 'clamp(40px, 4vw, 48px)',
                      height: 'clamp(40px, 4vw, 48px)',
                      borderRadius: '12px',
                      background: `${edu.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: edu.color,
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      flexShrink: 0
                    }}>
                      {edu.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{
                        fontSize: 'clamp(0.9rem, 1.2vw, 1.3rem)',
                        fontWeight: '700',
                        color: 'var(--text-h)',
                        margin: 0,
                        lineHeight: 1.2,
                        wordBreak: 'break-word'
                      }}>
                        {edu.institution}
                      </h3>
                      <span style={{
                        display: 'inline-block',
                        padding: '2px 10px',
                        borderRadius: '12px',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                        background: `${edu.color}20`,
                        color: edu.color,
                        border: `1px solid ${edu.color}30`,
                        marginTop: '3px'
                      }}>
                        {edu.type === 'university' ? 'University' : edu.type === 'college' ? 'College' : 'School'}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div style={{
                    flex: 1,
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}>
                    <h4 style={{
                      fontSize: 'clamp(0.85rem, 1vw, 1.05rem)',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {edu.degree}
                    </h4>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '6px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)'
                      }}>
                        <FaCalendarAlt style={{ color: edu.color, fontSize: '12px' }} />
                        <span>{edu.period}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)'
                      }}>
                        <FaMapMarkerAlt style={{ color: edu.color, fontSize: '12px' }} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* CGPA/Percentage */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '3px 14px',
                      borderRadius: '8px',
                      background: `${edu.color}10`,
                      border: `1px solid ${edu.color}20`,
                      width: 'fit-content',
                      marginBottom: '6px'
                    }}>
                      <FaTrophy style={{ color: edu.color, fontSize: '14px' }} />
                      <span style={{
                        fontWeight: '700',
                        fontSize: 'clamp(0.85rem, 0.9vw, 1rem)',
                        color: 'var(--text-h)'
                      }}>
                        {edu.cgpa || edu.percentage || '90%+'}
                      </span>
                      <span style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.65rem'
                      }}>
                        {edu.cgpa ? 'CGPA' : edu.percentage ? 'Percentage' : 'Grade'}
                      </span>
                    </div>

                    {/* Achievements - Simplified for mobile */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div style={{
                        marginTop: '2px',
                        display: 'block'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          marginBottom: '3px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          <FaAward style={{ color: edu.color, fontSize: '12px' }} />
                          <span>Key Achievements</span>
                        </div>
                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px'
                        }}>
                          {edu.achievements.slice(0, 2).map((achievement, i) => (
                            <li
                              key={i}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: 'var(--text-secondary)',
                                fontSize: 'clamp(0.65rem, 0.7vw, 0.8rem)',
                                padding: '1px 0'
                              }}
                            >
                              <span style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                background: edu.color,
                                display: 'inline-block',
                                flexShrink: 0
                              }} />
                              <span style={{ wordBreak: 'break-word' }}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Decorative emoji */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-15px',
                    right: '-15px',
                    fontSize: 'clamp(50px, 6vw, 80px)',
                    opacity: 0.04,
                    color: edu.color,
                    pointerEvents: 'none'
                  }}>
                    {edu.type === 'university' ? '🎓' : edu.type === 'college' ? '📚' : '🏫'}
                  </div>
                </motion.div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default Education;
