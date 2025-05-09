import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.background};
`;

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.cardBg};
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.border};
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.secondary};
  font-size: 3rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.div`
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;

  ul {
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
    list-style: disc;
  }
`;


const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${props => props.theme.background};
  border-radius: 15px;
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.primary};
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.background};
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Study Hub',
      description: [
        'Developed a collaborative learning platform for students with Java and Spring Boot',
        'Implemented real-time collaboration tools',
        'Enabled resource sharing with persistent storage'
      ],      
      techStack: ['Java', 'Vaadin', 'Spring Boot'],
      github: 'https://github.com/demolaxbee/Study-Hub',
      image: '/study-hub.png',
    },
    {
      title: 'CodeQnA',
      description: [
        'Developed a social media platform with channel-based content organization using React and Node.js',
        'Implemented user authentication, threaded replies, and search',
        'Enabled media uploads and admin moderation tools',
        'Created RESTful API endpoints for data handling'
      ],
      techStack: ['React', 'Node.js', 'MySQL'],
      github: 'https://github.com/demolaxbee/programming-forum-app',
      image: '/codeqna.png',
    },
    // {
    //   title: 'Model Residence System',
    //   description: 'A JavaFX application for managing residential properties, featuring an intuitive UI and robust data management.',
    //   techStack: ['Java', 'JavaFX'],
    //   github: '#',
    //   demo: '#',
    // },
    // {
    //   title: 'Malicious URL Detector',
    //   description: 'A Python-based tool that analyzes URLs for potential security threats using machine learning algorithms.',
    //   techStack: ['Python', 'ML'],
    //   github: '#',
    //   demo: '#',
    // },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage>
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  <ul>
                    {project.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 