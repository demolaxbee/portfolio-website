import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.background};
`;

const EducationContainer = styled.div`
  max-width: 800px;
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

const EducationCard = styled(motion.div)`
  background: ${props => props.theme.cardBg};
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid ${props => props.theme.border};
`;

const SchoolHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SchoolIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
`;

const SchoolInfo = styled.div`
  flex: 1;
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const Degree = styled.h4`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 0.9rem;
`;

const CoursesList = styled.div`
  margin-top: 1.5rem;
`;

const CoursesTitle = styled.h5`
  color: ${props => props.theme.primary};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const CourseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CourseTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${props => props.theme.background};
  border-radius: 15px;
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
`;

const Education = () => {
  const education = {
    school: 'University of Saskatchewan',
    degree: 'B.Sc. Computer Science',
    duration: 'September 2022 – Present',
    courses: [
      'Object-Oriented Programming',
      'Data Structures',
      'Full-Stack Web Development',
      'Linear Algebra',
      'Software Engineering',
      'Database Systems',
    ],
  };

  return (
    <EducationSection id="education">
      <EducationContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </SectionTitle>
        <EducationCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SchoolHeader>
            <SchoolIcon>
              <FaGraduationCap />
            </SchoolIcon>
            <SchoolInfo>
              <SchoolName>{education.school}</SchoolName>
              <Degree>{education.degree}</Degree>
              <Duration>{education.duration}</Duration>
            </SchoolInfo>
          </SchoolHeader>
          <CoursesList>
            <CoursesTitle>Relevant Courses</CoursesTitle>
            <CourseTags>
              {education.courses.map((course) => (
                <CourseTag key={course}>{course}</CourseTag>
              ))}
            </CourseTags>
          </CoursesList>
        </EducationCard>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education; 