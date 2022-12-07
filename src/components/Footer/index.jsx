import { FooterContainer, FooterButtonsContainer } from './styles'
import { Contact } from '../Contact'
import { ButtonIcons } from '../MainView/styles'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const Footer = () => {
  return (
    <FooterContainer>
      <Contact />

      <FooterButtonsContainer>
        <div className="buttons">
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
        </div>

        <span>Made with ❤️ by KaLe &#169; 2022</span>
      </FooterButtonsContainer>
    </FooterContainer>
  )
}
