import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.background};
`;

const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.primary};
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: ${props => props.theme.primary};
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.text};
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
`;

const ContactText = styled.div`
  font-size: 1.1rem;
`;

const ContactLink = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.text};
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
  }
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.accent};
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.p`
  color: ${props => props.theme.primary};
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmission, setLastSubmission] = useState(null);
  const [errors, setErrors] = useState({});

  // Rate limiting check
  const canSubmit = () => {
    if (!lastSubmission) return true;
    const hoursSinceLastSubmission = (Date.now() - lastSubmission) / (1000 * 60 * 60);
    return hoursSinceLastSubmission >= 1 && submissionCount < 3;
  };

  // Input sanitization
  const sanitizeInput = (input) => {
    return input.replace(/[<>]/g, '');
  };

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name is too long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message is too long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!canSubmit()) {
      setStatus('error');
      setErrors({ submit: 'Too many submissions. Please try again later.' });
      return;
    }

    const formData = {
      name: sanitizeInput(e.target.name.value),
      email: sanitizeInput(e.target.email.value),
      message: sanitizeInput(e.target.message.value)
    };

    if (!validateForm(formData)) {
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setSubmissionCount(prev => prev + 1);
      setLastSubmission(Date.now());
      e.target.reset();
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrors({ submit: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </SectionTitle>
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <ContactLink href="mailto:zyq049@usask.ca">
                  zyq049@usask.ca
                </ContactLink>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaLinkedin />
              </ContactIcon>
              <ContactText>
                <ContactLink
                  href="https://www.linkedin.com/in/ademola-obaleye-8633242a9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </ContactLink>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaGithub />
              </ContactIcon>
              <ContactText>
                <ContactLink
                  href="https://github.com/demolaxbee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Profile
                </ContactLink>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>Saskatoon, SK, Canada</ContactText>
            </ContactItem>
          </ContactInfo>
          <ContactForm
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                maxLength={100}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                maxLength={100}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                required
                maxLength={1000}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!canSubmit()}
            >
              Send Message
            </SubmitButton>
            {status === 'success' && <SuccessMessage>Message sent successfully!</SuccessMessage>}
            {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
          </ContactForm>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 