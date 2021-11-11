import './MainContainer.css'
import Layout from '../layout/Layout'
import Home from '../screens/Home/Home'
import AboutMe from '../screens/AboutMe/AboutMe'
import Contact from '../screens/Contact/Contact'
import Projects from '../screens/Projects/Projects'

function MainContainer() {
  return (
    <div className='main-container'>
      <Layout>
        <Home />
        <AboutMe />
        <Projects />
        <Contact /> 
      </Layout>
    </div>
  )
}

export default MainContainer
