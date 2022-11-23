import { StyledAboutMe, ImgContainer, MeInfo, MySelf, MeDescription } from './styles'
import MyImage from '../../utils/me.png'

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <ImgContainer>
        <img src={MyImage} alt="This is me" />
      </ImgContainer>

      <MeDescription>
        <h1>
          Hello World<span> I'm KaLe.</span>
        </h1>

        <MySelf>
          <p>
            I'm a <strong>Software Engineer</strong> with 8 months experience. I love technology and computers very
            much. I am reliable, can work in a team, and can quickly learn my interest in frontend development. In my
            free time, I enjoy music, and gaming.
          </p>
        </MySelf>

        <MeInfo>
          <section>
            <div>
              <span>Prefered name:</span>
              <p>Kale</p>
            </div>
            <div>
              <span>Email:</span>
              <a href="mailto:mhaikal1006@gmail.com">
                <p>mhaikal1006@gmail.com</p>
              </a>
            </div>
          </section>

          <section>
            <div>
              <span>Phone:</span>
              <a href="https://api.whatsapp.com/send?phone=6283114462202">
                <p>+62 831-1446-2202</p>
              </a>
            </div>
            <div>
              <span>Instagram:</span>
              <a href="https://instagram.com/muhhaykale" target="_blank" rel="noreferrer">
                <p>@muhhaykale</p>
              </a>
            </div>
          </section>
        </MeInfo>
      </MeDescription>
    </StyledAboutMe>
  )
}
