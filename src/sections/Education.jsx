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
    icon: <FaGraduationCap size={36} />,
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
    icon: <FaSchool size={36} />,
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
    icon: <FaBookOpen size={36} />,
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
            My academic journey and achievements
          </p>
        </motion.div>

        <div style={{
          height: '70vh',
          maxHeight: '700px',
          minHeight: '400px',
          width: '100%',
          marginTop: '20px',
          position: 'relative'
        }}>
          <ScrollStack
            itemDistance={80}
            itemScale={0.02}
            itemStackDistance={20}
            stackPosition="25%"
            scaleEndPosition="15%"
            baseScale={0.88}
            rotationAmount={0.3}
            blurAmount={1.5}
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
                    minHeight: '220px',
                    background: theme === 'dark' ? '#1f2028' : '#ffffff',
                    borderRadius: '30px',
                    padding: 'clamp(20px, 3vw, 35px)',
                    border: `2px solid ${edu.color}30`,
                    boxShadow: 'var(--shadow)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Decorative gradient */}
                  <div style={{
                    position: 'absolute',
                    top: '-40%',
                    right: '-20%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: `${edu.color}08`,
                    pointerEvents: 'none'
                  }} />

                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                    position: 'relative',
                    zIndex: 1,
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      flex: 1,
                      minWidth: '200px'
                    }}>
                      <div style={{
                        width: 'clamp(44px, 5vw, 56px)',
                        height: 'clamp(44px, 5vw, 56px)',
                        borderRadius: '14px',
                        background: `${edu.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: edu.color,
                        fontSize: 'clamp(20px, 2.5vw, 28px)',
                        flexShrink: 0
                      }}>
                        {edu.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{
                          fontSize: 'clamp(1rem, 1.4vw, 1.5rem)',
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
                          padding: '2px 12px',
                          borderRadius: '16px',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          background: `${edu.color}20`,
                          color: edu.color,
                          border: `1px solid ${edu.color}30`,
                          marginTop: '4px'
                        }}>
                          {edu.type === 'university' ? 'University' : edu.type === 'college' ? 'College' : 'School'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div style={{
                    flex: 1,
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <h4 style={{
                      fontSize: 'clamp(0.95rem, 1.2vw, 1.2rem)',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {edu.degree}
                    </h4>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginBottom: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)'
                      }}>
                        <FaCalendarAlt style={{ color: edu.color, fontSize: '14px' }} />
                        <span>{edu.period}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)'
                      }}>
                        <FaMapMarkerAlt style={{ color: edu.color, fontSize: '14px' }} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* CGPA/Percentage */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '4px 16px',
                      borderRadius: '10px',
                      background: `${edu.color}12`,
                      border: `1px solid ${edu.color}20`,
                      width: 'fit-content',
                      marginBottom: '8px'
                    }}>
                      <FaTrophy style={{ color: edu.color, fontSize: '16px' }} />
                      <span style={{
                        fontWeight: '700',
                        fontSize: 'clamp(0.95rem, 1vw, 1.1rem)',
                        color: 'var(--text-h)'
                      }}>
                        {edu.cgpa || edu.percentage || '90%+'}
                      </span>
                      <span style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.75rem'
                      }}>
                        {edu.cgpa ? 'CGPA' : edu.percentage ? 'Percentage' : 'Grade'}
                      </span>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div style={{
                        marginTop: '4px',
                        display: 'block'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginBottom: '4px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          fontWeight: '600'
                        }}>
                          <FaAward style={{ color: edu.color, fontSize: '14px' }} />
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
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--text-secondary)',
                                fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)',
                                padding: '2px 0'
                              }}
                            >
                              <span style={{
                                width: '5px',
                                height: '5px',
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
                    bottom: '-20px',
                    right: '-20px',
                    fontSize: 'clamp(60px, 8vw, 100px)',
                    opacity: 0.05,
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
