import React from 'react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack/ScrollStack';
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaSchool, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaAward,
  FaStar,
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
    icon: <FaGraduationCap size={40} />,
    color: '#6c63ff'
  },
  {
    institution: 'Saraswati Bhuvan Education Society Junior College ',
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
    icon: <FaSchool size={40} />,
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
    icon: <FaBookOpen size={40} />,
    color: '#fdcb6e'
  }
];

const Education = ({ theme }) => {
  return (
    <section id="education" style={{
      minHeight: '80vh',
      padding: '80px 30px',
      background: theme === 'dark' ? 'rgba(10,10,10,0.8)' : 'rgba(245,245,245,0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and achievements
          </p>
        </motion.div>

        <div style={{
          height: '80vh',
          maxHeight: '800px',
          width: '100%',
          marginTop: '30px'
        }}>
          <ScrollStack
            itemDistance={100}
            itemScale={0.02}
            itemStackDistance={30}
            stackPosition="25%"
            scaleEndPosition="15%"
            baseScale={0.85}
            rotationAmount={0.5}
            blurAmount={2}
          >
            {educationData.map((edu, index) => (
              <ScrollStackItem
                key={index}
                itemClassName=""
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '250px',
                    background: 'var(--card-bg)',
                    borderRadius: '40px',
                    padding: '35px 40px',
                    border: `2px solid ${edu.color}30`,
                    boxShadow: 'var(--shadow)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative gradient background */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: `${edu.color}10`,
                    pointerEvents: 'none'
                  }} />

                  {/* Header with icon and type badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: `${edu.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: edu.color,
                        fontSize: '28px'
                      }}>
                        {edu.icon}
                      </div>
                      <div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{
                            fontSize: '1.8rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)'
                          }}>
                            {edu.institution}
                          </span>
                          <span style={{
                            padding: '4px 14px',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            background: `${edu.color}20`,
                            color: edu.color,
                            border: `1px solid ${edu.color}30`
                          }}>
                            {edu.type === 'university' ? 'University' : edu.type === 'college' ? 'College' : 'School'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Degree and details */}
                  <div style={{
                    flex: 1,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      marginBottom: '12px'
                    }}>
                      {edu.degree}
                    </h3>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '20px',
                      marginBottom: '16px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem'
                      }}>
                        <FaCalendarAlt style={{ color: edu.color }} />
                        <span>{edu.period}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem'
                      }}>
                        <FaMapMarkerAlt style={{ color: edu.color }} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* CGPA/Percentage with visual indicator */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '8px 20px',
                      borderRadius: '12px',
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}25`,
                      marginBottom: '16px'
                    }}>
                      <FaTrophy style={{ color: edu.color }} />
                      <span style={{
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)'
                      }}>
                        {edu.cgpa || edu.percentage || '90%+'}
                      </span>
                      <span style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem'
                      }}>
                        {edu.cgpa ? 'CGPA' : edu.percentage ? 'Percentage' : 'Grade'}
                      </span>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div style={{
                        marginTop: '8px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '8px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.9rem',
                          fontWeight: '600'
                        }}>
                          <FaAward style={{ color: edu.color }} />
                          <span>Key Achievements</span>
                        </div>
                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0
                        }}>
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                padding: '4px 0',
                                paddingLeft: '8px'
                              }}
                            >
                              <span style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: edu.color,
                                display: 'inline-block'
                              }} />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Decorative elements */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-30px',
                    fontSize: '120px',
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

        {/* Quick Stats */}
       
      </div>
    </section>
  );
};

export default Education;