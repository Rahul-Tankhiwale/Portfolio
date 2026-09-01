import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaSpinner, FaUser, FaComment, FaUsers } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);

  // Get visitor count
  useEffect(() => {
    const getVisitorCount = () => {
      const stored = localStorage.getItem('visitorCount');
      return stored ? parseInt(stored, 10) : 0;
    };
    setVisitorCount(getVisitorCount());
  }, []);

  // Replace with your SheetDB API URL
  const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/z6dztgwobt6xu';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(SHEETDB_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone || 'Not provided',
            Message: formData.message,
            Timestamp: new Date().toLocaleString('en-US', {
              timeZone: 'Asia/Kolkata',
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })
          }]
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{
      minHeight: '100vh',
      padding: '80px 40px',
      background: theme === 'dark' ? 'rgba(10,10,10,0.8)' : 'rgba(245,245,245,0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>Get In Touch</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Have a project in mind? Let's work together and create something amazing.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '50px',
          marginTop: '50px'
        }}>
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}
          >
            {/* Name */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(108, 99, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6c63ff',
                fontSize: '20px'
              }}>
                <FaUser />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Name</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}></p>
              </div>
            </div>

            {/* Email */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(108, 99, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6c63ff',
                fontSize: '20px'
              }}>
                <FaEnvelope />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Email</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}></p>
              </div>
            </div>

            {/* Phone */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(108, 99, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6c63ff',
                fontSize: '20px'
              }}>
                <FaPhone />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Phone</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+91-XXXXX-XXXX</p>
              </div>
            </div>

            {/* Message */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(108, 99, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6c63ff',
                fontSize: '20px'
              }}>
                <FaComment />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Write Your Message</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>I'll respond within 24 hours</p>
              </div>
            </div>

            {/* Social Links + Visitor Counter - Combined in one line */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
         
              gap: '12px',
              marginTop: '10px',
              paddingTop: '20px',
              borderTop: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
            }}>
              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}>
                <motion.a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '22px', 
                    transition: 'color 0.3s' 
                  }}
                  whileHover={{ scale: 1.2, color: '#6c63ff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://github.com/rahul-tankhiwale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '22px', 
                    transition: 'color 0.3s' 
                  }}
                  whileHover={{ scale: 1.2, color: '#6c63ff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/rahul-tankhiwale-5a91b9213"  
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '22px', 
                    transition: 'color 0.3s' 
                  }}
                  whileHover={{ scale: 1.2, color: '#6c63ff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </motion.a>
              </div>

              {/* Visitor Counter on the same line */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(108, 99, 255, 0.08)',
                  border: '1px solid rgba(108, 99, 255, 0.1)'
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#6c63ff'
                  }}
                />
                <FaUsers style={{ color: '#6c63ff', fontSize: '12px' }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: 'var(--text-primary)'
                }}>
                  {visitorCount.toLocaleString()}
                </span>
                <span style={{
                  fontSize: '9px',
                  color: 'var(--text-secondary)',
                  opacity: 0.6
                }}>
                  visitors
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.form 
            onSubmit={handleSubmit} 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: error && !formData.name ? '2px solid #ff6b6b' : '1px solid var(--card-border)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#6c63ff'}
                onBlur={(e) => {
                  if (!error) e.currentTarget.style.borderColor = 'var(--card-border)';
                }}
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: error && !formData.email ? '2px solid #ff6b6b' : '1px solid var(--card-border)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#6c63ff'}
                onBlur={(e) => {
                  if (!error) e.currentTarget.style.borderColor = 'var(--card-border)';
                }}
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: '1px solid var(--card-border)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#6c63ff'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: error && !formData.message ? '2px solid #ff6b6b' : '1px solid var(--card-border)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#6c63ff'}
                onBlur={(e) => {
                  if (!error) e.currentTarget.style.borderColor = 'var(--card-border)';
                }}
              />
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: '#ff6b6b20',
                    border: '1px solid #ff6b6b',
                    color: '#ff6b6b',
                    fontSize: '0.9rem'
                  }}
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
              style={{
                width: '100%',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner style={{ animation: 'spin 1s linear infinite' }} />
                  Sending...
                </>
              ) : isSubmitted ? (
                '✓ Message Sent!'
              ) : (
                'Send Message'
              )}
            </button>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: '#00b89420',
                    border: '1px solid #00b894',
                    color: '#00b894',
                    textAlign: 'center',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                >
                  🎉 Thank you! Your message has been sent successfully. I'll get back to you soon!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
