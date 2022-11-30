import { Me, AsideLeft, StyledMainView, SeeProjects, ButtonIcons, ButtonsContainer, Span, BoxSocial } from './styles'
import { MdArrowRightAlt } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import MyImage from '../../utils/me.png'
import { motion } from 'framer-motion'

export const MainView = () => {
  return (
    <StyledMainView>
      <AsideLeft>
        <Span
          as={motion.span}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          Hello, I'm
        </Span>
        <motion.h1
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}
        >
          Mochamad Haikal
        </motion.h1>
        <motion.h4
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}
        >
          Software Engineer
        </motion.h4>

        <ButtonsContainer>
          <SeeProjects to="projects" spy="true" smooth="true" offset={-70} duration={500}>
            <span>
              See Projects <MdArrowRightAlt size="32" />
            </span>
          </SeeProjects>

          <BoxSocial>
            <a href="https://www.linkedin.com/in/mochamadhaikal/" target="_blank" rel="noreferrer">
              <ButtonIcons>
                <AiFillLinkedin />
              </ButtonIcons>
            </a>

            <a href="https://github.com/mochamadhaikal" target="_blank" rel="noreferrer">
              <ButtonIcons>
                <AiFillGithub />
              </ButtonIcons>
            </a>
          </BoxSocial>
        </ButtonsContainer>
      </AsideLeft>

      <Me src={MyImage} alt="me" />
    </StyledMainView>
  )
}
