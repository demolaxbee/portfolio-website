import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 1.5rem;
`;

const Location = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  background: ${props => props.primary ? props.theme.primary : 'transparent'};
  color: ${props => props.primary ? props.theme.background : props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  font-size: 1.5rem;
  color: ${props => props.theme.secondary};
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Obaleye Ademola
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Developer | Computer Science Student
        </Title>
        <Location
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Saskatoon, SK, Canada
        </Location>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Aspiring full-stack developer with a passion for clean code, problem-solving, and impactful tech solutions.
        </Description>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button 
            href="/demola-resume-it.pdf" 
            primary
            target="_blank"
            rel="noopener noreferrer"
            download="Obaleye_Ademola_Resume.pdf"
          >
            View & Download My Resume
          </Button>
        </ButtonGroup>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SocialIcon href="mailto:zyq049@usask.ca">
            <FaEnvelope />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/ademola-obaleye-8633242a9" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://github.com/demolaxbee" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 