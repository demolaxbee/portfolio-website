import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.background};
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.primary};
  position: relative;
  display: inline-block;

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

const AboutContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  color: ${props => props.theme.primary};
  font-weight: 600;
`;

const Interests = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const InterestTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.cardBg};
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
`;

const About = () => {
  const interests = [
    'Software Engineering',
    'Web Development',
    'Cybersecurity',
    'Machine Learning',
    'Agile Development',
    'Team Collaboration',
    'Futsal',
    'BasketBall',
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        <AboutContent
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AboutText>
            I'm a <Highlight>third-year Computer Science student</Highlight> at the University of Saskatchewan, 
            passionate about creating innovative solutions through technology. My journey in tech has 
            equipped me with a strong foundation in software development, with a particular focus on 
            web development and cybersecurity.
          </AboutText>
          <AboutText>
            Beyond coding, I'm deeply involved in <Highlight>team sports</Highlight>, currently serving as the 
            Vice-Captain of The Zeal Team (Futsal). This role has helped me develop strong leadership 
            and communication skills, which I bring to every project I work on.
          </AboutText>
          <AboutText>
            I'm constantly learning and exploring new technologies, with a keen interest in 
            <Highlight> scalable system design</Highlight> and <Highlight>clean code practices</Highlight>. 
            My goal is to create impactful solutions that make a difference in people's lives.
          </AboutText>
        </AboutContent>
        <Interests
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {interests.map((interest, index) => (
            <InterestTag
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {interest}
            </InterestTag>
          ))}
        </Interests>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 