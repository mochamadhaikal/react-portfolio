import { StyledHeader, StyledNavLink, NavigationDesktop, Title, NavigationMobile, StyledLink } from './styles'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { animateScroll } from 'react-scroll/modules'
import { motion } from 'framer-motion'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleScroll = () => {
    animateScroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
    })
    setIsOpen(!isOpen)
  }

  const navItems = [
    {
      name: 'About Me',
      link: 'about',
    },
    {
      name: 'Skills',
      link: 'skills',
    },
    {
      name: 'Projects',
      link: 'projects',
    },
    {
      name: 'Contact',
      link: 'contact',
    },
  ]

  return (
    <StyledHeader as={motion.header} initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <Title>KaLe</Title>
      <NavigationDesktop>
        <StyledNavLink to="/" onClick={handleScroll}>
          HOME
        </StyledNavLink>
        {navItems.map(({ name, link }, index) => (
          <StyledLink to={link} spy="true" smooth="true" offset={-70} duration={500} key={index}>
            {name.toUpperCase()}
          </StyledLink>
        ))}
      </NavigationDesktop>
      {isOpen ? <AiOutlineClose size="25" onClick={handleClick} /> : <AiOutlineMenu size="25" onClick={handleClick} />}
      <NavigationMobile isOpen={isOpen}>
        <StyledNavLink to="/" onClick={handleScroll}>
          HOME
        </StyledNavLink>
        {navItems.map(({ name, link }, index) => (
          <StyledLink to={link} spy="true" smooth="true" offset={-70} duration={500} onClick={handleClick} key={index}>
            {name.toUpperCase()}
          </StyledLink>
        ))}
      </NavigationMobile>
    </StyledHeader>
  )
}
