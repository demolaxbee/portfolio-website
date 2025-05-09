import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.text};
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.cardBg};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background: ${props => props.theme.background};
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <HeaderContainer>
      <Nav>
        <Logo href="#home">AO</Logo>
        <NavLinks>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </NavLink>
          ))}
        </NavLinks>
        <ThemeToggle
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaSun />
        </ThemeToggle>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </Nav>
      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header; 