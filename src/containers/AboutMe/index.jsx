import { StyledAboutMe, ImgContainer, MeInfo, GetCv, MySelf, MeDescription } from './styles'
import { MdArrowRightAlt } from 'react-icons/md'
import cv from '../../utils/cv.pdf'
import MyImage from '../../utils/me.png'
import { motion } from 'framer-motion'

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <ImgContainer>
        <motion.img
          src={MyImage}
          alt="This is me"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        />
      </ImgContainer>

      <MeDescription>
        <h1>
          Hello World<span> I'm KaLe.</span>
        </h1>

        <MySelf>
          <p>
          I'm a <strong>software engineer</strong> with 8 months experience. I love technology and computers very much. I am 
          reliable, can work in a team, and can quickly learn my interest in frontend development. In my free 
          time, I enjoy music, and gaming.
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
              <a href="/">
                <p>mhaikal1006@gmail.com</p>
              </a>
            </div>
          </section>

          <section>
            <div>
              <span>Phone:</span>
              <p>+62 831 1446 2202</p>
            </div>
            <div>
              <span>Instagram:</span>
              <a href="https://instagram.com/muhhaykale" target="_blank" rel="noreferrer">
                <p>@muhhaykale</p>
              </a>
            </div>
          </section>
        </MeInfo>

        <GetCv download="Mochamad Haikal_CV.pdf" href={cv} target="_blank">
          <p>Download CV</p>
          <MdArrowRightAlt size="32" />
        </GetCv>
      </MeDescription>
    </StyledAboutMe>
  )
}
