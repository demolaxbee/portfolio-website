import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.background};
`;

const ExperienceContainer = styled.div`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: ${props => props.theme.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
    transition: left 0.3s ease;

    @media (max-width: 768px) {
      left: 30px;
      margin-left: 0;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    top: 15px;
    z-index: 1;
  }

  &:nth-child(odd)::after {
    right: -10px;
  }

  &:nth-child(even)::after {
    left: -10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0 !important;
    padding-left: 70px;
    padding-right: 25px;

    &:nth-child(even) {
      left: 0;
    }

    &::after {
      left: 20px !important;
      right: auto;
    }

    &:nth-child(odd)::after {
      left: 20px;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: ${props => props.theme.cardBg};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.border};
`;

const Company = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Role = styled.h4`
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Duration = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Description = styled.ul`
  color: ${props => props.theme.text};
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

const DescriptionItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const Experience = () => {
  const experiences = [
    {
      company: 'MTN Nigeria',
      role: 'IT Intern',
      duration: "January 2021 - August 2021",
      description: [
        'Supported IT infrastructure setup and maintenance',
        'Assisted in cybersecurity tasks and system monitoring',
        'Collaborated with team members on various IT projects',
      ],
    },
    {
      company: 'Flutterwave',
      role: 'Research Assistant',
      duration: "August 2021 - December 2021",
      description: [
        'Conducted data analysis for product innovation',
        'Created pitch decks for potential investors',
        'Researched market trends and competitor analysis',
      ],
    },
    {
      company: 'Ash & Alder',
      role: 'Landscaper',
      duration: "May 2024 - August 2024",
      description: [
        'Led outdoor project teams in various landscaping tasks',
        'Demonstrated strong teamwork and reliability',
        'Managed project timelines and resource allocation',
      ],
    },
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <Company>{exp.company}</Company>
                <Role>{exp.role}</Role>
                <Duration>{exp.duration}</Duration>
                <Description>
                  {exp.description.map((item, i) => (
                    <DescriptionItem key={i}>{item}</DescriptionItem>
                  ))}
                </Description>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience; 