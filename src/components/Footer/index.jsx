import { FooterContainer, FooterButtonsContainer } from './styles'
import { Contact } from '../Contact'
import { ButtonIcons, ButtonLinkedIn } from '../MainView/styles'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'

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

        <span>@2022 All rights reserved to KaLe.</span>
      </FooterButtonsContainer>
    </FooterContainer>
  )
}
