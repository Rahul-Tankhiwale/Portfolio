import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaLink } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Expense Tracker',
    description: 'Full-stack personal finance dashboard enabling users to track, categorize, and visualize expenses in real-time. Features interactive data visualizations with Chart.js and Recharts for spending trends, category distributions, and budget comparisons.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Recharts'],
    github: 'https://github.com/rahul-tankhiwale/expense-tracker',
    demo: 'https://test-folder-two.vercel.app/login',
    image: '',
    liveDemo: true
  },
  {
    title: 'TaskFlow',
    description: 'Task management application built with React and Tailwind CSS. Features priority-based tasks with visual indicators, filtering, client-side persistence using LocalStorage, and enhanced UX with keyboard shortcuts and animations.',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'LocalStorage', 'Framer Motion'],
    github: 'https://github.com/rahul-tankhiwale/taskflow',
    demo: 'https://task-flow-psi-lilac.vercel.app/',
    image: '',
    liveDemo: true
  },
  {
    title: 'Knowledge Graph from Documents',
    description: 'ML-based system for creating knowledge graphs from unstructured documents. Developed during Techgium Hackathon (6th Edition) to extract relationships and entities from text data.',
    tech: ['Machine Learning', 'Python', 'NLP', 'Knowledge Graphs', 'Document Processing'],
    github: '#',
    demo: '#',
    image: '',
    liveDemo: false
  }
];

const Projects = ({ theme }) => {
  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '80px 40px',
      background: theme === 'dark' ? 'rgba(10,10,10,0.6)' : 'rgba(245,245,245,0.6)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '30px'
        }}>
          {projectsData.map((project, index) => (
            <div
              key={index}
              style={{
                background: 'var(--card-bg)',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(108, 99, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{
                  fontSize: '3rem'
                }}>
                  {project.image}
                </div>
                {project.liveDemo && (
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    background: '#6c63ff20',
                    color: '#6c63ff',
                    border: '1px solid #6c63ff40'
                  }}>
                    
                  </span>
                )}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                {project.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '20px',
                flex: 1
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '20px'
              }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      background: 'rgba(108, 99, 255, 0.1)',
                      color: '#6c63ff',
                      fontWeight: '500',
                      border: '1px solid rgba(108, 99, 255, 0.15)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                gap: '16px',
                paddingTop: '16px',
                borderTop: '1px solid var(--card-border)'
              }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#6c63ff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  <FaGithub /> Code
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#6c63ff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                {project.demo === '#' && (
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    opacity: 0.5
                  }}>
                    <FaExternalLinkAlt /> Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
