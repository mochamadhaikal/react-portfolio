import { Header } from '../../components/Header'
import { MainView } from '../../components/MainView'
import { SectionContainer } from '../../containers/SectionContainer'
import { AboutMe } from '../../containers/AboutMe'
import { Skills } from '../../containers/Skills'
import { ProjectsContainer } from '../../containers/ProjectsContainer'
import Helmet from 'react-helmet'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Mochamad Haikal</title>
        <meta
          name="description"
          content="
          My name is Mochamad Haikal, I am a software developer with a passion for building software that is easy to use and easy to maintain.
        "
        />
      </Helmet>
      <Header />

      <MainView />

      <SectionContainer id="about" bgColor="#1c1e20">
        <AboutMe />
      </SectionContainer>

      <SectionContainer id="skills" bgColor="#212428">
        <Skills />
      </SectionContainer>

      <SectionContainer id="projects" bgColor="#212428">
        <ProjectsContainer />
      </SectionContainer>
    </>
  )
}
