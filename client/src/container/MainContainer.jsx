import Home from '../screens/Home/Home'
import AboutMe from '../screens/AboutMe/AboutMe'
import Project1 from '../screens/Projects/Project1/Project1'
import Project2 from '../screens/Projects/Project2/Project2'
import Project3 from '../screens/Projects/Project3/Project3'
import Project4 from '../screens/Projects/Project4/Project4'
import Contact from '../screens/Contact/Contact'

function MainContainer() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Contact /> 
    </div>
  )
}

export default MainContainer
