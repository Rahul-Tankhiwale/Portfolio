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

  useEffect(() => {
    const getVisitorCount = () => {
      const stored = localStorage.getItem('visitorCount');
      return stored ? parseInt(stored, 10) : 0;
    };
    setVisitorCount(getVisitorCount());
  }, []);

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
      padding: '80px 20px',
      background: theme === 'dark' ? 'var(--bg-primary)' : 'var(--bg-primary)',
      width: '100%'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '30px' }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together and create something amazing.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '40px',
          marginTop: '30px',
          width: '100%'
        }}>
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            {/* Contact Items */}
            {[
              { icon: <FaUser />, label: 'Name', value: 'Rahul Tankhiwale' },
              { icon: <FaEnvelope />, label: 'Email', value: 'rahultankhiwale5@gmail.com' },
              { icon: <FaPhone />, label: 'Phone', value: '+91-XXXXX-XXXX' },
              { icon: <FaComment />, label: 'Message', value: "I'll respond within 24 hours" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: 'var(--accent)',
                  boxShadow: '0 4px 20px var(--accent-bg)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  minWidth: '48px',
                  borderRadius: '50%',
                  background: 'var(--accent-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontSize: '18px'
                }}>
                  {item.icon}
                </div>
                <div style={{ textAlign: 'left', minWidth: 0 }}>
                  <h4 style={{
                    color: 'var(--text-h)',
                    marginBottom: '2px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {item.label}
                  </h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    wordBreak: 'break-word'
                  }}>
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Links + Visitor Counter */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginTop: '10px',
              paddingTop: '20px',
              borderTop: `1px solid var(--border)`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center'
                }}>
                  <motion.a 
                    href="https://github.com/rahul-tankhiwale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '22px', 
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
                      fontSize: '22px', 
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
                      fontSize: '22px', 
                      transition: 'color 0.3s' 
                    }}
                    whileHover={{ scale: 1.2, color: 'var(--accent)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTwitter />
                  </motion.a>
                </div>

                {/* Visitor Counter */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    background: 'var(--accent-bg)',
                    border: '1px solid var(--accent-border)'
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
                      background: 'var(--accent)'
                    }}
                  />
                  <FaUsers style={{ color: 'var(--accent)', fontSize: '12px' }} />
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: 'var(--text-h)'
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
              gap: '16px'
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                borderColor: error && !formData.name ? '#ff6b6b' : undefined
              }}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                borderColor: error && !formData.email ? '#ff6b6b' : undefined
              }}
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
            />
            
            <textarea
              name="message"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                borderColor: error && !formData.message ? '#ff6b6b' : undefined,
                minHeight: '120px'
              }}
            />

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
                    fontSize: '0.9rem',
                    textAlign: 'center'
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
                position: 'relative'
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
    </section>
  );
};

export default Contact;
