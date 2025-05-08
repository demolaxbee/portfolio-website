import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.background};
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.cardBg};
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid ${props => props.theme.border};
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillItem = styled(motion.div)`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.background};
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.border};
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Tools',
      skills: [
        'Java',
        'Python',
        'JavaScript',
        'HTML',
        'CSS',
        'Git',
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        'React',
        'Node.js',
        'Spring Boot',
        'JavaFX',
        'JWT',
        'MySQL',
      ],
    },
    {
      title: 'Concepts',
      skills: [
        'OOP',
        'Data Structures',
        'Algorithms',
        'Design Patterns',
        'UML',
        'Cybersecurity',
        'ML Basics',
        'Agile Methodology'
      ],
    },
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 