import { SkillsContainer, SkillsItems } from './styles'
import { DiCodeigniter, DiJavascript1, DiReact, DiSass } from 'react-icons/di'
import { SiLaravel, SiTailwindcss, SiJquery, SiBootstrap } from 'react-icons/si'

export const Skills = () => {
  const SIZE = '6rem'
  const COLOR = 'white'

  return (
    <SkillsContainer>
      <h1>
        My <span>Skills</span>
      </h1>

      <SkillsItems>
        <div>
          <DiJavascript1 size={SIZE} color={COLOR} />
          <span>JavaScript</span>
        </div>

        <div>
          <DiReact size={SIZE} color={COLOR} />
          <span>React</span>
        </div>

        <div>
          <SiLaravel size={SIZE} color={COLOR} />
          <span>Laravel</span>
        </div>

        <div>
          <DiCodeigniter size={SIZE} color={COLOR} />
          <span>CodeIgniter</span>
        </div>

        <div>
          <SiJquery size={SIZE} color={COLOR} />
          <span>Jquery</span>
        </div>

        <div>
          <SiBootstrap size={SIZE} color={COLOR} />
          <span>Bootstrap</span>
        </div>

        <div>
          <SiTailwindcss size={SIZE} color={COLOR} />
          <span>Tailwind CSS</span>
        </div>

        <div>
          <DiSass size={SIZE} color={COLOR} />
          <span>Sass</span>
        </div>
      </SkillsItems>
    </SkillsContainer>
  )
}
