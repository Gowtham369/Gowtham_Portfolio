import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_49ov9zs',
        'template_i2n1a7i',
        e.target,
        'user_2xg7Ijvj5d4DbEOLiqS9Z'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: data?.email || 'gowthamravipati200@gmail.com',
      link: `mailto:${data?.email || 'gowthamravipati200@gmail.com'}`
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: data?.location?.city || data?.locationAsString || 'USA',
      link: null
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: '@gowtham369',
      link: data?.profiles?.find(p => p.network === 'GitHub')?.url || 'https://github.com/gowtham369'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', marginTop: '3rem' }}
        >
          <div>
            <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>Let's Work Together</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                      {info.title}
                    </div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div style={{ color: 'var(--text-muted)' }}>{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {data?.profiles?.map((profile, index) => (
                <a 
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: '1rem' }}
                >
                  {profile.network === 'GitHub' && <><FaGithub /> GitHub</>}
                  {profile.network === 'LinkedIn' && <><FaLinkedin /> LinkedIn</>}
                  {profile.network === 'Twitter' && <>Twitter</>}
                </a>
              ))}
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus === 'success' && (
              <div style={{ 
                background: 'var(--accent)', 
                color: 'white', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                marginBottom: '1rem' 
              }}>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div style={{ 
                background: '#ef4444', 
                color: 'white', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                marginBottom: '1rem' 
              }}>
                Something went wrong. Please try again.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%' }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
